import { registerWebModule, NativeModule } from 'expo';

import { ExpoThermalPrintModuleEvents } from './ExpoThermalPrint.types';

class ExpoThermalPrintModule extends NativeModule<ExpoThermalPrintModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoThermalPrintModule);
