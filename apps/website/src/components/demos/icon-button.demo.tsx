import { IconButton, type IconButtonProps } from '@tacos-ui/react';
import { ArrowRightIcon } from 'lucide-react';

export const Demo = (props: IconButtonProps) => {
  return (
    <IconButton {...props} aria-label="Next Page">
      <ArrowRightIcon />
    </IconButton>
  );
};
