import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaHammer,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <div className="py-20 md:py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Estamos listos para <span className="text-blue-600">construir</span>
          <br />
          <span className="text-blue-600">tu futuro</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Asesoría especializada y profesional para el desarrollo de tus
          proyectos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: FaWhatsapp,
              title: "WHATSAPP",
              val: "+51 928 942 418",
              link: "https://wa.me/51928942418",
            },
            {
              icon: FaPhoneAlt,
              title: "LLAMADA DIRECTA",
              val: "+51 928 942 418",
              link: "tel:+51928942418",
            },
            {
              icon: FaEnvelope,
              title: "CORREO",
              val: "ventas@mitexx.com.pe",
              link: "mailto:ventas@mitexx.com.pe",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
            >
              <item.icon className="text-3xl mb-6" className="text-blue-600" />
              <h3 className="text-xs font-bold text-slate-400 tracking-widest mb-2">
                {item.title}
              </h3>
              <p className="text-xl font-semibold text-slate-800">{item.val}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 border-t border-slate-200 pt-16">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" /> Nuestras Sedes
          </h2>

          <div className="space-y-6">
            {/* Sede Principal - Activa */}
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-indigo-50">
                <FaBuilding className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Ocobamba – Chincheros
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  Oficina Principal (Atención al cliente)
                </p>
              </div>
            </div>

            {/* Sedes Futuras - 2027 */}
            {[{ name: "Rocchac" }, { name: "Ongoy" }].map((sede) => (
              <div
                key={sede.name}
                className="flex items-start gap-4 opacity-70"
              >
                <div className="p-2 rounded-lg bg-slate-100 text-slate-400">
                  <FaHammer className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-700">{sede.name}</h4>
                  <p className="text-sm text-slate-400 italic">
                    Próxima apertura — Enero 2027
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Horario de Atención</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-500">Lunes a Sábado</span>
              <span className="font-semibold text-slate-900">
                07:30 — 18:00
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Domingos</span>
              <span className="font-semibold text-slate-900">
                08:00 — 13:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
