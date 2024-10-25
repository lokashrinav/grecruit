// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Arial', sans-serif;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
    color: #333;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyles;
