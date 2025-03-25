<script setup>
import { ref, inject, onMounted, computed, watch } from "vue";
import {
  Upload,
  ZoomIn,
  ZoomOut,
  ArrowBigRight,
  ArrowBigLeft,
  CaseLower,
  Download,
  FilePlus2,
  Trash2,
  FolderDown
} from "lucide-vue-next";

const props = defineProps({
  pdfPandora: Object,
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  zoomLevel: Number
});

const emit = defineEmits([
  'upload-pdf', 
  'download-pdf', 
  'add-element', 
  'add-page', 
  'delete-page', 
  'prev-page', 
  'next-page',
  'zoom-in',
  'zoom-out',
  'show-bulk-download'
]);

const fileInput = ref(null);

const isPrevPageDisabled = computed(() => {
  return props.currentPage <= 1;
});

const isNextPageDisabled = computed(() => {
  return props.currentPage >= props.totalPages;
});

const isDeletePageDisabled = computed(() => {
  return props.totalPages <= 1;
});

const triggerFileUpload = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  emit('upload-pdf', event);
};

const triggerZoomIn = () => {
  emit('zoom-in');
};

const triggerZoomOut = () => {
  emit('zoom-out');
};

const triggerPreviousPage = () => {
  console.log('Triggering previous page, disabled:', isPrevPageDisabled.value, 'Current page:', props.currentPage);
  if (!isPrevPageDisabled.value) {
    emit('prev-page');
  }
};

const triggerNextPage = () => {
  console.log('Triggering next page, disabled:', isNextPageDisabled.value, 'Current page:', props.currentPage);
  if (!isNextPageDisabled.value) {
    emit('next-page');
  }
};

const triggerAddText = () => {
  emit('add-element');
};

const triggerDownload = () => {
  emit('download-pdf');
};

const triggerBulkDownload = () => {
  emit('show-bulk-download');
};

const triggerAddPage = () => {
  emit('add-page');
};

const triggerDeletePage = () => {
  if (!isDeletePageDisabled.value) {
    emit('delete-page');
  }
};
</script>

<template>
  <div class="left-panel-container">
    <div class="left-toolbar">
      <input
        ref="fileInput"
        hidden="true"
        type="file"
        accept="application/pdf"
        @change="handleFileUpload"
        class="file-input"
      />

      <div class="element" @click="triggerFileUpload">
        <Upload />
        <p class="tooltip-text">Upload PDF file</p>
      </div>

      <div class="element" @click="triggerDownload">
        <Download />
        <p class="tooltip-text">Download PDF file</p>
      </div>

      <div class="element" @click="triggerBulkDownload">
        <FolderDown />
        <p class="tooltip-text">Bulk Download PDF Files</p>
      </div>

      <div class="element" @click="triggerAddPage">
        <FilePlus2 />
        <p class="tooltip-text">Add New Page</p>
      </div>

      <div 
        class="element" 
        @click="triggerDeletePage" 
        :class="{ disabled: isDeletePageDisabled }"
      >
        <Trash2 />
        <p class="tooltip-text">Delete Current Page</p>
      </div>

      <div 
        class="element" 
        @click="triggerPreviousPage" 
        :class="{ disabled: isPrevPageDisabled }"
      >
        <ArrowBigLeft />
        <p class="tooltip-text">Previous Page ({{ currentPage }}/{{ totalPages }})</p>
      </div>

      <div 
        class="element" 
        @click="triggerNextPage" 
        :class="{ disabled: isNextPageDisabled }"
      >
        <ArrowBigRight />
        <p class="tooltip-text">Next Page ({{ currentPage }}/{{ totalPages }})</p>
      </div>

      <div class="element" @click="triggerZoomOut">
        <ZoomOut />
        <p class="tooltip-text">Zoom Out</p>
      </div>

      <div class="element" @click="triggerZoomIn">
        <ZoomIn />
        <p class="tooltip-text">Zoom In</p>
      </div>

      <div class="element" @click="triggerAddText">
        <CaseLower />
        <p class="tooltip-text">Add Text</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-panel-container {
  position: absolute;
  z-index: 1;
  top: 22px;
  left: 22px;
}

.left-toolbar {
  display: flex;
  flex-direction: column;
}

.element {
  position: relative;
  margin: 2px;
  padding: 8px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.element:hover:not(.disabled) {
  background-color: #3b5999;
  color: white;
}

.element:hover:not(.disabled) .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.element.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tooltip-text {
  border: solid 1px #e0e0e0;
  visibility: hidden;
  min-width: 200px;
  background-color: #ffffff;
  color: grey;
  text-align: center;
  border-radius: 6px;
  padding: 5px 12px;
  position: absolute;
  z-index: 1;
  bottom: 10%;
  left: 120%;
  opacity: 0;
  transition: opacity 0.5s;
}
</style> 