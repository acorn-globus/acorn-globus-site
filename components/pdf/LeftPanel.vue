<script setup>
import { ref, inject, onMounted } from 'vue';
import { Upload, ZoomIn, ZoomOut, ArrowBigRight, ArrowBigLeft, CaseLower, Download, FolderDown } from 'lucide-vue-next';
import ModalWrapper from '@/components/pdf/ModalWrapper.vue';
import DataSetManager from '@/components/pdf/DataSetManager.vue';


const fileInput = ref(null)
const pdfBox = inject('pdfBoxRef')
const ZOOM_STEP = 0.25;
const selectedStyle = ref('default')
const showModal = ref(false);

// Text styles for testing
const textStyles = {
    default: {},
    large: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e74c3c'
    },
    highlight: {
        backgroundColor: '#ffeaa7',
        padding: 5,
        borderRadius: 3,
        fontWeight: 'bold'
    }
}


onMounted(() => {
    if (pdfBox.value) {
        pdfBox.value.addEventListener('pdf-loaded', () => {
            console.log('PDF Loaded in LeftPanel!');
            console.log(pdfBox.value.currentPage)
            console.log(pdfBox.value.pageCount)
        });

        pdfBox.value.addEventListener('page-change', () => {
            console.log('PDF Loaded in LeftPanel!');
        });

        pdfBox.value.addEventListener('pdf-error', () => {
            console.log('PDF Loaded in LeftPanel!');
        });

        pdfBox.value.addEventListener('element-added', (event) => {
            console.log('Elemet added! :', event.detail);
        });

        pdfBox.value.addEventListener('pdf-downloaded', (event) => {
            console.log('PDf Donwloaded! :', event.detail);
        });


    }
})

const triggerFileUpload = () => {
    fileInput.value.click()
}

const handleFileUpload = async (event) => {
    const file = (event.target).files?.[0]
    if (file) {
        try {
            await pdfBox.value.loadPDF(file)
        } catch (error) {
            console.error('Failed to load PDF:', error)
        }
    }
}

const triggerZoomIn = async () => {
    const currentScale = pdfBox.value.zoomLevel;
    await pdfBox.value.setZoom(currentScale + ZOOM_STEP);
}

const triggerZoomOut = async () => {
    const currentScale = pdfBox.value.zoomLevel;
    await pdfBox.value.setZoom(currentScale - ZOOM_STEP);
}

const triggerPreviousPage = async () => {
    const currentPage = pdfBox.value.currentPage;
    const pageCount = pdfBox.value.pageCount;

    if (currentPage > 1) {
        await pdfBox.value.goToPage(currentPage - 1);
    }
}

const triggerNextPage = async () => {
    const currentPage = pdfBox.value.currentPage;
    const pageCount = pdfBox.value.pageCount;

    if (currentPage < pageCount) {
        await pdfBox.value.goToPage(currentPage + 1);
    }
}

const triggerAddText = async () => {
    if (!pdfBox.value) return

    try {
        const id = await pdfBox.value.addText(
            'Sample Text',
            { x: 100, y: 100 },
            textStyles[selectedStyle.value]
        )
        console.log('Added text element with ID:', id)
    } catch (error) {
        console.error('Error adding text:', error)
    }
}

const triggerDownload = async () => {
    try {
        await pdfBox.value.downloadPDF('document-with-elements.pdf')
    } catch (error) {
        console.error('Download failed:', error)
    }
}

</script>

<template>
    <div class="left-panel-container">

        <div class="left-toolbar">
            <input ref="fileInput" hidden="true" type="file" accept="application/pdf" @change="handleFileUpload"
                class="file-input">

            <div class="element" @click="triggerFileUpload">
                <Upload />
            </div>

            <div class="element" @click="triggerDownload">
                <Download />
            </div>

            <div class="element" @click="showModal = true">
                <FolderDown />
            </div>

            <div class="element" @click="triggerZoomIn">
                <ZoomIn />
            </div>

            <div class="element" @click="triggerZoomOut">
                <ZoomOut />
            </div>

            <div class="element" @click="triggerPreviousPage">
                <ArrowBigLeft />
            </div>

            <div class="element" @click="triggerNextPage">
                <ArrowBigRight />
            </div>

            <div class="element" @click="triggerAddText">
                <CaseLower />
            </div>

        </div>
    </div>

    <ModalWrapper :is-visible="showModal" @close="showModal = false">
        <!-- <template v-slot:header>
            <div class="modal-header">
                <h2>Custom Header</h2>
                <button @click="showModal = false">Close</button>
            </div>
        </template>
<template v-slot:body>
            <p>This is the modal body content.</p>
            <p>You can add more content here.</p>
        </template> -->
        <template v-slot:body>
            <DataSetManager />
        </template>
        <template v-slot:footer>
            <div class="modal-footer">
                <button @click="showModal = false">Cancel</button>
                <button @click="showModal = false">OK</button>
            </div>
        </template>
    </ModalWrapper>
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

.left-toolbar .element {
    margin: 2px;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
}

.element:hover {
    background-color: #3B5999;
    color: white;
}
</style>
