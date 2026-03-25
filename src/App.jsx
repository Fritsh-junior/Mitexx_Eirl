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
export default function App() {
  const location = useLocation();

  // Scroll al inicio cada vez que cambia la ruta
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" si quieres animación suave
    });
  }, [location.pathname]); // Se ejecuta cada vez que cambia la página
  return (
    <main>
      <BrowserRouter>
        <div className="flex font-sans relative">
          <div className="w-full">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Productos" element={<ProductoList />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/Servicios" element={<Servicio />} />
              <Route path="/materiales/:id" element={<MaterialDetail />} />
              <Route path="/Servicios/:id" element={<ServisDetail />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
}
