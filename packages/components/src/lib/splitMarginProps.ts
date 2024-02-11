import type {
  JsxStyleProps,
} from 'styled-system/types'


type Dict = Record<string, unknown>
type PredicateFn = (key: string) => boolean
type Key = PredicateFn | string[]

export function splitProps<T extends Dict>(props: T, ...keys: Key[]) {
  const descriptors = Object.getOwnPropertyDescriptors(props)

  const dKeys = Object.keys(descriptors)
  const split = (k: string[]) => {
    const clone = {} as Dict
    for (let i = 0; i < k.length; i++) {
      const key = k[i]
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key])
        delete descriptors[key]
      }
    }
    return clone
  }
  const fn = (key: Key) => split(Array.isArray(key) ? key : dKeys.filter(key))
  return keys.map(fn).concat(split(dKeys))
}

const allCssMarginProperties = [
  'margin',
  'marginBlock',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginInline',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'ml',
  'mr',
  'mt',
  'mb',
  'm',
  'my',
  'marginY',
  'mx',
  'marginX',
  'me',
  'marginEnd',
  'ms',
  'marginStart',
]

const properties = new Map(allCssMarginProperties.map((prop) => [prop, true]));

const isMarginProperty = (prop: string) => {
  return properties.has(prop);
}

export type MarginProps = {
  margin?: JsxStyleProps['margin'];
  marginBlock?: JsxStyleProps['marginBlock'];
  marginBlockEnd?: JsxStyleProps['marginBlockEnd'];
  marginBlockStart?: JsxStyleProps['marginBlockStart'];
  marginBottom?: JsxStyleProps['marginBottom'];
  marginInline?: JsxStyleProps['marginInline'];
  marginInlineEnd?: JsxStyleProps['marginInlineEnd'];
  marginInlineStart?: JsxStyleProps['marginInlineStart'];
  marginLeft?: JsxStyleProps['marginLeft'];
  marginRight?: JsxStyleProps['marginRight'];
  marginTop?: JsxStyleProps['marginTop'];
  ml?: JsxStyleProps['ml'];
  mr?: JsxStyleProps['mr'];
  mt?: JsxStyleProps['mt'];
  mb?: JsxStyleProps['mb'];
  m?: JsxStyleProps['m'];
  my?: JsxStyleProps['my'];
  marginY?: JsxStyleProps['marginY'];
  mx?: JsxStyleProps['mx'];
  marginX?: JsxStyleProps['marginX'];
  me?: JsxStyleProps['me'];
  marginEnd?: JsxStyleProps['marginEnd'];
  ms?: JsxStyleProps['ms'];
  marginStart?: JsxStyleProps['marginStart'];
}

export const splitMarginsProps = (props: Dict): MarginProps[] =>  splitProps(props, isMarginProperty)