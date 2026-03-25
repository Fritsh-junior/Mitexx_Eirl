import { serviciosDB } from "../DB/database"; // Asegúrate que la ruta sea correcta
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router"; // ← Import necesario para el ícono
export default function Servicio() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://realestatemarket.com.mx/images/2020/03-Marzo/1803/constructoras_en_queretaro_no_pararan_labores_tras_contingencia_por_coronavirus_1.jpg" // o una imagen hero potente de excavadora / casa terminada
            alt="Construcción M&X"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Construimos tu casa{" "}
            <span className="text-amber-400">sin preocupaciones</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
            Diseño, materiales premium, mano de obra experta y pagos en 3
            cómodas cuotas. Nosotros asumimos todo el proceso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded-lg text-lg transition shadow-lg hover:shadow-amber-500/50"
            >
              Solicita tu presupuesto gratis →
            </Link>
            <Link
              to="/proyectos"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-bold py-4 px-10 rounded-lg text-lg transition"
            >
              Ver proyectos realizados
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nuestros Servicios Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde el diseño hasta la entrega de llaves: todo incluido, con
            calidad garantizada y pagos flexibles.
          </p>
        </div>
        {serviciosDB.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No hay servicios disponibles en este momento
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {serviciosDB.map((item) => (
              <Link
                key={item.id}
                to={`/Servicios/${item.id}`}
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img
                    src={
                      item.image ||
                      "https://via.placeholder.com/400x300?text=M&X"
                    }
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge superior opcional */}
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    Servicio Premium
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-base">
                    {item.details}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition">
                      Ver detalle <FaPlus className="ml-2 text-sm" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Trust bar */}
      <div className="bg-white py-12 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {/* Estadística 1 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-600 mb-2">
                +50
              </div>
              <p className="text-gray-600 text-lg font-medium">
                Proyectos entregados
              </p>
              <p className="text-sm text-gray-500 mt-1">
                con éxito en Lima y provincias
              </p>
            </div>

            {/* Estadística 2 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-600 mb-2">
                100%
              </div>
              <p className="text-gray-600 text-lg font-medium">
                Satisfacción garantizada
              </p>
              <p className="text-sm text-gray-500 mt-1">de nuestros clientes</p>
            </div>

            {/* Estadística 3 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-600 mb-2">
                3
              </div>
              <p className="text-gray-600 text-lg font-medium">
                Formas de pago
              </p>
              <p className="text-sm text-gray-500 mt-1">flexibles y seguras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
