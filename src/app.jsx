import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository, imageUploader }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} exact element={<Login authService={authService} />} />
        <Route path={'/home'} element={<Login authService={authService} />} />
        <Route
          path={'/maker'}
          element={
            <Maker
              authService={authService}
              FileInput={FileInput}
              cardRepository={cardRepository}
              imageUploader={imageUploader}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
