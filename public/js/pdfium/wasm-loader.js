// This utility handles loading and initializing the PDFium WebAssembly module

let pdfiumModule = null;
let isInitializing = false;
let initPromise = null;

/**
 * Define all PDFium exported functions to be wrapped
 * @returns {Object} - Object with all PDFium function definitions
 */
function definePDFiumFunctions(Module) {
  return {
    // Core functions
    FPDF_InitLibrary: Module.cwrap("FPDF_InitLibrary", "void", []),
    FPDF_DestroyLibrary: Module.cwrap("FPDF_DestroyLibrary", "void", []),
    FPDF_LoadMemDocument: Module.cwrap("FPDF_LoadMemDocument", "number", ["number", "number", "number"]),
    FPDF_CloseDocument: Module.cwrap("FPDF_CloseDocument", "void", ["number"]),
    FPDF_GetLastError: Module.cwrap("FPDF_GetLastError", "number", []),
    FPDF_GetPageCount: Module.cwrap("FPDF_GetPageCount", "number", ["number"]),
    
    // Page functions
    FPDF_LoadPage: Module.cwrap("FPDF_LoadPage", "number", ["number", "number"]),
    FPDF_ClosePage: Module.cwrap("FPDF_ClosePage", "void", ["number"]),
    FPDF_GetPageWidthF: Module.cwrap("FPDF_GetPageWidthF", "number", ["number"]),
    FPDF_GetPageHeightF: Module.cwrap("FPDF_GetPageHeightF", "number", ["number"]),
    FPDFPage_GetMediaBox: Module.cwrap("FPDFPage_GetMediaBox", "number", ["number", "number", "number", "number", "number"]),
    FPDFPage_CountObjects: Module.cwrap("FPDFPage_CountObjects", "number", ["number"]),
    FPDFPage_GetObject: Module.cwrap("FPDFPage_GetObject", "number", ["number", "number"]),
    FPDFPage_InsertObject: Module.cwrap("FPDFPage_InsertObject", "void", ["number", "number"]),
    
    // Page object functions
    FPDFPageObj_GetType: Module.cwrap("FPDFPageObj_GetType", "number", ["number"]),
    FPDFPageObj_GetBounds: Module.cwrap("FPDFPageObj_GetBounds", "number", ["number", "number", "number", "number", "number"]),
    FPDFPageObj_GetMatrix: Module.cwrap("FPDFPageObj_GetMatrix", "number", ["number", "number"]),
    FPDFPageObj_SetMatrix: Module.cwrap("FPDFPageObj_SetMatrix", "number", ["number", "number"]),
    FPDFPageObj_Transform: Module.cwrap("FPDFPageObj_Transform", "number", ["number", "number", "number", "number", "number", "number", "number"]),
    FPDFPageObj_GetText: Module.cwrap("FPDFPageObj_GetText", "number", ["number", "number", "number"]),
    FPDFPageObj_Destroy: Module.cwrap("FPDFPageObj_Destroy", "void", ["number"]),
    FPDFPageObj_HasTransparency: Module.cwrap("FPDFPageObj_HasTransparency", "number", ["number"]),
    FPDFPageObj_GetRotation: Module.cwrap("FPDFPageObj_GetRotation", "number", ["number", "number"]),
    FPDFPageObj_SetRotation: Module.cwrap("FPDFPageObj_SetRotation", "number", ["number", "number"]),
    FPDFPageObj_GetMark: Module.cwrap("FPDFPageObj_GetMark", "number", ["number", "number"]),
    FPDFPageObj_GetMarkedContentID: Module.cwrap("FPDFPageObj_GetMarkedContentID", "number", ["number"]),
    FPDFPageObj_GetStrokeWidth: Module.cwrap("FPDFPageObj_GetStrokeWidth", "number", ["number", "number"]),
    FPDFPageObj_SetLineWidth: Module.cwrap("FPDFPageObj_SetLineWidth", "number", ["number", "number"]),
    FPDFPageObj_GetStrokeColor: Module.cwrap("FPDFPageObj_GetStrokeColor", "number", ["number", "number", "number", "number", "number"]),
    FPDFPageObj_GetFillColor: Module.cwrap("FPDFPageObj_GetFillColor", "number", ["number", "number", "number", "number", "number"]),
    FPDFPageObj_SetStrokeColor: Module.cwrap("FPDFPageObj_SetStrokeColor", "number", ["number", "number", "number", "number", "number"]),
    FPDFPageObj_SetFillColor: Module.cwrap("FPDFPageObj_SetFillColor", "number", ["number", "number", "number", "number", "number"]),
    FPDFPageObj_GetLineJoin: Module.cwrap("FPDFPageObj_GetLineJoin", "number", ["number"]),
    FPDFPageObj_SetLineJoin: Module.cwrap("FPDFPageObj_SetLineJoin", "number", ["number", "number"]),
    FPDFPageObj_GetLineCap: Module.cwrap("FPDFPageObj_GetLineCap", "number", ["number"]),
    FPDFPageObj_SetLineCap: Module.cwrap("FPDFPageObj_SetLineCap", "number", ["number", "number"]),
    FPDFPageObj_CreateNewPath: Module.cwrap("FPDFPageObj_CreateNewPath", "number", ["number", "number"]),
    FPDFPageObj_NewImageObj: Module.cwrap("FPDFPageObj_NewImageObj", "number", ["number"]),
    
    // Text functions
    FPDFText_LoadPage: Module.cwrap("FPDFText_LoadPage", "number", ["number"]),
    FPDFText_ClosePage: Module.cwrap("FPDFText_ClosePage", "void", ["number"]),
    FPDFText_CountChars: Module.cwrap("FPDFText_CountChars", "number", ["number"]),
    FPDFText_GetText: Module.cwrap("FPDFText_GetText", "number", ["number", "number", "number", "number"]),
    FPDFText_GetBoundedText: Module.cwrap("FPDFText_GetBoundedText", "number", ["number", "number", "number", "number", "number", "number", "number"]),
    FPDFText_GetFontSize: Module.cwrap("FPDFText_GetFontSize", "number", ["number", "number"]),
    FPDFText_GetTextObject: Module.cwrap("FPDFText_GetTextObject", "number", ["number", "number"]),
    FPDFText_GetFillColor: Module.cwrap("FPDFText_GetFillColor", "number", ["number", "number", "number", "number", "number", "number"]),
    FPDFText_GetStrokeColor: Module.cwrap("FPDFText_GetStrokeColor", "number", ["number", "number", "number", "number", "number", "number"]),
    FPDFText_GetCharAngle: Module.cwrap("FPDFText_GetCharAngle", "number", ["number", "number"]),
    FPDFText_GetCharBox: Module.cwrap("FPDFText_GetCharBox", "number", ["number", "number", "number", "number", "number", "number"]),
    FPDFText_GetLooseCharBox: Module.cwrap("FPDFText_GetLooseCharBox", "number", ["number", "number", "number", "number", "number", "number"]),
    FPDFText_GetMatrix: Module.cwrap("FPDFText_GetMatrix", "number", ["number", "number", "number"]),
    FPDFText_GetFontInfo: Module.cwrap("FPDFText_GetFontInfo", "number", ["number", "number", "number", "number"]),
    
    // Text object functions
    FPDFTextObj_GetTextRenderMode: Module.cwrap("FPDFTextObj_GetTextRenderMode", "number", ["number"]),
    FPDFTextObj_GetText: Module.cwrap("FPDFTextObj_GetText", "number", ["number", "number", "number"]),
    FPDFTextObj_GetFont: Module.cwrap("FPDFTextObj_GetFont", "number", ["number"]),
    FPDFTextObj_GetFontSize: Module.cwrap("FPDFTextObj_GetFontSize", "number", ["number"]),
    
    // Font functions
    FPDFFont_GetFontData: Module.cwrap("FPDFFont_GetFontData", "number", ["number", "number", "number", "number"]),
    FPDFFont_GetBaseFontName: Module.cwrap("FPDFFont_GetBaseFontName", "number", ["number", "number", "number"]),
    FPDFFont_GetFlags: Module.cwrap("FPDFFont_GetFlags", "number", ["number"]),
    FPDFFont_GetWeight: Module.cwrap("FPDFFont_GetWeight", "number", ["number"]),
    FPDFFont_GetFamilyName: Module.cwrap("FPDFFont_GetFamilyName", "number", ["number", "number", "number"]),
    FPDFFont_GetGlyphWidth: Module.cwrap("FPDFFont_GetGlyphWidth", "number", ["number", "number", "number", "number"]),
    
    // Path functions
    FPDFPath_CountSegments: Module.cwrap("FPDFPath_CountSegments", "number", ["number"]),
    FPDFPath_GetPathSegment: Module.cwrap("FPDFPath_GetPathSegment", "number", ["number", "number"]),
    FPDFPath_GetDrawMode: Module.cwrap("FPDFPath_GetDrawMode", "void", ["number", "number", "number"]),
    FPDFPathSegment_GetType: Module.cwrap("FPDFPathSegment_GetType", "number", ["number"]),
    FPDFPathSegment_GetPoint: Module.cwrap("FPDFPathSegment_GetPoint", "void", ["number", "number", "number"]),
    
    // Image functions
    FPDFImageObj_GetImagePixelSize: Module.cwrap("FPDFImageObj_GetImagePixelSize", "number", ["number", "number", "number"]),
    FPDFImageObj_GetImageDataDecoded: Module.cwrap("FPDFImageObj_GetImageDataDecoded", "number", ["number", "number", "number"]),
    FPDFImageObj_GetImageDataRaw: Module.cwrap("FPDFImageObj_GetImageDataRaw", "number", ["number", "number", "number"]),
    FPDFImageObj_GetImageMetadata: Module.cwrap("FPDFImageObj_GetImageMetadata", "number", ["number", "number", "number"]),
    FPDFImageObj_GetImageFilterCount: Module.cwrap("FPDFImageObj_GetImageFilterCount", "number", ["number"]),
    FPDFImageObj_GetImageFilter: Module.cwrap("FPDFImageObj_GetImageFilter", "number", ["number", "number", "number", "number"]),
    FPDFImageObj_GetRenderedBitmap: Module.cwrap("FPDFImageObj_GetRenderedBitmap", "number", ["number"])
  };
}

/**
 * Initialize the PDFium WebAssembly module
 * @param {string} wasmPath - Path to the directory containing PDFium WASM files
 * @returns {Promise<any>} - The initialized PDFium module
 */
export async function initPDFiumWasm(wasmPath = '/pdfium/') {
  if (pdfiumModule) {
    return pdfiumModule;
  }

  if (isInitializing) {
    return initPromise;
  }

  isInitializing = true;
  
  // Create a promise that will resolve when the module is loaded
  initPromise = new Promise(async (resolve, reject) => {
    try {
      // Check if the path ends with a slash
      if (!wasmPath.endsWith('/')) {
        wasmPath += '/';
      }

      // Define Module configuration first
      window.Module = {
        print: console.log,
        printErr: console.error,
        locateFile: (path) => `${wasmPath}${path}`,
        onRuntimeInitialized: () => {
          console.log('PDFium WASM runtime initialized');
          
          // Initialize the library
          window.Module.ccall("FPDF_InitLibrary", "void", [], []);
          
          // Create the PDFium wrapper with all functions
          pdfiumModule = {
            Module: window.Module,
            ...definePDFiumFunctions(window.Module)
          };
          
          // Add memory utilities
          pdfiumModule._malloc = window.Module._malloc;
          pdfiumModule._free = window.Module._free;
          pdfiumModule.HEAPU8 = window.Module.HEAPU8;
          pdfiumModule.HEAP8 = window.Module.HEAP8;
          pdfiumModule.HEAP16 = window.Module.HEAP16;
          pdfiumModule.HEAP32 = window.Module.HEAP32;
          pdfiumModule.HEAPU16 = window.Module.HEAPU16;
          pdfiumModule.HEAPU32 = window.Module.HEAPU32;
          pdfiumModule.HEAPF32 = window.Module.HEAPF32;
          pdfiumModule.HEAPF64 = window.Module.HEAPF64;
          
          // Add utility methods
          pdfiumModule.ccall = window.Module.ccall;
          pdfiumModule.cwrap = window.Module.cwrap;
          //pdfiumModule.UTF8ToString = window.Module.UTF8ToString;
          pdfiumModule.stringToUTF8 = window.Module.stringToUTF8;
          pdfiumModule.writeArrayToMemory = window.Module.writeArrayToMemory;
          pdfiumModule.getValue = window.Module.getValue;
          pdfiumModule.setValue = window.Module.setValue;
          
          resolve(pdfiumModule);
        }
      };
      
      // Define exported methods
      window.EXPORTED_RUNTIME_METHODS = [
        "ccall", "cwrap", "UTF8ToString", "stringToUTF8", 
        "writeArrayToMemory", "_malloc", "_free", 
        "getValue", "setValue", 
        "HEAPU8", "HEAP8", "HEAP16", "HEAP32", 
        "HEAPU16", "HEAPU32", "HEAPF32", "HEAPF64"
      ];

      // Dynamically import the ESM version of PDFium
      try {
        const PDFiumModule = await import(/* @vite-ignore */ `${wasmPath}pdfium.esm.js`);
        
        // PDFium ESM module returns a factory function that will initialize the WASM
        const PDFiumFactory = PDFiumModule.default || PDFiumModule;
        
        // Initialize PDFium with our configuration
        PDFiumFactory(window.Module)
          .then(() => {
            // onRuntimeInitialized will be called automatically through the Module config
            console.log("PDFium ESM module initialized");
          })
          .catch(error => {
            reject(new Error(`Failed to initialize PDFium ESM module: ${error}`));
          });
      } catch (error) {
        reject(new Error(`Failed to import PDFium ESM module: ${error}`));
      }
      
    } catch (error) {
      console.error('Failed to initialize PDFium WASM:', error);
      isInitializing = false;
      reject(error);
    }
  });

  return initPromise;
}

/**
 * Get the initialized PDFium module
 * @returns {any} The PDFium module or null if not initialized
 */
export function getPDFiumModule() {
  return pdfiumModule;
}

/**
 * Check if the PDFium module is initialized
 * @returns {boolean} True if initialized, false otherwise
 */
export function isPDFiumInitialized() {
  return !!pdfiumModule;
}