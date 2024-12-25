import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoThermalPrintViewProps } from './ExpoThermalPrint.types';

const NativeView: React.ComponentType<ExpoThermalPrintViewProps> =
  requireNativeView('ExpoThermalPrint');

export default function ExpoThermalPrintView(props: ExpoThermalPrintViewProps) {
  return <NativeView {...props} />;
}
