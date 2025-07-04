import { createGlobalStyle } from 'styled-components';

export const palette = {
  white: '#ffffff',
  primary: '#47201C',
  lightBackground: '#F8F6F2',
  border: '#F0EDEA',
  secondary: '#846A67',
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`;
