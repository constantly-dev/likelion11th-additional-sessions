import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// import './GlobalFont.css';
const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 10px;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #E0E0E0;
        
    };
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea {
      border: none;
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;
export default GlobalStyle;
