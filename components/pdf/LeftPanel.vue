<script setup>
import { ref, inject, onMounted } from "vue";
import {
  Upload,
  ZoomIn,
  ZoomOut,
  ArrowBigRight,
  ArrowBigLeft,
  CaseLower,
  Download,
  FolderDown,
  FilePlus2,
} from "lucide-vue-next";
import ModalWrapper from "@/components/pdf/ModalWrapper.vue";
import DataSetManager from "@/components/pdf/DataSetManager.vue";

const fileInput = ref(null);
const pdfBox = inject("pdfBoxRef");
const ZOOM_STEP = 0.25;
const selectedStyle = ref("default");
const showModal = ref(false);

// Text styles for testing
const textStyles = {
  default: {},
  large: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e74c3c",
  },
  highlight: {
    backgroundColor: "#ffeaa7",
    padding: 5,
    borderRadius: 3,
    fontWeight: "bold",
  },
};

onMounted(() => {
  if (pdfBox.value) {
    pdfBox.value.addEventListener("pdf-loaded", () => {
      console.log("PDF Loaded in LeftPanel!");
      console.log(pdfBox.value.currentPage);
      console.log(pdfBox.value.pageCount);
    });

    pdfBox.value.addEventListener("page-change", () => {
      console.log("PDF Loaded in LeftPanel!");
    });

    pdfBox.value.addEventListener("pdf-error", () => {
      console.log("PDF Loaded in LeftPanel!");
    });

    pdfBox.value.addEventListener("element-added", (event) => {
      console.log("Elemet added! :", event.detail);
    });

    pdfBox.value.addEventListener("pdf-downloaded", (event) => {
      console.log("PDf Donwloaded! :", event.detail);
    });
  }
});

const triggerFileUpload = () => {
  fileInput.value.click();
};

const handleFileUpload = async (event) => {
  const file = event.target.files?.[0];
  if (file) {
    try {
      await pdfBox.value.loadPDF(file);
    } catch (error) {
      console.error("Failed to load PDF:", error);
    }
  }
};

const triggerZoomIn = async () => {
  const currentScale = pdfBox.value.zoomLevel;
  await pdfBox.value.setZoom(currentScale + ZOOM_STEP);
};

const triggerZoomOut = async () => {
  const currentScale = pdfBox.value.zoomLevel;
  await pdfBox.value.setZoom(currentScale - ZOOM_STEP);
};

const triggerPreviousPage = async () => {
  const currentPage = pdfBox.value.currentPage;
  const pageCount = pdfBox.value.pageCount;

  if (currentPage > 1) {
    await pdfBox.value.goToPage(currentPage - 1);
  }
};

const triggerNextPage = async () => {
  const currentPage = pdfBox.value.currentPage;
  const pageCount = pdfBox.value.pageCount;

  if (currentPage < pageCount) {
    await pdfBox.value.goToPage(currentPage + 1);
  }
};

const triggerAddText = async () => {
  if (!pdfBox.value) return;

  try {
    const id = await pdfBox.value.addText(
      "Sample Text",
      { x: 100, y: 100 },
      textStyles[selectedStyle.value]
    );
    console.log("Added text element with ID:", id);
  } catch (error) {
    console.error("Error adding text:", error);
  }
};

const triggerDownload = async () => {
  try {
    await pdfBox.value.downloadPDF("document-with-elements.pdf");
  } catch (error) {
    console.error("Download failed:", error);
  }
};

const triggerAddPage = async () => {
  try {
    await pdfBox.value.addBlankPage();
  } catch (error) {
    console.error("Add Blank Page failed:", error);
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

      <div class="element" @click="triggerAddPage">
        <FilePlus2 />
        <p class="tooltip-text">Add New Page</p>
      </div>

      <div class="element" @click="triggerFileUpload">
        <Upload />
        <p class="tooltip-text">Upload PDF file</p>
      </div>

      <div class="element" @click="triggerDownload">
        <Download />
        <p class="tooltip-text">Download PDF file</p>
      </div>

      <div class="element" @click="showModal = true">
        <FolderDown />
        <p class="tooltip-text">Download Bulk PDF Files</p>
      </div>

      <div class="element" @click="triggerZoomIn">
        <ZoomIn />
        <p class="tooltip-text">Zoom In PDF</p>
      </div>

      <div class="element" @click="triggerZoomOut">
        <ZoomOut />
        <p class="tooltip-text">Zoom Out PDF</p>
      </div>

      <div class="element" @click="triggerPreviousPage">
        <ArrowBigLeft />
        <p class="tooltip-text">Previous Page</p>
      </div>

      <div class="element" @click="triggerNextPage">
        <ArrowBigRight />
        <p class="tooltip-text">Next Page</p>
      </div>

      <div class="element" @click="triggerAddText">
        <CaseLower />
        <p class="tooltip-text">Add Text</p>
      </div>
    </div>
  </div>

  <ModalWrapper :is-visible="showModal" @close="showModal = false">
    <template v-slot:body>
      <DataSetManager />
    </template>
    <template v-slot:footer>
      <div class="modal-footer">
        <div class="actions">
            <button class="alert" @click="showModal = false">Cancel</button>
        </div>
      </div>
    </template>
  </ModalWrapper>
</template>

<style scoped lang="scss">
.left-panel-container {
  position: absolute;
  z-index: 1;
  top: 22px;
  left: 22px;
}

.left-toolbar {
  display: flex;
  flex-direction: column;

  .element {
    position: relative;
    margin: 2px;
    padding: 8px;
    background-color: white;
    border-radius: 8px;

    &:hover {
      background-color: #3b5999;
      color: white;

      .tooltip-text {
        visibility: visible;
        opacity: 1;
      }
    }

    .tooltip-text {
      border: solid 1px #e0e0e0;
      visibility: hidden;
      min-width: 200px; /* Set a maximum width */
      background-color: #ffffff;
      color: grey;
      text-align: center;
      border-radius: 6px;
      padding: 5px 12px;
      position: absolute;
      z-index: 1; /* Ensure it's above other content */
      bottom: 10%; /* Position below the container */
      left: 120%;
      //margin-left: -60px; /* Center the tooltip */
      opacity: 0;
      transition: opacity 0.5s; /* Smooth appearance */
    }
  }
}

.modal-footer {
    padding: 14px;
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

  button.secondary, button.alert {
    background: white;
  }

  button.alert:hover {
    background: #F7645E;
    color: white
  }
}
</style>
