import { FiCheck, FiClock, FiShield, FiPhone } from "react-icons/fi";
import { useParams, Link } from "react-router";
import { serviciosDB } from "../DB/dbserv";
import { serviciosPrin } from "../DB/dbserv";

export default function ServiceDetail() {
  const { id } = useParams();
  const servis = [...serviciosDB, ...serviciosPrin];
  const item = servis.find((p) => String(p.id) === id);

  if (!item) {
    return <div className="text-center py-20">Servicio no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 ">
        <div className=" mx-auto px-4 absolute p-3 rounded-2xl m-2 mr-3 bg-amber-50">
          <Link
            to="/Servicios"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Volver a Servicios
          </Link>
        </div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover "
        />
        <div className="absolute  bottom-0 left-0 right-0 bg-linear-to-t from-white via-white/55 to-transparent mx-auto px-4 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {item.name}
          </h1>
        </div>
      </div>
      <div className="prose prose-lg text-gray-700">
        <p className="text-justify leading-relaxed">{item.details}</p>
      </div>
      <div className="mx-auto px-7">
        <div className="grid ">
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6  text-center">
              Características Principales
            </h3>
            <ul className="grid md:grid-cols-3 gap-4 py-3 ">
              {item.caracteristicas?.map((caracteristica, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4  p-5 my-5 mx-2 border-t-2 border-slate-400    hover:border-amber-200 transition-colors"
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
      </div>

      <div className="md:col-span-5">
        <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
          <h3 className="font-bold text-xl mb-6">Modalidades de Pago</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <FiClock className="text-2xl text-amber-600 mt-1" />
              <div>
                <p className="font-semibold">Pago Total</p>
                <p className="text-sm text-gray-600">Con descuento especial</p>
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
              href="https://wa.me/51928942418"
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
  );
}
