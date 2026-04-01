import { Link } from "react-router"; // ← Corregido
import { useState, useEffect, useRef } from "react";
import { serviciosDB } from "../DB/database";
import {
  FaHardHat,
  FaDraftingCompass,
  FaBuilding,
  FaTools,
  FaCheckCircle,
  FaUsers,
  FaMountain,
  FaPhoneAlt,
} from "react-icons/fa";

import modern from "../images/modern.png";
import construccion from "../images/construccion.jpg";

const images = [
  {
    src: modern,
    alt: "Casa moderna",
    title: "CASA MODERNA",
    description: "Diseños contemporáneos y funcionales",
  },
  {
    src: construccion,
    alt: "En construcción",
    title: "PROYECTOS EN EJECUCIÓN",
    description: "Construyendo el futuro con calidad",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  // Funciones de slide (declaradas ANTES del useEffect)
  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide(); // Ahora sí está definido
    }, 4000);

    // Limpieza
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // ← Dependencia vacía (mejor práctica para autoplay)

  // Swipe táctil
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="relative w-full mx-auto">
        <Link to="/Servicios" className="block">
          <div
            className="relative w-full h-100 sm:h-125 md:h-150 overflow-hidden shadow-2xl group cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="relative w-full h-full shrink-0">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover brightness-[0.88]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">
                      {img.title}
                    </h2>
                    <p className="text-lg opacity-90">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
              aria-label="Anterior"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
              aria-label="Siguiente"
            >
              ❯
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>

      <section id="proyectos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-4 text-gray-900 tracking-tight">
            PROYECTOS <span className="text-amber-600">EMBLEMÁTICOS</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Obras que definen ciudades, conectan comunidades y perduran en el
            tiempo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosDB.map((project, idx) => {
              if (idx >= 3) return null;
              return (
                <Link
                  key={idx.id}
                  to={`/Servicios/${project.id}`}
                  className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:-translate-y-4"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-96 object-cover  transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2 ">{project.name}</h3>
                    <p className="text-sm opacity-90">{project.subcategory}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 ">
          <img
            src="https://rsbuilder.in/wp-content/uploads/2024/03/Building-Material.webp"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight mb-6">
            <span className="text-amber-500">CONSTRUCCIÓN</span> QUE <br />
            <span className="text-amber-400">TRANSFORMA</span> REALIDADES
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 font-light mb-10 max-w-3xl mx-auto">
            Desde cimientos sólidos hasta skylines imponentes. Ingeniería
            precisa, ejecución impecable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#contacto"
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-5 px-10 rounded-lg shadow-2xl transform hover:-translate-y-2 transition-all duration-300 uppercase tracking-widest text-lg"
            >
              Solicita Cotización Gratuita
            </a>
            <a
              href="/productos"
              className="border-2 border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-white font-bold py-5 px-10 rounded-lg transition-all duration-300 uppercase tracking-widest text-lg"
            >
              Explora Nuestros Productos
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
      <section className="py-20 bg-linear-to-br from-slate-50 to-slate-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tight">
            CONSTRUIDO <span className="text-amber-500">CON VALORES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: FaHardHat,
                title: "Seguridad Primero",
                desc: "Cero accidentes graves en los últimos 8 años. Certificación ISO 45001.",
              },
              {
                icon: FaMountain,
                title: "Innovación Sostenible",
                desc: "Materiales eco-amigables y diseños LEED / EDGE en +70% de proyectos.",
              },
              {
                icon: FaUsers,
                title: "Equipo de Excelencia",
                desc: "Más de 450 profesionales certificados. 25+ años promedio de experiencia.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="text-center group shadow-2xl rounded-3xl"
              >
                <value.icon className="h-16 w-16 mx-auto mb-6 text-amber-500 group-hover:text-amber-400 transition-colors" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
