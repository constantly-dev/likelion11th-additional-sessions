import GlobalStyle from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Styles/Theme';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Menu from './Components/Menu';
import Home from './Pages/Home/Home';
import ChatList from './Pages/Chat/ChatList';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AllContainer>
        <Menu />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chat/*" element={<ChatList />}></Route>
          </Routes>
        </AnimatePresence>
      </AllContainer>
    </ThemeProvider>
  );
}
const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export default App;
