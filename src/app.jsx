import './app.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository }) {
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
