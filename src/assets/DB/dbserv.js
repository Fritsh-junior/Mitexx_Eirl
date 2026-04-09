
let contador = 1;
import portada1 from "../images/1.jpg"
import portada2 from "../images/2.jpg"
import portada3 from "../images/3.jpg"
import portada4 from "../images/4.jpg"
export const serviciosDB = [
  {
    portada:portada1,
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
  subcategory: "Construccion",
  name: "Techos Propio",
  image: "https://pics.nuroa.com/venta_de_casa_remodelada_en_san_miguel_2750001767341001979.jpg",
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

export const serviciosPrin=[
  {
    portada:"https://i.pinimg.com/originals/22/74/4e/22744e27cf6b4cf766b4d26cc5acf853.jpg",
    subcategory: "Construccion",
    name: "Vivienda Ecologica",
    image: "data:image/jpeg;base64,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",
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
    portada:"https://www.alv-arquitectura.com/wp-content/uploads/2021/12/interiores-6.jpg",
    subcategory: "Construccion",
    name: "Vivienda de Arquitectura Moderna",
    image:"https://theressa.net/images/projects/5913338f11c9fico-casa-lomas-b15.jpg",
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
    portada:"https://pics.nuroa.com/venta_de_casa_remodelada_en_san_miguel_2750001767341001979.jpg",
    subcategory: "Construccion",
    name: "Vivienda Clasica",
    image:"https://pics.nuroa.com/venta_de_casa_remodelada_en_san_miguel_2750001767341001979.jpg",
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
].map(item => ({
  id:contador++,
  ...item
}));
