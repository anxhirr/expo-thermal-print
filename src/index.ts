// Reexport the native module. On web, it will be resolved to ExpoThermalPrintModule.web.ts
// and on native platforms to ExpoThermalPrintModule.ts
export { default } from './ExpoThermalPrintModule';
export { default as ExpoThermalPrintView } from './ExpoThermalPrintView';
export * from  './ExpoThermalPrint.types';
