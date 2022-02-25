import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetail } from './components/ItemDetail';
import { HomePage } from './pages/HomePage';
import { ZapatillasPage } from './pages/ZapatillasPage';
import { RemerasPage } from './pages/RemerasPage';
import { CamperasPage } from './pages/CamperasPage';
import { NotFoundPage } from './pages/NotFoundPage';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zapatillas" element={<ZapatillasPage />} />
          <Route path="/remeras" element={<RemerasPage />} />
          <Route path="/camperas" element={<CamperasPage />} />
          <Route path="/ItemDetail/:id" element={<ItemDetail />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
