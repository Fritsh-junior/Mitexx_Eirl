import { FiCheck } from "react-icons/fi";
import { useParams, Link } from "react-router";
import { serviciosDB } from "../DB/database";
export default function ServisDetail() {
  const { id } = useParams();
  const item = serviciosDB.find((p) => String(p.id) === id);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          to="/Servicios"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-8"
        >
          ← Volver a Servicios
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={
                item.image ||
                "https://via.placeholder.com/600x600?text=Sin+Imagen"
              }
              alt={item.name}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.name}
            </h1>

            <p className="text-gray-700 mb-6 text-justify">
              {item.details || "Descripción detallada del producto."}
            </p>
            <h3 className="font-bold mb-3 text-gray-800">Características</h3>
            <div className="text-gray-700 mb-6">
              <ul className="space-y-3">
                {item.caracteristicas?.map((caracteristica, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheck
                      size={20}
                      className="text-amber-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-foreground">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
