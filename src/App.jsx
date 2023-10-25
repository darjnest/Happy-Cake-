import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

function App() {
  // Url de base para que en Github al hacer el deploy en gh-pages no se cambie la ruta
  const URL_GHPAGES = '/desafio1-happycake/';

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={URL_GHPAGES} element={<Home />} />
          <Route path={`${URL_GHPAGES}contacto`} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
