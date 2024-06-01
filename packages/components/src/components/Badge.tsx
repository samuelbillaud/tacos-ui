import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type BadgeRecipeVariantProps, badgeRecipe } from '@tacos-ui/styled-system/recipes';

type BaseBadgeProps = HTMLArkProps<'div'>;

export interface BadgeProps extends BaseBadgeProps, BadgeRecipeVariantProps {}

export const Badge = styled(ark.div, badgeRecipe);

Badge.displayName = 'Badge';
