import { FiCheck, FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { useParams, Link } from "react-router"; // ← Corregido
import { materiales } from "../DB/database";

export default function MaterialDetail() {
  const { id } = useParams(); // id aquí será el sku

  const item = materiales.find((p) => String(p.sku) === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h2>
          <p className="text-gray-600 mb-8">
            El producto que buscas no existe o fue eliminado.
          </p>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-2xl hover:bg-amber-700 transition"
          >
            <FiArrowLeft />
            Volver a todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const listPrice = item.list_price
    ? parseFloat(item.list_price.replace(/[^0-9.]/g, ""))
    : null;

  const discountPercent = item.discount
    ? parseInt(item.discount)
    : listPrice
      ? Math.round(((listPrice - item.price) / listPrice) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Botón Volver */}
        <Link
          to="/productos"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium mb-10 transition"
        >
          <FiArrowLeft size={20} />
          Volver a los productos
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Imagen */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-8">
              <img
                src={item.image_url}
                alt={item.product_name}
                className="w-full h-auto object-contain aspect-square p-8 bg-white"
              />
            </div>
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col">
            <div>
              {/* Marca */}
              <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
                {item.brand}
              </span>

              {/* Nombre del producto */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {item.product_name}
              </h1>

              {/* Precio */}
              <div className="mt-6 flex items-baseline gap-4">
                <p className="text-4xl font-bold text-gray-900">
                  S/ {Number(item.price).toFixed(2)}
                </p>

                {listPrice && listPrice > item.price && (
                  <>
                    <p className="text-xl text-gray-400 line-through">
                      S/ {listPrice.toFixed(2)}
                    </p>
                    {discountPercent > 0 && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                        -{discountPercent}%
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Stock */}
            <div className="mt-6 flex items-center gap-3">
              <div
                className={`flex items-center gap-2 text-lg font-medium ${item.available_quantity > 0 ? "text-green-600" : "text-red-500"}`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${item.available_quantity > 0 ? "bg-green-500" : "bg-red-500"}`}
                />
                {item.available_quantity > 0
                  ? `${item.available_quantity} unidades disponibles`
                  : "Agotado temporalmente"}
              </div>
            </div>

            {/* Descripción / Información */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Detalles del Producto
              </h3>
              <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
                <p>
                  Cerradura digital de alta seguridad{" "}
                  {item.brand && `marca ${item.brand}`}. Ideal para puertas
                  principales.
                  {item.available_quantity > 0
                    ? " Disponible inmediatamente."
                    : ""}
                </p>
              </div>
            </div>

            {/* Características (puedes personalizarlas) */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Características Principales
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <FiCheck className="text-amber-600" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Apertura con huella, código y llave
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <FiCheck className="text-amber-600" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Conexión Bluetooth / WiFi (según modelo)
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <FiCheck className="text-amber-600" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Batería de larga duración
                  </span>
                </li>
              </ul>
            </div>

            {/* Botones de Acción */}
            <div className="mt-auto pt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={item.product_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <FiShoppingCart size={22} />
                Ver en Promart
              </a>

              <button className="flex-1 border-2 border-gray-800 hover:bg-gray-900 hover:text-white font-semibold py-4 rounded-2xl transition-all">
                Consultar disponibilidad
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-8 text-sm text-gray-500 flex flex-wrap gap-x-8 gap-y-2">
              <p>✅ Envío gratis en compras sobre S/ 200</p>
              <p>✅ Stock en tienda Lima</p>
              <p>✅ Garantía oficial del fabricante</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
