<script setup>
  import { ref, onMounted, inject } from 'vue'
  import { Plus, X } from 'lucide-vue-next';

  const pdfBox = inject('pdfBoxRef')

  const variables = ref({});
  const newVarKey = ref('');

  // Load existing variables
  onMounted( () => {
    if (pdfBox.value) {
    variables.value = pdfBoxRef.value.getVariables()
  }
  })

  // Add new variable
  const addVariable = () => {
    if (newVarKey.value) {
      variables.value[newVarKey.value] = ""
      updateVariables()
      newVarKey.value = '';
    }
  }

  // Remove variable
  const removeVariable = (key) => {
    delete variables.value[key]
    updateVariables()
  }

  // Update variables in PDFBox
  const updateVariables = () => {
    pdfBox.value.setVariables(variables.value)
  }
</script>


<template>
    <div>
      <div class="variable-container">
      <p>Variable Name</p>
      <div>
        <input
          v-model="newVarKey"
          placeholder="Variable name"
          @keyup.enter="addVariable"
         />
        <Plus @click="addVariable" class="icon" />
      </div>
    </div>

    <div class="variable-list-container">
      <div v-for="(value, key) in variables" :key="key">
        <p>{{ key }}</p>
        <div class="item">
          <input
            v-model="variables[key]"
            @change="updateVariables"
          />
          <X @click="removeVariable(key)" class="icon" />
        </div>
      </div>
    </div>
    </div>
  </template>


  <style scoped>
  .variable-container {
    padding: 24px 12px;
    border-bottom: solid 2px #f4f4f4;

    p {
      columns: #4B5563;
      margin: 0px;
    }

    input {
      padding: 8px;
      border: solid 1px #E5E7EB;
      flex-grow: 1;
    }

    div {
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .icon {
      align-self: center;
      margin-left: 6px;
      cursor: pointer;
    }
  }

  .variable-list-container {
    margin-top: 2px;
    padding: 12px;

    p {
      columns: #4B5563;
      margin: 0px;
      margin-top: 12px;
    }

    input {
      padding: 8px;
      border: solid 1px #E5E7EB;
      flex-grow: 1;
    }

    .item {
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .icon {
      align-self: center;
      margin-left: 6px;
      cursor: pointer;
    }

  }

  </style>
