import { Avatar, type AvatarProps } from '@tacos-ui/react';

export const Demo = (props: AvatarProps) => {
  return <Avatar name="John Doe" src="https://i.pravatar.cc/300" {...props} />;
};
