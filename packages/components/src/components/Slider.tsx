import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type ReactNode, forwardRef } from 'react';

import { Slider as ArkSlider, type SliderRootProps } from '@ark-ui/react/slider';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type SliderRecipeVariantProps, sliderRecipe } from '@tacos-ui/styled-system/recipes';

export interface SliderProps
  extends Assign<JsxStyleProps, SliderRootProps>,
    SliderRecipeVariantProps {
  children?: ReactNode;
  marks?: {
    label?: ReactNode;
    value: number;
  }[];
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const [variantProps, sliderProps] = sliderRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(sliderProps);
  const { children, className, ...rootProps } = localProps;
  const styles = sliderRecipe(variantProps);

  return (
    <ArkSlider.Root className={cx(styles.root, css(cssProps), className)} ref={ref} {...rootProps}>
      <ArkSlider.Context>
        {(api) => (
          <>
            {children && <ArkSlider.Label className={styles.label}>{children}</ArkSlider.Label>}
            <ArkSlider.Control className={styles.control}>
              <ArkSlider.Track className={styles.track}>
                <ArkSlider.Range className={styles.range} />
              </ArkSlider.Track>
              {api.value.map((_, index) => (
                <ArkSlider.Thumb className={styles.thumb} index={index} key={index} />
              ))}
            </ArkSlider.Control>
            {props.marks && (
              <ArkSlider.MarkerGroup className={styles.markerGroup}>
                {props.marks.map((mark) => (
                  <ArkSlider.Marker className={styles.marker} key={mark.value} value={mark.value}>
                    {mark.label}
                  </ArkSlider.Marker>
                ))}
              </ArkSlider.MarkerGroup>
            )}
          </>
        )}
      </ArkSlider.Context>
    </ArkSlider.Root>
  );
});

Slider.displayName = 'Slider';
