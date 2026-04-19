import { Link } from "react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { serviciosDB } from "../DB/dbserv";
import {
  FaHardHat,
  FaUsers,
  FaMountain,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === serviciosDB.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? serviciosDB.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, currentIndex]);

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
      {/*  <div className="bg-amber-600 text-white p-8 rounded-3xl shadow-xl flex  justify-center border-4 border-amber-500 ">
        <span className="bg-white text-amber-600 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
          OFERTA LIMITADA
        </span>
        <h3 className="text-3xl font-black mb-2 text-white">
          Bono de Equipamiento
        </h3>
        <p className="mb-6 opacity-90">
          Compra tu departamento este mes y te regalamos la cocina integral
          equipada.
        </p>
        <button className="bg-white text-amber-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Reclamar Bono
        </button>
      </div>*/}
      <header className="relative w-full mx-auto">
        <div
          className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden shadow-2xl group cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Contenedor de Slides */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {serviciosDB.map((slide, index) => (
              <div
                key={slide.id || index}
                className="relative w-full h-full shrink-0"
              >
                <img
                  src={slide.portada}
                  alt={slide.name}
                  className="w-full h-full object-cover object-center brightness-[0.75]"
                />
                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-20 bg-linear-to-t from-black/80 via-black/20 to-transparent text-white">
                  <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
                      {slide.name}
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 line-clamp-2 max-w-2xl mb-6">
                      {slide.details}
                    </p>
                    <Link
                      to="/Servicios"
                      className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-bold transition-colors uppercase text-sm tracking-widest"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de Navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all z-10 hidden md:block"
            aria-label="Anterior"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all z-10 hidden md:block"
            aria-label="Siguiente"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Indicadores (Dots) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {serviciosDB.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 bg-amber-500"
                    : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* --- SECCIÓN 2: PROYECTOS DESTACADOS --- */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 tracking-tight mb-4">
              OBRAS <span className="text-amber-600">DESTACADAS</span>
            </h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales en infraestructura civil, comercial e
              industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviciosDB.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                to={`/Servicios/${project.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {project.subcategory && (
                    <span className="absolute top-4 right-4 px-4 py-1 bg-amber-600 text-white text-xs font-bold rounded-full uppercase">
                      {project.subcategory}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="h-1 w-0 bg-amber-600 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: CALL TO ACTION (CTA) --- */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://rsbuilder.in/wp-content/uploads/2024/03/Building-Material.webp"
            alt="Fondo de construcción"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            <span className="text-amber-500">INGENIERÍA</span> QUE <br />
            TRANSFORMA EL <span className="text-amber-400">FUTURO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-12">
            Desde la planificación técnica hasta la entrega llave en mano.
            Calidad certificada y ejecución en tiempo récord.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#contacto"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 px-10 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 uppercase tracking-wider"
            >
              Solicitar Presupuesto
            </a>
            <Link
              to="/productos"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-5 px-10 rounded-xl transition-all uppercase tracking-wider"
            >
              Catálogo de Suministros
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: VALORES CORPORATIVOS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-20 text-gray-900 uppercase tracking-widest">
            Nuestro <span className="text-amber-600">Compromiso</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: FaHardHat,
                title: "Seguridad Integral",
                desc: "Protocolos rigurosos de seguridad industrial y salud ocupacional bajo normas internacionales.",
              },
              {
                icon: FaMountain,
                title: "Impacto Sostenible",
                desc: "Implementamos procesos de construcción verde para reducir la huella de carbono en cada obra.",
              },
              {
                icon: FaUsers,
                title: "Gestión Transparente",
                desc: "Comunicación constante y reportes de avance detallados para garantizar su tranquilidad.",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 bg-white shadow-xl rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-amber-600 transition-colors duration-500">
                  <value.icon className="h-12 w-12 text-amber-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
