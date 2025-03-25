<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import CanvasWrapper from "@/components/pdf/CanvasWrapper.vue";
import NewLeftPanel from "@/components/pdf/NewLeftPanel.vue";
import NewRightPanel from "@/components/pdf/NewRightPanel.vue";
import ModalWrapper from "@/components/pdf/ModalWrapper.vue";
import DataSetManager from "@/components/pdf/DataSetManager.vue";

const pdfPandora = ref();
const currentPage = ref(1);
const totalPages = ref(0);
const variables = ref({});
const selectedElement = ref(null);
const zoomLevel = ref(1);
const showBulkDownloadModal = ref(false);

// Watch for changes to debug the values
watch(currentPage, (newVal) => {
  console.log('PDF Box - Current page changed:', newVal);
});

watch(totalPages, (newVal) => {
  console.log('PDF Box - Total pages changed:', newVal);
});

const fonts = [
  { name: 'Roboto', value: 'Roboto' },
  { name: 'Open Sans', value: 'OpenSans' },
  { name: 'Helvetica', value: 'helvetica' },
  { name: 'Montserrat', value: 'Montserrat' },
  { name: 'Lato', value: 'Lato' },
  { name: 'Poppins', value: 'Poppins' },
  { name: 'Merriweather', value: 'merriweather' },
  { name: 'Playfair Display', value: 'playfairDisplay' },
  { name: 'Crimson Text', value: 'crimsonText' },
  { name: 'Libre Baskerville', value: 'libreBaskerville' },
  { name: 'Roboto Slab', value: 'robotoSlab' },
  { name: 'Dancing Script', value: 'dancingScript' },
  { name: 'Great Vibes', value: 'greatVibes' },
  { name: 'Pacifico', value: 'Pacifico' },
  { name: 'Satisfy', value: 'Satisfy' },
  { name: 'Caveat', value: 'Caveat' },
  { name: 'Fira Code', value: 'FiraCode' },
  { name: 'Source Code Pro', value: 'SourceCodePro' },
  { name: 'Roboto Mono', value: 'RobotoMono' },
  { name: 'Bebas Neue', value: 'BebasNeue' },
  { name: 'Oswald', value: 'Oswald' }
];

onMounted(async () => {
  if (pdfPandora.value) {
    pdfPandora.value.addEventListener("pdf-loaded", ({target}) => {
      totalPages.value = target.totalPages;
      currentPage.value = target.currentPageNumber;
      console.log("PDF loaded - Current page:", currentPage.value, "Total pages:", totalPages.value);
    });

    pdfPandora.value.addEventListener("page-changed", ({target}) => {
      totalPages.value = target.totalPages;
      currentPage.value = target.currentPageNumber;
    });

    pdfPandora.value.addEventListener("page-added", ({target}) => {
      totalPages.value = target.totalPages;
      currentPage.value = target.currentPageNumber;
    });

    pdfPandora.value.addEventListener("pdf-error", (e) => {
      console.error("PDF ERROR", e.target);
    });

    pdfPandora.value.addEventListener("element-added", (event) => {
      console.log("Element added! :", event.target);
    });

    pdfPandora.value.addEventListener("variables-updated", (e) => {
      variables.value = e.target.variables;
    });

    pdfPandora.value.addEventListener("variable-deleted", ({target}) => {
      variables.value = target.variables;
    });

    pdfPandora.value.addEventListener("selection-change", (e) => {
      selectedElement.value = e.target.element;
    });

    pdfPandora.value.addEventListener("text-updated", ({target}) => {
      if (selectedElement.value) {
        Object.assign(selectedElement.value, target.element);
      }
    });
  }
});

const handleFileUpload = async (event) => {
  const file = event.target.files?.[0];
  if (file) {
    try {
      await pdfPandora.value.loadPDF(file);
    } catch (error) {
      console.error("Failed to load PDF:", error);
    }
  }
};

const handleDownload = async () => {
  try {
    if (pdfPandora.value) {
      await pdfPandora.value.createPDF();
    }
  } catch (error) {
    console.error("Failed to download PDF:", error);
  }
};

const addElement = () => {
  pdfPandora.value.addText();
};

const goToPreviousPage = async () => {
  try {
    await pdfPandora.value.prevPage();
  } catch (error) {
    console.error("Failed to go to previous page:", error);
  }
};

const goToNextPage = async () => {
  try {
    await pdfPandora.value.nextPage();
  } catch (error) {
    console.error("Failed to go to next page:", error);
  }
};

const addNewPage = async () => {
  try {
    await pdfPandora.value.addPage(currentPage.value);
  } catch (error) {
    console.error("Failed to add page:", error);
  }
};

const setZoom = async (zoom) => {
  try {
    await pdfPandora.value.setZoom(zoom);
  } catch (error) {
    console.error("Failed to set zoom:", error);
  }
};

const deletePage = async () => {
  try {
    if (totalPages.value > 1) {
      await pdfPandora.value.removePage(currentPage.value);
    }
  } catch (error) {
    console.error("Failed to delete page:", error);
  }
};

const zoomIn = async () => {
  try {
    zoomLevel.value = Math.min(zoomLevel.value + 0.25, 3);
    await setZoom(zoomLevel.value);
  } catch (error) {
    console.error("Failed to zoom in:", error);
  }
};

const zoomOut = async () => {
  try {
    zoomLevel.value = Math.max(zoomLevel.value - 0.25, 0.5);
    await setZoom(zoomLevel.value);
  } catch (error) {
    console.error("Failed to zoom out:", error);
  }
};

const addVariable = (key, value) => {
  console.log("Adding variable:", key, value);
  pdfPandora.value.setVariables({[key]: value});
};

const deleteVariable = (key) => {
  console.log("Deleting variable:", key);
  pdfPandora.value.deleteVariable(key);
};

const updateElementStyle = (property, value) => {
  console.log("Updating element style:", property, value);
  if (selectedElement.value) {
    pdfPandora.value?.updateText(selectedElement.value.id, {[property]: value});
  }
};

const deleteElement = () => {
  if (selectedElement.value) {
    pdfPandora.value?.deleteElement(selectedElement.value.id);
    selectedElement.value = null;
  }
}

const showBulkDownload = () => {
  showBulkDownloadModal.value = true;
};
</script>

<template>
  <div class="pdf-editor">
    <div class="main-content">
      <div class="canvas-area">
        <CanvasWrapper>
          <pdf-pandora ref="pdfPandora"></pdf-pandora>
        </CanvasWrapper>
      </div>
      
      <NewLeftPanel 
        :pdfPandora="pdfPandora"
        :currentPage="currentPage"
        :totalPages="totalPages"
        :zoomLevel="zoomLevel"
        @upload-pdf="handleFileUpload"
        @download-pdf="handleDownload"
        @add-element="addElement"
        @add-page="addNewPage"
        @delete-page="deletePage"
        @prev-page="goToPreviousPage"
        @next-page="goToNextPage"
        @zoom-in="zoomIn"
        @zoom-out="zoomOut"
        @show-bulk-download="showBulkDownload"
      />
      
      <NewRightPanel 
        :selectedElement="selectedElement"
        :fonts="fonts"
        :variables="variables"
        @update-element-style="updateElementStyle"
        @add-variable="addVariable"
        @delete-variable="deleteVariable"
        @delete-element="deleteElement"
      />
    </div>
  </div>

  <ModalWrapper :is-visible="showBulkDownloadModal" @close="showBulkDownloadModal = false">
    <template v-slot:body>
      <DataSetManager />
    </template>
    <template v-slot:footer>
      <div class="modal-actions">
        <button class="btn-cancel" @click="showBulkDownloadModal = false">Cancel</button>
      </div>
    </template>
  </ModalWrapper>
</template>

<style scoped>
.pdf-editor {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

.main-content {
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
}

.canvas-area {
  flex: 1;
  position: relative;
  overflow: auto;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-cancel {
  padding: 8px 16px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-cancel:hover {
  background-color: #e5e5e5;
}
</style>
