import { FiCheck, FiShoppingCart } from "react-icons/fi";
import { useParams, Link } from "react-router";
import {
  aceros,
  cemento,
  agregado,
  herramientas,
  bloques,
  cubos,
  seguridad,
} from "../DB/database";

const materiales = [
  ...aceros,
  ...cemento,
  ...agregado,
  ...herramientas,
  ...bloques,
  ...cubos,
  ...seguridad,
];

export default function MaterialDetail() {
  const { id } = useParams();
  const item = materiales.find((p) => String(p.id) === id);

  if (!item) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">
          Material no encontrado
        </h2>
        <Link
          to="/PRODUCTOS"
          className="text-amber-600 hover:underline mt-4 inline-block"
        >
          ← Volver a Materiales
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* Botón Volver */}
        <Link
          to="/Productos"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium mb-10"
        >
          ← Volver a Materiales
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Imagen - Diseño Premium */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src={
                  item.image ||
                  "https://via.placeholder.com/800x800?text=Sin+Imagen"
                }
                alt={item.name}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>

            {/* Badge de peso o característica */}
            {item.weight && (
              <div className="absolute -bottom-4 right-6 bg-white shadow-md rounded-2xl px-5 py-2 text-sm font-semibold text-gray-700 flex items-center gap-2">
                {item.weight} KG
              </div>
            )}
          </div>

          {/* Detalles */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {item.name}
              </h1>

              <p className="text-3xl font-bold text-amber-600 mt-4">
                S/ {Number(item.price).toLocaleString("es-PE")}
              </p>
            </div>

            {/* Descripción */}
            <div className="mt-8 prose prose-lg text-gray-700 leading-relaxed">
              <p>{item.details}</p>
            </div>

            {/* Características */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Características Principales
              </h3>
              <ul className="space-y-4">
                {item.caracteristicas?.map((caracteristica, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-amber-600" size={18} />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {caracteristica}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botones de Acción */}
            <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95">
                <FiShoppingCart size={22} />
                Añadir al Carrito
              </button>

              <button className="flex-1 border-2 border-gray-800 hover:bg-gray-900 hover:text-white font-semibold py-4 rounded-2xl transition-all">
                Consultar Stock
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-8 text-sm text-gray-500 flex flex-wrap gap-x-6 gap-y-2">
              <p>✅ Envío disponible</p>
              <p>✅ Stock en tienda</p>
              <p>✅ Garantía de calidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
