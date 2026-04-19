import {
  FiCheck,
  FiShoppingCart,
  FiArrowLeft,
  FiInfo,
  FiMessageCircle,
} from "react-icons/fi";
import { useParams, Link } from "react-router";
import { materiales } from "../DB/dbproduct";

export default function MaterialDetail() {
  const { id } = useParams();
  const item = materiales.find((p) => String(p.id) === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Producto no disponible
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Lo sentimos, no pudimos encontrar el material que buscas.
        </p>
        <Link
          to="/productos"
          className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition shadow-lg"
        >
          <FiArrowLeft /> Volver al catálogo
        </Link>
      </div>
    );
  }

  // 2. Lógica de Precios y Descuentos
  const price = Number(item.price) || 0;
  const listPrice = item.list_price
    ? parseFloat(item.list_price.replace(/[^0-9.]/g, ""))
    : null;
  const hasDiscount = listPrice && listPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((listPrice - price) / listPrice) * 100)
    : 0;

  // 3. Formateador de moneda Peruana
  const formatCurrency = (val) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(val);

  // 4. Mensaje de WhatsApp dinámico
  const whatsappNumber = "51928942418";
  const message = encodeURIComponent(
    `Hola M&X, estoy interesado en el producto: ${item.product_name}. ¿Podrían brindarme más información?`,
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb / Volver */}
        <Link
          to="/productos"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-600 font-medium mb-8 transition-colors group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Regresar al catálogo de materiales
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Galería de Imagen */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 aspect-square flex items-center justify-center p-6 md:p-12">
              <img
                src={item.image_url}
                alt={item.product_name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col">
            <div className="border-b border-gray-100 pb-6">
              <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                {item.marca || item.brand || "General"}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {item.product_name}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  {formatCurrency(price)}
                </span>
                {hasDiscount && (
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-gray-400 line-through">
                      {formatCurrency(listPrice)}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-md text-sm font-bold">
                      -{discountPercent}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FiInfo className="text-amber-600" /> Descripción del material
                </h3>
                <p className="text-gray-600 leading-relaxed italic">
                  {item.detail ||
                    `Plancha de alta calidad ideal para proyectos de construcción en seco y acabados profesionales. Marca ${item.marca || "Gyplac"}.`}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Especificaciones
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Calidad certificada",
                    "Uso estructural/acabado",
                    "Fácil instalación",
                    "Resistente",
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <FiCheck className="text-green-500 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-100 active:scale-95"
              >
                <FiMessageCircle size={22} />
                Consultar por WhatsApp
              </a>

              <button className="flex-1 border-2 border-gray-200 hover:border-amber-600 hover:text-amber-600 text-gray-600 font-bold py-4 rounded-2xl transition-all">
                Ficha Técnica
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <FiCheck size={20} />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  Garantía M&X
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <FiShoppingCart size={20} />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  Despacho a Obra
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
