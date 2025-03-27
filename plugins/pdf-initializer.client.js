export default defineNuxtPlugin(async (nuxtApp) => {
    try {
      // Import your library
      const pdfPandora = await import('~/public/js/pdf-pandora.es.js');
      await pdfPandora.init({ wasmPath: '/js/pdfium/' });
      
      console.log('PDF library initialized successfully');
      nuxtApp.provide('pdfInitialized', true);
    } catch (error) {
      console.error('Failed to initialize PDF library:', error);
      nuxtApp.provide('pdfInitialized', false);
    }
  });