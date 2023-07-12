import GlobalStyle from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Styles/Theme';
// import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
