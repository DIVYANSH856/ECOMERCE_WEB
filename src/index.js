import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
  
</React.StrictMode>);


reportWebVitals();