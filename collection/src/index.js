import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

import { LoadingPage } from './components/LoadingPage';
import { HomePage } from './components/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
 </>
);
