
let contador = 1;

export const serviciosDB = [
 {
    subcategory: "Planos",
    name: "Diseño y Planos Arquitectónicos",
    portada: "https://gruposanpedro.com.pe/wp-content/uploads/2020/12/servicios-diseno-planos-aequitectonicos-lima-peru-grupo-san-pedro-1.jpg",
    image: [
      "https://gruposanpedro.com.pe/wp-content/uploads/2020/12/servicios-diseno-planos-aequitectonicos-lima-peru-grupo-san-pedro-1.jpg",
    ],
    short_desc: "Diseño integral y gestión municipal para proyectos residenciales, comerciales e industriales.",
    details: "Ofrecemos un servicio especializado en la elaboración de expedientes técnicos completos. Nuestro equipo desarrolla planos en 2D y modelos 3D (BIM) que integran todas las especialidades: arquitectura, estructuras e instalaciones.\n\nNos aseguramos de que cada diseño cumpla estrictamente con las normas municipales vigentes en el departamento de Apurímac, facilitando la obtención de licencias de construcción y garantizando la seguridad de tu inversión.",
    beneficios_material: [
      "Optimización de espacios y funcionalidad del diseño.",
      "Cumplimiento estricto del RNE y normas sismorresistentes.",
      "Visualización previa mediante modelado BIM en Revit.",
      "Asesoría personalizada con modificaciones ilimitadas."
    ],
    entregables_proyecto: [
      "Planos completos (DWG y PDF): Arquitectura, Estructuras, Eléctricas y Sanitarias.",
      "Modelado 3D del proyecto y renders fotorrealistas.",
      "Expediente técnico visado para licencia municipal.",
      "Memoria descriptiva y presupuesto estimado de obra."
    ],
    tags: ["Arquitectura", "BIM", "Gestión Municipal"]
  },
  {
    subcategory: "Diseño 3D",
    name: "Visualización 3D y Renders",
    portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qn1luJayKJck7qLIP2v_51bvEZeXyuMVCw&s",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qn1luJayKJck7qLIP2v_51bvEZeXyuMVCw&s",
    ],
    short_desc: "Transformamos tus planos 2D en experiencias visuales fotorrealistas de alta calidad.",
    details: "Llevamos tus ideas al siguiente nivel mediante la remasterización de planos. Digitalizamos planos antiguos o básicos y los convertimos en modelos tridimensionales con texturizado e iluminación profesional.\n\nEste servicio es ideal para presentaciones inmobiliarias, marketing o simplemente para que puedas visualizar tu futuro hogar con total realismo antes de construirlo.",
    beneficios_material: [
      "Renders de alta resolución con iluminación día/noche.",
      "Texturizado realista de materiales y mobiliario.",
      "Entrega rápida en menos de 7 días hábiles.",
      "Mejora el impacto visual para ventas o aprobaciones."
    ],
    entregables_proyecto: [
      "Imágenes fotorrealistas de interiores y exteriores.",
      "Recorridos virtuales y tours 360° interactivos.",
      "Video animación del proyecto (opcional).",
      "Archivos optimizados para web, impresión y redes sociales."
    ],
    tags: ["Renders", "Marketing Inmobiliario", "Modelado 3D"]
  },
  {
    subcategory: "Maquinaria",
    name: "Alquiler de Maquinaria Pesada",
    portada: "https://img.freepik.com/fotos-premium/maquinaria-pesada-sitio-construccion-crecimiento-mercado-inmobiliario-construccion-cimientos-futuro-edificio-oficinas-viviendas_174533-1338.jpg",
    image: [
      "https://img.freepik.com/fotos-premium/maquinaria-pesada-sitio-construccion-crecimiento-mercado-inmobiliario-construccion-cimientos-futuro-edificio-oficinas-viviendas_174533-1338.jpg",
    ],
    short_desc: "Flota moderna de equipos pesados con operadores certificados para obras civiles y minería.",
    details: "Contamos con una flota diversa de maquinaria pesada disponible para alquiler con o sin operador. Brindamos soporte logístico para movimientos de tierra, excavaciones y compactación en Lima y provincias.\n\nNuestros equipos pasan por mantenimientos preventivos rigurosos y cuentan con seguros al día, garantizando que tu obra no se detenga por fallas mecánicas.",
    beneficios_material: [
      "Equipos modernos (Excavadoras, Retroexcavadoras, Rodillos).",
      "Operadores certificados con amplia experiencia en obra.",
      "Flexibilidad de alquiler: por hora, día o mes.",
      "Servicio de transporte y recojo de maquinaria en sitio."
    ],
    entregables_proyecto: [
      "Maquinaria en óptimas condiciones operativas.",
      "Pólizas de seguro y documentos de mantenimiento al día.",
      "Informes de horas trabajadas y consumo de combustible.",
      "Asesoría técnica para la selección del equipo adecuado."
    ],
    tags: ["Maquinaria Pesada", "Movimiento de Tierras", "Logística"]
  }
].map(item => ({
  id: contador++,          
  ...item
}));

export const serviciosPrin=[
{
  subcategory: "Construcción",
  name: "Vivienda Ecológica con SIP LavaRock",
  portada: "https://i.pinimg.com/originals/22/74/4e/22744e27cf6b4cf766b4d26cc5acf853.jpg",
  image: [
    "https://i.pinimg.com/originals/22/74/4e/22744e27cf6b4cf766b4d26cc5acf853.jpg",
    "https://i.pinimg.com/originals/22/74/4e/22744e27cf6b4cf766b4d26cc5acf853.jpg",
    "https://i.pinimg.com/originals/22/74/4e/22744e27cf6b4cf766b4d26cc5acf853.jpg",
  ], 
  short_desc: "Construcción en seco de alto rendimiento, ideal para zonas costeras, sísmicas y de alta humedad en el Perú.",
  details: "En M&X construimos viviendas ecológicas modernas utilizando el innovador sistema SIP LavaRock. Este sistema consiste en paneles estructurales sándwich de alta tecnología: placas de óxido de magnesio (MgO) y un núcleo de poliestireno expandido (EPS).\n\nLos paneles integran en un solo elemento la estructura portante, el aislamiento térmico y acústico. Es la evolución de la construcción: mucho más rápida, limpia y eficiente que los métodos tradicionales de ladrillo y concreto.",
  beneficios_material: [
    "Aislamiento térmico y acústico superior (ahorro de energía).",
    "Alta resistencia a sismos gracias a su flexibilidad.",
    "Material incombustible y refractario al fuego.",
    "Inmune a la humedad, salitre, moho y climas extremos."
  ],
  entregables_proyecto: [
    "Diseño avanzado con modelado BIM en Revit y renders 3D.",
    "Expediente técnico completo para licencia municipal.",
    "Asesoría personalizada con modificaciones ilimitadas."
  ],

  tags: ["Ecológico", "Innovación", "Sismo-resistente"]
},
  {
    subcategory: "Construcción",
    name: "Vivienda de Arquitectura Moderna",
    portada: "https://theressa.net/images/projects/5913338f11c9fico-casa-lomas-b15.jpg",
    image: [
      "https://theressa.net/images/projects/5913338f11c9fico-casa-lomas-b15.jpg",
      "https://www.alv-arquitectura.com/wp-content/uploads/2021/12/interiores-6.jpg",
    ],
    short_desc: "Diseño de vanguardia con espacios abiertos, luz natural y acabados minimalistas de alta gama.",
    details: "En M&X transformamos la idea de hogar en una obra de arte funcional. Nuestras viviendas de arquitectura moderna se caracterizan por el uso de líneas limpias, integración de espacios interiores con exteriores y una distribución inteligente que prioriza la amplitud.\n\nUtilizamos herramientas de última generación para que puedas visualizar cada detalle antes de colocar el primer ladrillo, asegurando que el resultado final supere tus expectativas estéticas y funcionales.",
    beneficios_material: [
      "Diseño bioclimático para optimizar la iluminación y ventilación.",
      "Uso de materiales vanguardistas y acabados de alta durabilidad.",
      "Espacios integrados que mejoran la convivencia familiar.",
      "Alta valorización del inmueble por su diseño contemporáneo."
    ],
    entregables_proyecto: [
      "Modelado completo en Revit (BIM) y renders 3D fotorrealistas.",
      "Planos de acabados detallados (pisos, luminarias, carpintería).",
      "Expediente técnico para licencia municipal en Apurímac.",
      "Acompañamiento en la selección de materiales y texturas."
    ],
    tags: ["Moderno", "Vanguardia", "Minimalista"]
  },
  {
    subcategory: "Construcción",
    name: "Vivienda Clásica",
    portada: "https://pics.nuroa.com/venta_de_casa_remodelada_en_san_miguel_2750001767341001979.jpg",
    image: [
      "https://pics.nuroa.com/venta_de_casa_remodelada_en_san_miguel_2750001767341001979.jpg",
      "https://pics.nuroa.com/venta_de_casa_remodelada_en_san_miguel_2750001767341001979.jpg",
    ],
    short_desc: "Elegancia atemporal y calidez hogareña con estructuras sólidas y diseños tradicionales.",
    details: "Nuestros proyectos de vivienda clásica en M&X buscan rescatar la elegancia y la robustez de la arquitectura tradicional, adaptándola a las comodidades del siglo XXI. Nos enfocamos en la simetría, los detalles ornamentales y una atmósfera acogedora.\n\nEs la opción ideal para familias que buscan un hogar con carácter, durabilidad y un diseño que nunca pasa de moda, cumpliendo siempre con los más altos estándares de seguridad estructural.",
    beneficios_material: [
      "Estructuras sólidas con muros de gran resistencia térmica.",
      "Estética atemporal que mantiene su valor con el paso de los años.",
      "Ambientes definidos que ofrecen mayor privacidad y confort.",
      "Excelente comportamiento acústico entre habitaciones."
    ],
    entregables_proyecto: [
      "Planos completos (Arquitectura, Estructuras, Eléctricas y Sanitarias).",
      "Vistas 3D de fachada y áreas sociales principales.",
      "Expediente técnico listo para aprobación municipal.",
      "Asesoría técnica en cumplimiento de normas sismorresistentes."
    ],
    tags: ["Elegante", "Clásico", "Tradicional"]
  },
].map(item => ({
  id:contador++,
  ...item
}));
