import { useState } from "react";
import {
  FaHardHat,
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
      <div className=" mx-auto flex items-center justify-between h-20 px-4 lg:px-6">
        <Link to="/" className="">
          <img
            src={logomitexx}
            alt="M&SX Logo"
            className="h-40 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center ml-auto">
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 xl:space-x-12">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `group flex flex-col items-center transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "text-amber-400"
                      : "text-gray-600-300 hover:text-amber-300"
                  }`
                }
              >
                <item.icon className="h-7 w-7 mb-1 transition-transform group-hover:rotate-12" />
                <span
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    item.label === "CONTACTO"
                      ? "font-extrabold tracking-widest"
                      : ""
                  }`}
                >
                  {item.label}
                </span>
                <span className="block h-0.5 w-0 bg-amber-500 mt-1 group-hover:w-full transition-all duration-300 rounded" />
              </NavLink>
            ))}
          </div>
          <button
            className="md:hidden text-slate-900 focus:outline-none ml-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50  ">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-amber-900/50 text-amber-300"
                      : "hover:bg-gray-800 text-slate-700 hover:text-amber-300"
                  }`
                }
              >
                <item.icon className="h-6 w-6 flex-shrink-0" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  {item.sub && (
                    <div className="text-xs opacity-70">{item.sub}</div>
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
