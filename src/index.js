import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'theme-ui';
import Button from './Button'
import buttonTheme from './Button/theme';
let baseTheme

// combine button theme with main color theme
// const theme = { ...toTheme(moragaTheme), ...buttonTheme };
const theme = { ...baseTheme, ...buttonTheme };

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Button>Button Text</Button>
  </ThemeProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
