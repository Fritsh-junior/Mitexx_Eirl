import {
  FaTools,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-18 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
            Fundada en Diciembre 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            CONSTRUYENDO EL <span className="text-amber-500">FUTURO</span>
            <br />
            DESDE EL DÍA UNO
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-light">
            Somos una empresa joven, pero con una visión clara: <br />
            convertirnos en el referente de calidad, confianza y servicio en el
            sector de la construcción en Ayacucho y el sur del Perú.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Somos <span className="text-amber-600">MITEXX</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Fundada en diciembre de 2025, <strong>MITEXX</strong> nace con
                  el propósito de revolucionar la forma en que se compran
                  materiales de construcción y se ejecutan proyectos en la
                  región.
                </p>
                <p>
                  Aunque somos una empresa joven, contamos con un equipo de
                  profesionales con amplia experiencia en el sector,
                  comprometidos con ofrecer productos de primera calidad,
                  precios justos y un servicio técnico excepcional.
                </p>
                <p className="font-semibold text-xl text-amber-700">
                  Nuestra misión es clara: ser el socio estratégico de
                  constructores, técnicos, emprendedores y familias que buscan
                  construir con confianza.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "3", label: "Meses de operación" },
                { number: "100%", label: "Compromiso con la calidad" },
                { number: "15+", label: "Años de experiencia del equipo" },
                { number: "∞", label: "Sueños por construir" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-amber-600 hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl font-black text-amber-600 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            NUESTROS VALORES
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: FaShieldAlt,
                title: "Transparencia Total",
                description:
                  "Honestidad y claridad en cada cotización, cada entrega y cada decisión.",
              },
              {
                icon: FaTools,
                title: "Calidad sin Excusas",
                description:
                  "Solo trabajamos con materiales de primera línea y proveedores confiables.",
              },
              {
                icon: FaHandshake,
                title: "Servicio Personalizado",
                description:
                  "Tratamos a cada cliente como si fuera el único, porque para nosotros lo es.",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <value.icon className="w-11 h-11" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visión Futura */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FaChartLine className="text-6xl mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Nuestra Visión
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Ser reconocidos antes del 2030 como{" "}
            <strong>
              la mejor cadena de distribución y servicios de construcción
            </strong>{" "}
            del centro y sur del Perú, destacando por nuestra excelencia
            operativa, innovación constante y el impacto positivo que generamos
            en las comunidades donde operamos.
          </p>
          <p className="mt-8 text-lg font-medium opacity-90">
            Queremos que cuando alguien piense en construcción, piense primero
            en <span className="font-bold">MITEXX</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
