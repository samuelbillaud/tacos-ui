import { Icon, type IconProps } from '@tacos-ui/react';
import { DiamondIcon } from 'lucide-react';

export const Demo = (props: IconProps) => {
  return (
    <Icon {...props}>
      <DiamondIcon />
    </Icon>
  );
};
