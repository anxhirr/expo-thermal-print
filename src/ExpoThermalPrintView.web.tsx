import * as React from 'react';

import { ExpoThermalPrintViewProps } from './ExpoThermalPrint.types';

export default function ExpoThermalPrintView(props: ExpoThermalPrintViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
