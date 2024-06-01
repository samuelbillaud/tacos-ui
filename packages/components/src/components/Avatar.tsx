import { forwardRef } from 'react';

import { Avatar as ArkAvatar, type AvatarRootProps } from '@ark-ui/react/avatar';
import { UserIcon } from 'lucide-react';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type AvatarRecipeVariantProps, avatarRecipe } from '@tacos-ui/styled-system/recipes';

export interface AvatarProps extends AvatarRootProps, AvatarRecipeVariantProps {
  name?: string;
  src?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const [variantProps, avatarProps] = avatarRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(avatarProps);

  const { name, src, className, ...rootProps } = localProps;
  const styles = avatarRecipe(variantProps);

  return (
    <ArkAvatar.Root className={cx(styles.root, css(cssProps), className)} ref={ref} {...rootProps}>
      <ArkAvatar.Fallback className={styles.fallback}>
        {getInitials(name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image alt={name} className={styles.image} src={src} />
    </ArkAvatar.Root>
  );
});

Avatar.displayName = 'Avatar';

const getInitials = (name: string = ''): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .splice(0, 2)
    .join('')
    .toUpperCase();
