import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';

const authService = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
