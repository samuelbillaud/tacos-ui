import { Button, type ButtonProps } from '@tacos-ui/react';
import { ArrowRightIcon } from 'lucide-react';

export const Demo = (props: ButtonProps) => {
  return (
    <Button {...props}>
      Button
      <ArrowRightIcon />
    </Button>
  );
};
