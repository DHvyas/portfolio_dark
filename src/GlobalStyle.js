import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    html {
  scroll-behavior: smooth;
}

  body {
    font-family: 'Inter', sans-serif;
    background-color: #000000;
    color: #ffffff;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;