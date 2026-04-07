
let contador = 1;
import portada1 from "../images/1.jpg"
import portada2 from "../images/2.jpg"
import portada3 from "../images/3.jpg"
import portada4 from "../images/4.jpg"
export const serviciosDB = [
  {
    portada:portada1,
    category: "Diseño y planos",
    subcategory: "Planos",
    name: "Diseño y planos arquitectónicos",
    image: "https://gruposanpedro.com.pe/wp-content/uploads/2020/12/servicios-diseno-planos-aequitectonicos-lima-peru-grupo-san-pedro-1.jpg",
    details: "Ofrecemos un servicio integral de diseño y elaboración de planos arquitectónicos completos para viviendas, edificios multifamiliares, locales comerciales y proyectos industriales. Nuestro equipo de arquitectos e ingenieros desarrolla planos en 2D (AutoCAD) y modelos 3D (Revit), incluyendo planos de arquitectura, estructurales, eléctricos, sanitarios, gas y acabados. Cumplimos con todas las normas municipales de dentro del departamento de Apurimac, entregamos expedientes técnicos listos para aprobación y brindamos acompañamiento durante el proceso de licencia de construcción.",
    caracteristicas: [
      "Planos completos de arquitectura, estructura, instalaciones y acabados",
      "Modelado BIM en Revit y renders 3D fotorrealistas",
      "Expediente técnico completo para licencia municipal",
      "Entrega en formatos PDF, DWG y 3D",
      "Asesoría personalizada y modificaciones ilimitadas durante el proceso",
      "Cumplimiento de normas sismorresistentes y accesibilidad"
    ]
  },
   {
    portada:portada2,
  category: "Diseño y planos",
  subcategory: "Construccion",
  name: "Construcción de Viviendas a Todo Costo",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPBqrMMElgWOr1osevLzND8FLLGFABYWZuQ&s",
  details: "Ofrecemos la construcción completa de tu casa en la modalidad \"Todo Incluido\" o \"Llave en Mano\". M&X se encarga de absolutamente todo el proceso constructivo, desde la preparación del terreno hasta la entrega final de la vivienda. Esto incluye mano de obra especializada, maquinaria pesada, suministro de todos los materiales de construcción, transporte, logística, dirección técnica completa y limpieza final de la obra.\n\nEn cuanto a los aspectos técnicos, trabajamos con un sistema de albañilería confinada con columnas y vigas de concreto armado, el cual es especialmente recomendado para las zonas sísmicas del Perú. Cumplimos estrictamente con la Norma Técnica E.030 de Diseño Sismorresistente y el Reglamento Nacional de Edificaciones (RNE). La cimentación se diseña según el estudio de suelos del terreno, utilizando concreto de resistencia f'c 175 kg/cm² o superior y acero de grado fy 4200 kg/cm². Las losas pueden ser aligeradas o macizas según el diseño estructural aprobado.\n\nLos acabados incluyen pisos de cerámica o porcelanato según el presupuesto del cliente, paredes con tarrajeo fino y pintura látex de primera calidad, instalaciones eléctricas y sanitarias completas con materiales certificados, y techo según las especificaciones acordadas. Todo el proyecto cuenta con planos estructurales visados por ingeniero civil colegiado, garantizando el cumplimiento total de las normas peruanas vigentes.\n\nRespecto a las modalidades de pago, ofrecemos tres opciones flexibles para mayor comodidad del cliente: pago total al inicio con un atractivo descuento, pago en dos partes (50% al inicio de la obra y 50% al finalizar), o pago fraccionado en 6 cuotas mensuales sujeto a términos y condiciones. Entregamos la casa completamente terminada, limpia y lista para habitar, con garantía escrita de la obra por un año.",
  caracteristicas: [
    "Construcción completa a todo costo (mano de obra + materiales + maquinaria)",
    "Sistema estructural sismorresistente según Norma E.030",
    "Incluye todos los acabados de calidad",
    "Supervisión técnica diaria por ingeniero residente",
    "Tres modalidades de pago flexibles",
    "Cumplimiento total de normas técnicas peruanas",
    "Entrega llave en mano con garantía de 1 año"
  ]
},
  {
    portada:portada3,
    category: "Diseño y planos",
    subcategory: "Diseño",
    name: "Remasterización de planos en 3D",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qn1luJayKJck7qLIP2v_51bvEZeXyuMVCw&s",
    details: "Transformamos tus planos antiguos o básicos en 2D a impresionantes modelos tridimensionales de alta calidad. El servicio incluye la digitalización completa del plano, modelado 3D preciso, texturizado realista, iluminación profesional y renders fotorrealistas desde múltiples ángulos. Ideal para presentaciones a clientes, municipalidad, inversionistas o para marketing inmobiliario. También realizamos recorridos virtuales 360° y animaciones para una mejor visualización del proyecto.",
    caracteristicas: [
      "Digitalización y corrección de planos antiguos",
      "Modelado 3D profesional en alta resolución",
      "Renders fotorrealistas interiores y exteriores",
      "Recorridos virtuales y tours 360°",
      "Animaciones de día y noche",
      "Exportación en formatos para impresión y web",
      "Entrega en menos de 7 días"
    ]
  },
  {
   portada:portada4,
    category: "Alquiler",
    subcategory: "Maquinaria Pesada",
    name: "Alquiler de Maquinaria Pesada",
    image: "https://img.freepik.com/fotos-premium/maquinaria-pesada-sitio-construccion-crecimiento-mercado-inmobiliario-construccion-cimientos-futuro-edificio-oficinas-viviendas_174533-1338.jpg",
    details: "Contamos con una amplia flota de maquinaria pesada para alquiler con y sin operador en Lima y provincias. Ofrecemos excavadoras, retroexcavadoras, cargadores frontales, motoniveladoras, rodillos compactadores, volquetes y mini cargadores. Todos nuestros equipos están en excelente estado, con mantenimiento preventivo reciente y seguros al día. Brindamos servicio rápido de entrega y recojo, asesoría técnica para elegir la máquina adecuada y flexibilidad en los periodos de alquiler (por hora, día, semana o mes).",
    caracteristicas: [
      "Excavadoras de 3 a 20 toneladas",
      "Retroexcavadoras y miniexcavadoras",
      "Cargadores frontales y volquetes",
      "Motoniveladoras y rodillos vibratorios",
      "Alquiler con operador certificado",
      "Entrega en todo Lima y Callao el mismo día",
      "Mantenimiento y combustible incluido según contrato",
      "Precios competitivos y facturación electrónica"
    ]
  }
].map(item => ({
  id: contador++,          
  ...item
}));
