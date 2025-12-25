import * as React from "react";
import { Slider, ProgressIndicator, Text } from "@fluentui/react";
import { StatusLabels } from "./StatusSlider.types";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const StatusSlider: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div style={{ padding: 12 }}>
      <Text variant="large" styles={{ root: { fontWeight: 600 } }}>
        {StatusLabels[value]}
      </Text>

      <Slider
        min={0}
        max={3}
        step={1}
        snapToStep
        value={value}
        showValue={false}
        onChange={onChange}
      />

      <ProgressIndicator
        percentComplete={value / 3}
        styles={{ root: { marginTop: 8 } }}
      />
    </div>
  );
};
