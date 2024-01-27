export const conditions = {
  extend: {
    hidden: '&:is([hidden])',
    current: '&:is([data-current])',
    today: '&:is([data-today])',
    collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    underValue: '&:is([data-state="under-value"])',
  },
}