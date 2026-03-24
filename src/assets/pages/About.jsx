import {
  FaUsers,
  FaTools,
  FaMountain,
  FaShieldAlt,
  FaLeaf,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            CONSTRUCCIÓN CON <span className="text-amber-500">HISTORIA</span> Y{" "}
            <span className="text-amber-500">FUTURO</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 font-light">
            Más de 15 años transformando sueños en estructuras sólidas, seguras
            y sostenibles.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Somos <span className="text-amber-600">MITEXX</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Somos una empresa peruana especializada en{" "}
                  <strong>
                    obras civiles, edificación, proyectos industriales y
                    remodelaciones integrales
                  </strong>
                  , con presencia en múltiples regiones del país.
                </p>
                <p>
                  Nacimos con la convicción de que cada proyecto debe ser{" "}
                  <strong>un legado</strong>: construido con precisión técnica,
                  responsabilidad social y respeto absoluto por el medio
                  ambiente.
                </p>
                <p className="font-semibold text-xl text-amber-700">
                  Hoy somos más de 250 personas trabajando diariamente para
                  entregar obras que superan expectativas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Años de experiencia" },
                { number: "180+", label: "Proyectos ejecutados" },
                { number: "120M+", label: "m² construidos" },
                { number: "0", label: "Accidentes graves (últimos 8 años)" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-amber-500"
                >
                  <div className="text-4xl md:text-5xl font-black text-amber-600 mb-2">
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
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            NUESTROS <span className="text-amber-600">VALORES</span>{" "}
            FUNDAMENTALES
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: FaShieldAlt,
                title: "Seguridad Primero",
                description:
                  "Implementamos los más altos estándares de seguridad. Certificación ISO 45001 y cero tolerancia a riesgos innecesarios.",
              },
              {
                icon: FaLeaf,
                title: "Sostenibilidad Real",
                description:
                  "Materiales eco-amigables, gestión eficiente de residuos y certificaciones EDGE/LEED en la mayoría de nuestros proyectos.",
              },
              {
                icon: FaHandshake,
                title: "Compromiso Total",
                description:
                  "Entregamos en tiempo y forma. Transparencia absoluta con clientes y cumplimiento estricto de contratos.",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo / Certificaciones */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Un equipo que{" "}
                <span className="text-amber-600">construye confianza</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Contamos con ingenieros, arquitectos, técnicos y operarios
                altamente capacitados, con promedio de
                <strong>12 años de experiencia</strong> en el sector.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <FaAward className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Profesionales colegiados y certificados internacionalmente
                  </span>
                </li>
                <li className="flex items-start">
                  <FaTools className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Capacitación continua en nuevas tecnologías constructivas
                  </span>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Equipo comprometido con la mejora continua y la calidad
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Certificaciones y Membresías
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  "ISO 9001",
                  "ISO 14001",
                  "ISO 45001",
                  "Cámara de Construcción",
                  "SENCICO",
                  "CAPECO",
                ].map((cert, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-amber-700">
                      {cert}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            ¿Quieres construir algo{" "}
            <span className="text-gray-900">extraordinario</span>?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Estamos listos para convertir tu visión en una realidad sólida y
            duradera.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-6 px-12 rounded-xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-xl uppercase tracking-wider"
          >
            Contáctanos Hoy
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              MISIÓN Y <span className="text-amber-600">VISIÓN</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Los pilares que guían cada decisión y cada proyecto en MITEX
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Misión */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-amber-600 relative">
              <div className="absolute -top-5 left-8 bg-amber-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                MISIÓN
              </div>

              <div className="mt-10 space-y-6 text-lg text-gray-700">
                <p>
                  En <strong>MITEXx</strong>, nos dedicamos a ser el aliado
                  confiable y estratégico del constructor, el técnico, el
                  emprendedor y el hogar peruano, ofreciendo una amplia gama de
                  materiales de ferretería, maderamen, insumos industriales y
                  servicios especializados de la más alta calidad.
                </p>
                <p>
                  Comercializamos y distribuimos productos de primera línea
                  (tubos, aceros, pinturas, herramientas, fijaciones,
                  lubricantes, maderas aserradas y derivados), ejecutamos obras
                  civiles menores y medianas con enfoque en techados,
                  estructuras metálicas y albañilería, y ponemos a disposición
                  maquinaria y equipos de alquiler para hacer realidad cada
                  proyecto de forma eficiente, segura y rentable.
                </p>
                <p className="font-semibold text-amber-700">
                  Nuestro compromiso es superar las expectativas de nuestros
                  clientes mediante atención personalizada, precios
                  competitivos, stock permanente y entrega oportuna.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-amber-600 relative">
              <div className="absolute -top-5 left-8 bg-amber-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                VISIÓN
              </div>

              <div className="mt-10 space-y-6 text-lg text-gray-700">
                <p>
                  Ser reconocida, al 2030, como la{" "}
                  <strong>
                    cadena de distribución y servicios de construcción más
                    confiable y completa del centro y sur del Perú
                  </strong>
                  , referente nacional en calidad, variedad y respaldo técnico
                  para el sector de la construcción, el hogar y la industria.
                </p>
                <p>
                  Aspiramos a consolidarnos como el punto de encuentro preferido
                  para profesionales y particulares, expandiendo nuestra red de
                  tiendas, fortaleciendo nuestra oferta de servicios de
                  ejecución de obras y alquiler de equipos, e incorporando
                  constantemente productos innovadores y sostenibles que
                  contribuyan al desarrollo responsable de las comunidades donde
                  operamos.
                </p>
                <p className="font-semibold text-amber-700">
                  Queremos que cada cliente diga: “Si es construcción, en MITEX
                  está la solución”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
