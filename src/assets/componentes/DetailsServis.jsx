import {
  FiCheck,
  FiClock,
  FiShield,
  FiPhone,
  FiArrowLeft,
  FiLayers,
  FiMap,
  FiCheckCircle,
  FiInfo,
  FiMaximize2,
} from "react-icons/fi";
import { useParams, Link } from "react-router";
import { serviciosDB, serviciosPrin } from "../DB/dbserv";

export default function ServiceDetail() {
  const { id } = useParams();
  const servis = [...serviciosDB, ...serviciosPrin];
  const item = servis.find((p) => String(p.id) === id);

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800">
          Servicio no encontrado
        </h2>
        <Link
          to="/Servicios"
          className="mt-4 text-amber-600 hover:underline flex items-center gap-2"
        >
          <FiArrowLeft /> Volver al catálogo
        </Link>
      </div>
    );
  }

  // --- LÓGICA PARA IMÁGENES ---
  // Si item.image es un array, usamos la primera para el Hero. Si es un string, la usamos directamente.
  const mainImage = Array.isArray(item.image) ? item.image[0] : item.image;
  // Para la galería, nos aseguramos de tener un array (aunque solo sea una imagen)
  const imagesList = Array.isArray(item.image) ? item.image : [item.image];

  const whatsappMessage = encodeURIComponent(
    `Hola M&X, solicito información detallada sobre el servicio: ${item.name}`,
  );
  // Verificamos si el ID actual pertenece al array de servicios principales

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={mainImage}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-liena-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/Servicios"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all border border-white/20"
          >
            <FiArrowLeft /> Volver
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-amber-500 text-black font-bold text-xs uppercase tracking-widest rounded mb-4">
              {item.subcategory || "Construcción Especializada"}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight mb-6">
              {item.name}
            </h1>
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-lg border border-white/30 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-10">
            <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 text-amber-600">
                <FiInfo size={24} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Sobre el Servicio
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {item.details}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8 px-2">
                <FiLayers className="text-amber-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Beneficios Clave
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {(item.beneficios_material || item.caracteristicas)?.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                    >
                      <FiCheckCircle
                        className="text-amber-500 shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-gray-700 font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>
            {item.entregables_proyecto && (
              <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <FiMap className="text-amber-400" size={24} />
                  <h3 className="text-2xl font-bold">
                    ¿Qué incluye el Proyecto?
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {item.entregables_proyecto.map((entregable, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-slate-300 border-b border-slate-800 pb-3"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                      <p className="text-sm md:text-base">{entregable}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {imagesList.length > 1 && (
              <section>
                <div className="flex items-center gap-3 mb-8 px-2">
                  <FiMaximize2 className="text-amber-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Galería de Obra
                  </h3>
                </div>
                <div className="grid justify-center grid-cols-1 sm:grid-cols-3 gap-4">
                  {imagesList.map((img, index) => (
                    <div
                      key={index}
                      className="group relative h-64 overflow-hidden rounded-3xl border border-gray-200 bg-white"
                    >
                      <img
                        src={img}
                        alt={`${item.name} vista ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Columna Derecha: Sidebar Dinámico */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* ESCENARIO 1: CONSTRUCCIÓN (Servicios Principales) */}
              {item.subcategory === "Construcción" && (
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-amber-100">
                  <h3 className="font-bold text-xl text-gray-900 mb-6 border-b pb-4">
                    Inversión y Gestión
                  </h3>
                  <div className="space-y-6">
                    <PaymentOption
                      title="Pago al Contado"
                      desc="Descuentos preferenciales por liquidación."
                    />
                    <PaymentOption
                      title="Financiamiento M&X"
                      desc="50% inicial y 50% contra entrega."
                    />
                    <PaymentOption
                      title="Crédito Fraccionado"
                      desc="Consulta nuestras opciones de cuotas mensuales."
                    />
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 mb-8 bg-green-50 p-4 rounded-2xl">
                      <FiShield className="text-3xl text-green-600 shrink-0" />
                      <div>
                        <p className="font-bold text-green-800 text-sm">
                          Garantía Estructural
                        </p>
                        <p className="text-xs text-green-700">
                          Cobertura por 12 meses
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/51928942418?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-200"
                    >
                      <FiPhone size={20} />
                      Solicitar Cotización
                    </a>
                  </div>
                </div>
              )}

              {(item.subcategory === "Planos" ||
                item.subcategory === "Diseño 3D") && (
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-blue-100">
                  <h3 className="font-bold text-xl text-gray-900 mb-6 border-b pb-4">
                    Proceso de Diseño
                  </h3>
                  <div className="space-y-6">
                    <PaymentOption
                      title="Entrega Digital"
                      desc="Archivos en DWG, PDF y modelos Revit."
                    />
                    <PaymentOption
                      title="Revisiones"
                      desc="Modificaciones ilimitadas hasta tu conformidad."
                    />
                    <PaymentOption
                      title="Tiempo de Entrega"
                      desc="Estimado de 5 a 10 días hábiles."
                    />
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500 mb-6 italic">
                      "Proyectamos tus sueños con precisión técnica."
                    </p>
                    <a
                      href={`https://wa.me/51928942418?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-200"
                    >
                      <FiPhone size={20} />
                      Solicitar Cotización
                    </a>
                  </div>
                </div>
              )}

              {/* ESCENARIO 3: MAQUINARIA PESADA */}
              {item.subcategory === "Maquinaria" && (
                <div className="bg-slate-900 rounded-3xl shadow-xl p-8 text-white">
                  <h3 className="font-bold text-xl mb-6 border-b border-slate-700 pb-4 text-amber-400">
                    Logística de Equipo
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <FiCheckCircle className="text-amber-400 mt-1 shrink-0" />
                      <p className="text-sm">
                        Alquiler por hora, día o semana completa.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <FiCheckCircle className="text-amber-400 mt-1 shrink-0" />
                      <p className="text-sm">
                        Operadores certificados con SCTR al día.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <FiCheckCircle className="text-amber-400 mt-1 shrink-0" />
                      <p className="text-sm">
                        Traslado de maquinaria a todo Apurímac.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <a
                      href={`https://wa.me/51928942418?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-200"
                    >
                      <FiPhone size={20} />
                      Solicitar Cotización
                    </a>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function PaymentOption({ title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 bg-amber-50 p-2 rounded-lg text-amber-600">
        <FiClock size={18} />
      </div>
      <div>
        <p className="font-bold text-gray-800 leading-none">{title}</p>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
