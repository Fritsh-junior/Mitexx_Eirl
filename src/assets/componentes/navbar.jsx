import { useState } from "react";
import {
  FaDraftingCompass,
  FaBuilding,
  FaHome,
  FaPhoneAlt,
  FaTools,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink, Link } from "react-router";

import logomitexx from "../images/logomitexx.png";

const navItems = [
  {
    icon: FaHome,
    label: "INICIO",
    to: "/",
  },
  {
    icon: FaDraftingCompass,
    label: "PROYECTOS",
    sub: "NUESTRAS OBRAS",
    to: "/Servicios",
  },
  {
    icon: FaBuilding,
    label: "NOSOTROS",
    sub: "CONSTRUIDO CON VALORES",
    to: "/About",
  },
  {
    icon: FaTools,
    label: "SERVICIOS",
    sub: "BIENES",
    to: "/Productos",
  },
  {
    icon: FaPhoneAlt,
    label: "CONTACTO",
    to: "/Contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-slate-100 to-slate-50 text-gray-800 shadow-2xl p-3 sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between h-20 px-4 my-2 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logomitexx}
            alt="M&X Logo"
            className="h-28 w-auto object-contain"
          />
          <div className="flex flex-col justify-end  mt-6">
            <span className="text-5xl font-bold font-serif italic tracking-tight text-blue-950">
              M&X
            </span>
            <span className="text-sm text-gray-500 font-bold font-serif italic -mt-1">
              Calidad que construye futuro
            </span>
          </div>
        </Link>

        <div className="flex items-center ml-auto">
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 xl:space-x-12">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `group flex flex-col items-center transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "text-amber-400"
                      : "text-gray-600 hover:text-amber-400"
                  }`
                }
              >
                <item.icon className="h-7 w-7 mb-1 transition-transform group-hover:rotate-12" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {item.label}
                </span>
                {item.sub && (
                  <span className="text-[10px] text-gray-500 -mt-0.5">
                    {item.sub}
                  </span>
                )}
                <span className="block h-0.5 w-0 bg-amber-500 mt-1 group-hover:w-full transition-all duration-300 rounded" />
              </NavLink>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-slate-900 focus:outline-none ml-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-amber-100 text-amber-700"
                      : "hover:bg-gray-100 text-slate-700"
                  }`
                }
              >
                <item.icon className="h-6 w-6 flex-shrink-0" />
                <div>
                  <div className="font-semibold">{item.label}</div>
                  {item.sub && (
                    <div className="text-sm text-gray-500">{item.sub}</div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
