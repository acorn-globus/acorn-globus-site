<script setup>
import { ref, computed, watch, toRefs } from 'vue';
import { X } from "lucide-vue-next";

const props = defineProps({
  selectedElement: Object,
  fonts: Array,
  variables: Object
});

// Use toRefs to make props reactive
const { selectedElement, variables } = toRefs(props);

const emit = defineEmits(['update-element-style', 'add-variable', 'delete-variable']);

const tabs = [
  {
    key: "properties",
    value: "Properties"
  },
  {
    key: "data",
    value: "Data"
  }
];

const currentTab = ref(tabs[0]);
const newVarKey = ref('');
const newVarValue = ref('');

// Create local reactive copies of the properties
const localVariables = ref({ ...props.variables || {} });
const localBold = ref(props.selectedElement?.bold || false);
const localItalic = ref(props.selectedElement?.italic || false);
const localUnderline = ref(props.selectedElement?.underline || false);

// Update local state when props change
watch(selectedElement, (newElement) => {
  if (newElement) {
    localBold.value = newElement.bold || false;
    localItalic.value = newElement.italic || false;
    localUnderline.value = newElement.underline || false;
  }
}, { immediate: true });

watch(variables, (newVariables) => {
  localVariables.value = { ...newVariables || {} };
}, { immediate: true });

// Text properties
const textContent = computed(() => selectedElement.value?.text || '');
const fontFamily = computed(() => selectedElement.value?.fontFamily || 'Arial');
const fontSize = computed(() => selectedElement.value?.fontSize || 16);
const textColor = computed(() => selectedElement.value?.fill || '#000000');
const backgroundColor = computed(() => selectedElement.value?.backgroundColor || '#ffffff');

// Update methods
const updateContent = (event) => {
  if (selectedElement.value) {
    emit('update-element-style', 'text', event.target.value);
  }
};

const updateProperty = (property, value) => {
  emit('update-element-style', property, value);
};

// Toggle methods
const toggleBold = () => {
  localBold.value = !localBold.value;
  updateProperty("bold", localBold.value);
};

const toggleItalic = () => {
  localItalic.value = !localItalic.value;
  updateProperty("italic", localItalic.value);
};

const toggleUnderline = () => {
  localUnderline.value = !localUnderline.value;
  updateProperty("underline", localUnderline.value);
};

const triggerDelete = () => {
  if (selectedElement.value) {
    emit("delete-element", selectedElement.id)
  }
};

// Variables methods
const addVariable = () => {
  if (newVarKey.value && newVarValue.value) {
    // Update local state immediately
    localVariables.value = {
      ...localVariables.value,
      [newVarKey.value]: newVarValue.value
    };

    emit('add-variable', newVarKey.value, newVarValue.value);
    newVarKey.value = '';
    newVarValue.value = '';
  }
};

const removeVariable = (key) => {
  // Update local state immediately
  const updatedVariables = { ...localVariables.value };
  delete updatedVariables[key];
  localVariables.value = updatedVariables;

  emit('delete-variable', key);
};

const updateVariableValue = (key, event) => {
  // Update local state immediately
  localVariables.value = {
    ...localVariables.value,
    [key]: event.target.value
  };

  emit('add-variable', key, event.target.value);
};
</script>

<template>
  <div class="right-panel-container">
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.key" :class="{ active: currentTab.key === tab.key }"
        @click="currentTab = tab">
        {{ tab.value }}
      </button>
    </div>

    <div class="panels">
      <!-- Properties Panel -->
      <div v-if="currentTab.key === 'properties'" class="panel">
        <div v-if="selectedElement">
          <div class="property-row">
            <div class="label">Text Content</div>
            <input type="text" :value="textContent" @input="updateContent" placeholder="Enter text"
              class="text-input" />
          </div>

          <div class="property-row">
            <div class="label">Font</div>
            <select :value="fontFamily" @change="updateProperty('fontFamily', $event.target.value)">
              <option v-for="font in fonts" :key="font.value" :value="font.value">
                {{ font.name }}
              </option>
            </select>
          </div>

          <div class="property-row">
            <div class="label">Size</div>
            <input type="number" :value="fontSize" @change="updateProperty('fontSize', parseInt($event.target.value))"
              min="8" max="72" />
          </div>

          <div class="property-row">
            <div class="label">Style</div>
            <div class="style-buttons">
              <button :class="{ active: localBold }" @click="toggleBold">
                <strong>B</strong>
              </button>
              <button :class="{ active: localItalic }" @click="toggleItalic">
                <em>I</em>
              </button>
              <button :class="{ active: localUnderline }" @click="toggleUnderline">
                <u>U</u>
              </button>
            </div>
          </div>

          <div class="property-row">
            <div class="label">Text Color</div>
            <input type="color" :value="textColor" @change="updateProperty('fill', $event.target.value)" />
          </div>

          <div class="property-row">
            <div class="label">Background</div>
            <input type="color" :value="backgroundColor"
              @change="updateProperty('backgroundColor', $event.target.value)" />
          </div>

          <div class="delete-row">
            <button class="delete-btn" @click="triggerDelete">
              Delete
            </button>
          </div>
        </div>

        <div v-else class="empty-state">
          <p>Select an element to view properties</p>
        </div>
      </div>

      <!-- Variables Panel -->
      <div v-if="currentTab.key === 'data'" class="panel">
        <div class="variable-container">
          <div class="label">Variable</div>
          <div class="variable-inputs">
            <input v-model="newVarKey" placeholder="Variable name" @keyup.enter="addVariable" />
            <input v-model="newVarValue" placeholder="Value" @keyup.enter="addVariable" />
            <button class="add-btn" @click="addVariable">Add</button>
          </div>
        </div>

        <div class="variable-list">
          <div v-for="(value, key) in localVariables" :key="key" class="variable-item">
            <div class="label">{{ key }}</div>
            <div class="variable-value-row">
              <input :value="value" @change="updateVariableValue(key, $event)" />
              <button class="delete-var-btn" @click="removeVariable(key)">
                <X />
              </button>
            </div>
          </div>

          <div v-if="!localVariables || Object.keys(localVariables).length === 0" class="empty-state">
            <p>Create variables in lowercase with underscores (no spaces):</p>
            <p>
              <br />
              Example:
              <br />
              <code>customer_name</code>,
              <br />
              <code>invoice_number</code>
              <br />
              <br />
              Use in text by wrapping with
              <br />
              <code>&#123;&#123; brackets &#125;&#125;</code>
              <br />
              <br />
              Example:
              <br />
              <code>"Hello &#123;&#123; full_name &#125;&#125;"</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-panel-container {
  border-left: 1px solid #e0e0e0;
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 400px;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
}

.tabs button {
  flex: 1;
  border-radius: 0;
  padding: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
  font-size: 16px;
  color: #333;
}

.tabs button.active {
  border-bottom-color: #3B5999;
  color: #3B5999;
}

.panels {
  flex: 1;
  overflow: auto;
}

.panel {
  padding: 14px 20px;
}

/* Properties Panel Styles */
.property-row {
  margin-bottom: 12px;
}

.label {
  color: #555;
  margin-bottom: 8px;
  font-size: 14px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input[type="color"] {
  height: 40px;
  padding: 2px;
}

.style-buttons {
  display: flex;
  gap: 10px;
}

.style-buttons button {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.style-buttons button.active {
  background: #3B5999;
  color: white;
  border-color: #3B5999;
}

.delete-row {
  margin-top: 30px;
}

.delete-btn {
  width: 100%;
  padding: 10px;
  background: #F7645E;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.empty-state {
  width: 80%;
  padding: 16px;
  margin: auto;
  background: #f4f4f4;
  margin-top: 24px;
  border-left: 1px solid #e0e0e0;
}

.empty-state p {
  color: grey;
}

/* Variables Panel Styles */
.variable-container {
  margin-bottom: 20px;
}

.variable-inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-btn {
  padding: 10px;
  background: #3B5999;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.variable-list {
  margin-top: 20px;
}

.variable-item {
  margin-bottom: 15px;
}

.variable-value-row {
  display: flex;
  align-items: center;
}

.variable-value-row input {
  flex: 1;
}

.delete-var-btn {
  background: none;
  border: none;
  color: #F7645E;
  cursor: pointer;
  padding: 5px;
  margin-left: 5px;
}

code {
  background: #f5f5f5;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: monospace;
}
</style>