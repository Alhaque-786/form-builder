// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FormProvider } from './context/FormContext'; // Adjust the import path as needed

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
