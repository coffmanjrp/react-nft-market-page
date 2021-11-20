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

  .Before {
    position: relative;
    padding-left: 3rem;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 35px;
      height: 2px;
      background-color: #305ff6;
    }
  }
  
  .GradientText {
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GlobalStyle;
