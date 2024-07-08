import { Switch, type SwitchProps } from '@tacos-ui/react';

export const Demo = (props: SwitchProps) => {
  return (
    <Switch defaultChecked {...props}>
      Label
    </Switch>
  );
};
