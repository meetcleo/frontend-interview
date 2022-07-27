import { createGlobalStyle } from 'styled-components';

export const palette = {
  black: '#000000',
  white: '#ffffff',
  blue: '#341cff',
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`;
