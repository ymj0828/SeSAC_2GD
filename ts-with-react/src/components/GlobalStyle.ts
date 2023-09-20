import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Dovemayo_gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dovemayo_gothic';
  }

  a{

  }

  ul, ol {
    list-style: none;
  }
`;
export default GlobalStyle;
