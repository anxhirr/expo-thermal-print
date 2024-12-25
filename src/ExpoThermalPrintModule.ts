import { NativeModule, requireNativeModule } from 'expo';

import { ExpoThermalPrintModuleEvents } from './ExpoThermalPrint.types';

declare class ExpoThermalPrintModule extends NativeModule<ExpoThermalPrintModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoThermalPrintModule>('ExpoThermalPrint');
