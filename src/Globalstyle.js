import { createGlobalStyle } from 'styled-components';
import './font.css';

export const GlobalStyles = createGlobalStyle`

* {
  font-family: 'Inter';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  color: ${props => props.theme.colorText};
  scroll-behavior: smooth;
}
html {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.greyFaqColor} ${props =>
  props.theme.brandColor} ;
}
body {
  background: #000;

 }

body .is-hidden {
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

::-webkit-scrollbar {
  width: 8px;
 
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  background: ${props => props.theme.brandColor};
}

::-webkit-scrollbar-thumb {
  height: 20px;
  background:  ${props => props.theme.greyFaqColor};
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;
