/* eslint-disable react/jsx-filename-extension, no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './App.scss';

render(<App />, document.getElementById('root'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
