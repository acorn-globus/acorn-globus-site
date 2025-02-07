<script setup>
import { ref, provide } from "vue";
import CanvasWrapper from "@/components/pdf/CanvasWrapper.vue";
import LeftPanel from "@/components/pdf/LeftPanel.vue";
import RightPanel from "@/components/pdf/RightPanel.vue";

const pdfBox = ref();
provide("pdfBoxRef", pdfBox);
</script>

<template>
  <div class="base-container">
    <LeftPanel />

    <CanvasWrapper>
      <pdf-box
        ref="pdfBox"
        class="pdf-viewer"
        @pdf-loaded="handlePDFLoaded"
        @pdf-error="handlePDFError"
        @page-change="handlePageChange"
      ></pdf-box>
    </CanvasWrapper>

    <RightPanel />

    <a
      href="https://ezxdovus.formester.com/f/d853f32e-06be-461d-95fc-e4ae82408340"
      target="_blank"
      class="cta mt-4 md:mt-0 inline-block bg-yellow-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
      >Interested</a
    >
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

  .cta {
    z-index: 1;
    position: fixed;
    bottom: 22px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}

.container {
  width: 100px;
  height: 100px;
  background-color: grey;
}
</style>
