import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
  }

  :root {
    --primary-color: #03091f;
  }

  body {
    background-color: var(--primary-color);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
  }

  a {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
  }

  p  {
    line-height: 2rem;
  }

`;

export default GlobalStyle;
