import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image-file-input/imageFileInput';
import CardRepository from './service/card_repository';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader(
  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  process.env.REACT_APP_CLOUDINARY_PRESET_NAME,
);
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
      imageUploader={imageUploader}
    />
  </React.StrictMode>,
);
