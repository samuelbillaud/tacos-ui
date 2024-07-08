import { Checkbox, type CheckboxProps } from '@tacos-ui/react';

export const Demo = (props: CheckboxProps) => {
  return (
    <Checkbox defaultChecked {...props}>
      Label
    </Checkbox>
  );
};
