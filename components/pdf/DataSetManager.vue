<!-- src/components/DataSetsManager.vue -->
<template>
    <div class="data-sets-manager">
      <!-- File Upload Section -->
      <div class="upload-section">
        <h3>Upload Data</h3>
        <div class="file-input">
          <input 
            type="file" 
            accept=".csv,.json" 
            @change="handleFileUpload"
            ref="fileInput"
          >
          <span class="hint">Upload CSV or JSON file</span>
        </div>
      </div>
  
      <!-- Data Preview Section -->
      <div class="preview-section" v-if="dataSets.length > 0">
        <h3>Data Sets ({{ dataSets.length }})</h3>
        
        <!-- Filename Pattern -->
        <div class="filename-pattern">
          <label>Filename Pattern:</label>
          <input 
            v-model="filenamePattern" 
            placeholder="document-{{id}}"
            @change="updateFilenames"
          >
        </div>
  
        <!-- Data Sets Table -->
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Filename</th>
                <th v-for="header in tableHeaders" :key="header">
                  {{ header }}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(set, index) in dataSets" :key="set.id">
                <td>{{ set.id }}</td>
                <td>
                  <input 
                    v-model="set.filename" 
                    :placeholder="generateFilename(set)"
                  >
                </td>
                <td v-for="header in tableHeaders" :key="header">
                  {{ set.variables[header] }}
                </td>
                <td>
                  <button @click="removeDataSet(index)">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Actions -->
      <div class="actions" v-if="dataSets.length > 0">
        <button 
          @click="clearDataSets" 
          class="secondary"
        >
          Clear All
        </button>
        <button 
          @click="startBatchDownload"
          :disabled="isProcessing"
          class="primary"
        >
          {{ isProcessing ? 'Processing...' : 'Start Batch Download' }}
        </button>
      </div>
  
      <!-- Progress -->
      <div class="progress" v-if="isProcessing">
        <div 
          class="progress-bar"
          :style="{ width: `${progress}%` }"
        ></div>
        <span>{{ progress.toFixed(1) }}% ({{ processedCount }}/{{ dataSets.length }})</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, inject } from 'vue';
  import Papa from 'papaparse';
  
  
  // State
  const dataSets = ref([]);
  const filenamePattern = ref('document-{{id}}');
  const isProcessing = ref(false);
  const progress = ref(0);
  const processedCount = ref(0);
  const fileInput = null;
  const pdfBox = inject('pdfBoxRef')

  
  // Computed
  const tableHeaders = computed(() => {
    if (dataSets.value.length === 0) return [];
    return Object.keys(dataSets.value[0].variables);
  });
  
  // File Upload Handler
  const handleFileUpload = async (event) => {
    const file = (event.target).files?.[0];
    if (!file) return;
  
    if (file.name.endsWith('.csv')) {
      parseCSV(file);
    } else if (file.name.endsWith('.json')) {
      parseJSON(file);
    }
  
    // Reset file input
    if (fileInput.value) fileInput.value.value = '';
  };
  
  // Parse CSV file
  const parseCSV = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const newDataSets = results.data.map((row, index) => ({
          id: (index + 1).toString(),
          variables: row,
          filename: generateFilename({ id: (index + 1).toString() })
        }));
        dataSets.value = newDataSets;
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  };
  
  // Parse JSON file
  const parseJSON = async (file) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (Array.isArray(data)) {
        const newDataSets = data.map((row, index) => ({
          id: (index + 1).toString(),
          variables: row,
          filename: generateFilename({ id: (index + 1).toString() })
        }));
        dataSets.value = newDataSets;
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };
  
  // Generate filename from pattern
  const generateFilename = (set) => {
    return filenamePattern.value.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return key === 'id' ? set.id : match;
    });
  };
  
  // Update all filenames when pattern changes
  const updateFilenames = () => {
    dataSets.value = dataSets.value.map(set => ({
      ...set,
      filename: generateFilename(set)
    }));
  };
  
  // Remove data set
  const removeDataSet = (index) => {
    dataSets.value.splice(index, 1);
  };
  
  // Clear all data sets
  const clearDataSets = () => {
    dataSets.value = [];
    progress.value = 0;
    processedCount.value = 0;
  };
  
  // Start batch download
  const startBatchDownload = async () => {
    if (dataSets.value.length === 0) return;
  
    try {
      isProcessing.value = true;
      progress.value = 0;
      processedCount.value = 0;
  
      // Setup progress handler
      const handleProgress = (e) => {
        progress.value = e.detail.percentage;
        processedCount.value = e.detail.current;
      };
  
      pdfBox.value.addEventListener('batch-progress', handleProgress);
  
      // Start batch download
      await pdfBox.value.batchDownload(dataSets.value);
  
      pdfBox.value.removeEventListener('batch-progress', handleProgress);
  
    } catch (error) {
      console.error('Batch download failed:', error);
    } finally {
      isProcessing.value = false;
    }
  };
  </script>
  
  <style scoped>
  .data-sets-manager {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .upload-section, .preview-section {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .file-input {
    margin: 1rem 0;
  }
  
  .hint {
    font-size: 0.9rem;
    color: #666;
    margin-left: 0.5rem;
  }
  
  .filename-pattern {
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .data-table {
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: left;
  }
  
  .actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
  
  button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.primary {
    background: #1a73e8;
    color: white;
    border-color: #1a73e8;
  }
  
  button.secondary {
    background: white;
  }
  
  .progress {
    height: 20px;
    background: #eee;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  
  .progress-bar {
    height: 100%;
    background: #4CAF50;
    transition: width 0.3s ease;
  }
  
  .progress span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 12px;
  }
  </style>