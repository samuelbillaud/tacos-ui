import { useState } from 'react';

import { Button, Switch } from '@tacos-ui/react';

import { css } from '../styled-system/css';
import { Flex } from '../styled-system/jsx';

function App() {
  const [checked, setChecked] = useState(false);

  const onCheckChange = () => {
    setChecked((previousValue) => !previousValue);
  };

  return (
    <Flex alignItems="center" direction="column" justifyContent="center">
      <div
        className={css({
          fontSize: { base: '2xl', lg: '4xl' },
          fontWeight: { base: 'bold', md: 'normal' },
          margin: { base: '16', md: '32' },
          padding: { base: '4', md: '8' },
          backgroundColor: {
            base: { base: 'amber.a2', md: 'red.a4' },
            _dark: { base: 'green.a2', md: 'blue.a4' },
            _hover: 'yellow.5',
          },
          color: { base: 'amber.12', _hover: { base: 'red.12', _active: 'blue.12' } },
          borderRadius: { base: 'md', md: 'lg' },
          shadow: { base: 'md', md: 'xl' },
        })}
      >
        Hello 🐼!
      </div>

      <Button size={{ base: 'sm', md: 'lg' }} variant={{ base: 'soft', md: 'solid' }}>
        Add
      </Button>

      <Button my={4} variant="outline">
        Add medium
      </Button>

      <Button my={4} variant="ghost">
        Add ghost
      </Button>

      <Switch checked={checked} onCheckedChange={onCheckChange} size="md">
        {checked ? 'On' : 'Off'}
      </Switch>
    </Flex>
  );
}

export default App;
