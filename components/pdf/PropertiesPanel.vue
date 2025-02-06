<script setup>
import { onMounted, ref, watch, inject } from "vue";

const pdfBox = inject("pdfBoxRef");

// State
const selectedElement = ref("");
const textContent = ref("");
const selectedFont = ref("Arial");
const fontSize = ref(16);
const fontWeight = ref("normal");
const fontStyle = ref("normal");
const textDecoration = ref("none");
const textColor = ref("#000000");
const backgroundColor = ref("#ffffff");
const textAlign = ref("left");

onMounted(() => {
  if (pdfBox.value) {
    pdfBox.value.addEventListener("selection-change", (details) => {
      console.log("trigger element", details.detail.selectedElementId);
      console.log(details);
      selectedElement.value = details.detail.selectedElementId;
    });

    pdfBox.value.addEventListener("element-removed", (details) => {
      selectedElement.value = pdfBox.value.selectedElementId;
    });
  }
});

// Load properties when element is selected
watch(
  () => selectedElement.value,
  async () => {
    if (selectedElement.value && pdfBox.value) {
      console.log("trigger :", selectedElement.value);
      const properties = pdfBox.value.getTextProperties(selectedElement.value);
      textContent.value =
        pdfBox.value.getSelectedElement(selectedElement.value)?.content || "";
      selectedFont.value = properties.fontFamily;
      fontSize.value = properties.fontSize;
      fontWeight.value = properties.fontWeight;
      fontStyle.value = properties.fontStyle;
      textDecoration.value = properties.textDecoration || "none";
      textColor.value = properties.color;
      backgroundColor.value = properties.backgroundColor || "#ffffff";
      textAlign.value = properties.textAlign;
    }
  }
);

// Update methods
const updateContent = () => {
  if (selectedElement.value) {
    pdfBox.value.updateTextContent(selectedElement.value, textContent.value);
  }
};

const updateProperty = (property, value) => {
  if (selectedElement.value) {
    pdfBox.value.updateTextProperty(selectedElement.value, property, value);
  }
};

// Toggle methods
const toggleBold = () => {
  const newWeight = fontWeight.value === "bold" ? "normal" : "bold";
  fontWeight.value = newWeight;
  updateProperty("fontWeight", newWeight);
};

const toggleItalic = () => {
  const newStyle = fontStyle.value === "italic" ? "normal" : "italic";
  fontStyle.value = newStyle;
  updateProperty("fontStyle", newStyle);
};

const toggleUnderline = () => {
  const newDecoration =
    textDecoration.value === "underline" ? "none" : "underline";
  textDecoration.value = newDecoration;
  updateProperty("textDecoration", newDecoration);
};

const triggerDelete = async() => {
  if (selectedElement.value) {
    await pdfBox.value.removeElementFromPage(pdfBox.value.currentPage, selectedElement.value);
  }
}

</script>

<template>
  <div class="properties-container">
    <div v-if="selectedElement">
      <div class="property-container">
        <p>Text Content</p>
        <input
          type="text"
          v-model="textContent"
          @change="updateContent"
          placeholder="Enter text"
        />
      </div>

      <div class="property-container">
        <p>Font</p>
        <div>
          <select
            v-model="selectedFont"
            @change="updateProperty('fontFamily', selectedFont)"
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
          </select>
        </div>
      </div>

      <div class="property-container">
        <p>Size</p>
        <input
          type="number"
          v-model.number="fontSize"
          @change="updateProperty('fontSize', fontSize)"
          min="8"
          max="72"
        />
      </div>

      <div class="property-container">
        <p>Style</p>
        <div class="icon-button-group">
          <button
            :class="{ active: fontWeight === 'bold' }"
            @click="toggleBold"
          >
            B
          </button>
          <button
            :class="{ active: fontStyle === 'italic' }"
            @click="toggleItalic"
          >
            I
          </button>
          <button
            :class="{ active: textDecoration === 'underline' }"
            @click="toggleUnderline"
          >
            U
          </button>
        </div>
      </div>

      <div class="property-container">
        <div class="property-container">
          <p>Text</p>
          <input
            type="color"
            v-model="textColor"
            @change="updateProperty('color', textColor)"
          />
        </div>

        <div class="property-container">
          <p>Background</p>
          <input
            type="color"
            v-model="backgroundColor"
            @change="updateProperty('backgroundColor', backgroundColor)"
          />
        </div>

        <div class="property-container">
          <p>Alignment</p>
          <div class="icon-button-group">
            <button
              v-for="align in ['Left', 'Center', 'Right']"
              :key="align"
              :class="{ active: textAlign === align }"
              @click="updateProperty('textAlign', align)"
            >
              {{ align }}
            </button>
          </div>
        </div>

        <div class="property-container">
          <div class="icon-button-group">
            <button class="delete" @click="triggerDelete">
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>

    <div v-else>
      <div class="empty-properties">
        <p>Select an element to view the properties</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.properties-container {
  padding: 14px;

  .property-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    p {
      color: grey;
    }

    input,
    select {
      padding: 8px;
      border: solid 1px #e5e7eb;
    }

    .icon-button-group {
      display: flex;
      gap: 4px;

      button {
        padding: 8px;
        min-width: 42px;
        border: solid 1px #f4f4f4;

        &:hover {
          background-color: grey;
          color: #ffffff;
        }

        &.active {
          background-color: #3b5999;
          color: #ffffff;
        }
      }

      .delete {
        background: #F7645E;
        color: #ffffff;
        border-radius: 6px;
      }
    }

    .delete {
      flex-grow: 0;
    }
  }

  .empty-properties {
      width: 80%;
      padding: 24px;
      margin: auto;
      background: #f4f4f4;
      margin-top: 24px;
      border-left: 1px solid #e0e0e0;
      p {
        color: grey;
      }
    }
}
</style>
