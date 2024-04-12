import { css } from '@tacos-ui/styled-system/css';

function App() {
  return (
    <div
      className={css({
        fontSize: { base: '2xl', lg: '4xl' },
        fontWeight: { base: 'bold', md: 'normal' },
        margin: { base: '16', md: '32' },
        padding: { base: '4', md: '8' },
        backgroundColor: {
          base: { base: 'amber.a2', md: 'red.a4' },
          _dark: { base: 'green.a2', md: 'blue.a4' },
        },
        color: { base: 'amber.12', _hover: { base: 'red.12', _active: 'blue.12' } },
        borderRadius: { base: 'md', md: 'lg' },
        shadow: { base: 'md', md: 'xl' },
      })}
    >
      Hello 🐼!
    </div>
  );
}

export default App;
