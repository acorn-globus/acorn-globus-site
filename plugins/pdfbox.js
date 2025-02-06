// plugins/pdf-box.client.js
export default defineNuxtPlugin(async () => {
  console.log("1. Plugin starting")
  
  try {
    // First load the worker script
    const workerScript = document.createElement('script')
    workerScript.src = '/js/pdf.worker.mjs'
    workerScript.type = 'module'
    document.head.appendChild(workerScript)

    // Set the global worker path
    window.pdfjsWorkerSrc = '/js/pdf.worker.mjs'
    
    await new Promise(resolve => {
      workerScript.onload = resolve
    })
    console.log("2. Worker loaded")

    // Now load the web component
    const module = await import('~/static/js/pdf-box.js')
    console.log("3. Module loaded")
  
    await customElements.whenDefined('pdf-box')
    console.log("4. Custom element defined")
  } catch (error) {
    console.error("Error initializing PDF Box:", error)
  }
})