import { Link } from "react-router";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div id="contacto" className="py-10 bg-slate-800 text-white">
        <div className=" mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            ¿LISTO PARA TU <span className="text-amber-600">PROXIMO</span>{" "}
            PROYECTO?
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Contacta con nuestro equipo de expertos para discutir cómo podemos
            ayudarte a materializar tu visión constructiva
          </p>
          <a
            href="tel:+51928942418"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 px-12 rounded-xl text-xl shadow-lg hover:shadow-amber-500/50 transition"
          >
            Contáctanos hoy mismo →
          </a>
          <p className="mt-8 text-lg opacity-80">
            O envíanos un mensaje directo desde WhatsApp
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-6">
            <span className="text-9xl md:text-9xl font-bold text-shadow-amber-50">
              M&X
            </span>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://wa.me/+51928942418"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Enlaces rápidos</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-amber-500 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/proyectos" className="hover:text-amber-500 transition">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-amber-500 transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-amber-500 transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-amber-500 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Servicios clave */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">
            Nuestros Servicios
          </h3>
          <ul className="space-y-3">
            <li>Diseño y planos arquitectónicos</li>
            <li>Construcción de casas</li>
            <li>Remasterización de planos en 3D</li>
            <li>Remodelaciones y ampliaciones</li>
            <li>Asesoría y presupuestos sin costo</li>
          </ul>
        </div>

        {/* Columna 4: Contacto + CTA */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Contáctanos</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3" size={20} />
              <p>
                Lima, Perú
                <br />
                Av. Principal 123, Distrito
              </p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-amber-500 mr-3" size={20} />
              <a
                href="tel:+51999999999"
                className="hover:text-amber-500 transition"
              >
                +51 928 942 418
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-amber-500 mr-3" size={20} />
              <a
                href="mailto:mitexxeirl@gmail.com"
                className="hover:text-amber-500 transition"
              >
                mitexxeirl@gmail.com
              </a>
            </div>
          </div>

          <Link
            to="/contacto"
            className="mt-8 inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-amber-500/30"
          >
            Solicita tu presupuesto gratis
          </Link>
        </div>
      </div>

      {/* Línea divisoria + Copyright */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center md:flex md:justify-between md:items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} M&X Construcciones. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link
              to="/politica-privacidad"
              className="hover:text-amber-500 transition"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terminos-condiciones"
              className="hover:text-amber-500 transition"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
