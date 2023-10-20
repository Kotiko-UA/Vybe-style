import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'Globalstyle';

const colors = {
  brandColor: '#C4F934',
  colorText: '#fff',
  blackColor: '#000',
  greyColorPopup: '#6a778b',
  greyColor: '#545454',
  lightGreyColor: '#80848d',
  greyFaqColor: '#737373',
  hiddenText: '#e2e2e2',
  borderColor: '#bbb',
  borderAlphaColor: 'rgba(255, 255, 255, 0.15)',
  normalСolor: 'rgba(255, 255, 255, 0.5)',
  errorColor: '#d80027',
  redColor: 'red',
  hoverBtnGradient: 'linear-gradient(234deg, #F4F90F 25.54%, #0FF9C0 73.38%)',
  animationTransform: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  animationStyles: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
