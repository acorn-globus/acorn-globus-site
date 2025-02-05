<script setup>
import { ref, provide } from 'vue';
import CanvasWrapper from '@/components/pdf/CanvasWrapper.vue';
import LeftPanel from '@/components/pdf/LeftPanel.vue';
import RightPanel from '@/components/pdf/RightPanel.vue';

const pdfBox = ref()
provide('pdfBoxRef', pdfBox);

</script>

<template>

    <div class="base-container">
        <LeftPanel />

        <CanvasWrapper>
            <pdf-box ref="pdfBox" class="pdf-viewer" @pdf-loaded="handlePDFLoaded" @pdf-error="handlePDFError"
                @page-change="handlePageChange"></pdf-box>
        </CanvasWrapper>

        <RightPanel />

    </div>
</template>

<style scoped>
body {
  margin: 0px;
}
.base-container {
    position: relative;
    width: 100vw;
    height: 90vh;
    margin: 0;
    padding: 0;
}

.container {
    width: 100px;
    height: 100px;
    background-color: grey;
}
</style>
