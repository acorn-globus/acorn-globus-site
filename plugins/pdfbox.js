// plugins/pdf-box.client.js
export default defineNuxtPlugin(async () => {
  console.log("1. Plugin starting")
  
  // Wait for module to load
  const module = await import('~/static/js/pdf-box.js')
  console.log("2. Module loaded")
  
  // Wait for definition
  await customElements.whenDefined('pdf-box')
  console.log("3. Custom element defined")
})