import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";

import Nav from "./assets/componentes/navbar";
import Contact from "./assets/pages/Contactos";
import Home from "./assets/pages/Home";
import MaterialDetail from "./assets/componentes/Details";
import ProductoList from "./assets/pages/Productos";
import ServisDetail from "./assets/componentes/DetailsServis";
import Footer from "./assets/componentes/footer";
import Servicio from "./assets/pages/Servicio";
import About from "./assets/pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" si quieres animación suave
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex font-sans relative min-h-screen flex-col">
        <Nav />
        <ScrollToTop /> {/* ← Este componente hace la magia */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<ProductoList />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Servicios" element={<Servicio />} />
            <Route path="/materiales/:id" element={<MaterialDetail />} />
            <Route path="/Servicios/:id" element={<ServisDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
