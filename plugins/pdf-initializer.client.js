export default defineNuxtPlugin(async (nuxtApp) => {
    try {
      // Import your library
      const { init } = await import('pdf-pandora');
      
      // Initialize with the path to PDFium files
      await init({ wasmPath: '/js/pdfium/' });
      
      console.log('PDF library initialized successfully');
      nuxtApp.provide('pdfInitialized', true);
    } catch (error) {
      console.error('Failed to initialize PDF library:', error);
      nuxtApp.provide('pdfInitialized', false);
    }
  });