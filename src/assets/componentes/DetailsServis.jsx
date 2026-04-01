import { FiCheck, FiClock, FiShield, FiPhone } from "react-icons/fi";
import { useParams, Link } from "react-router";
import { serviciosDB } from "../DB/database";

export default function ServiceDetail() {
  const { id } = useParams();
  const item = serviciosDB.find((p) => String(p.id) === id);

  if (!item) {
    return <div className="text-center py-20">Servicio no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón volver */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Link
          to="/Servicios"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
        >
          ← Volver a Servicios
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-125 mt-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {item.name}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Contenido principal */}
          <div className="md:col-span-7">
            <div className="prose prose-lg text-gray-700">
              <p className="text-justify leading-relaxed">{item.details}</p>
            </div>

            {/* Características mejoradas */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FiCheck className="text-amber-600" /> Características
                Principales
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {item.caracteristicas?.map((caracteristica, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-amber-200 transition-colors"
                  >
                    <div className="mt-1">
                      <FiCheck size={24} className="text-amber-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {caracteristica}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="font-bold text-xl mb-6">Modalidades de Pago</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <FiClock className="text-2xl text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Pago Total</p>
                    <p className="text-sm text-gray-600">
                      Con descuento especial
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiClock className="text-2xl text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Pago en 2 partes</p>
                    <p className="text-sm text-gray-600">
                      50% al inicio y 50% al finalizar
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiClock className="text-2xl text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Pago fraccionado</p>
                    <p className="text-sm text-gray-600">
                      Hasta 6 cuotas mensuales
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <FiShield className="text-3xl text-green-600" />
                  <div>
                    <p className="font-semibold text-green-700">
                      Garantía de 1 año
                    </p>
                    <p className="text-sm text-gray-600">En toda la obra</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/51999999999" // ← Cambia por tu número
                  target="_blank"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
                >
                  <FiPhone size={22} />
                  Solicitar Cotización por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
