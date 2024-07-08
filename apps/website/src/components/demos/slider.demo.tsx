import { Slider, type SliderProps } from '@tacos-ui/react';

export const Demo = (props: SliderProps) => {
  return (
    <Slider
      marks={[
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 75, label: '75' },
      ]}
      value={[33]}
      {...props}
    />
  );
};
