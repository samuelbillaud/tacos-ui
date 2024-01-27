import { css } from '../styled-system/css';

function App() {
  return (
    <div
      className={css({
        fontSize: { base: "2xl", lg: "4xl" },
        fontWeight: { base: 'bold', md: 'normal' },
        margin: { base: "8", md: "16" },
      })}
    >
      Hello 🐼!
      </div>
  )
}

export default App;