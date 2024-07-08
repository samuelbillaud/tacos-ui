import { Accordion } from '@tacos-ui/react';
import { ChevronDownIcon } from 'lucide-react';

export const Demo = (props: Accordion.RootProps) => {
  const items = ['React', 'Solid', 'Svelte', 'Vue'];

  return (
    <Accordion.Root defaultValue={['React']} multiple {...props}>
      {items.map((item, id) => (
        <Accordion.Item disabled={item === 'Svelte'} key={id} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
            cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
