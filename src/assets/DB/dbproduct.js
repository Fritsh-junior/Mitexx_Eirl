let contador = 1;
export const materiales =[
{product_name:"Cerradura Digital Inteligente H2 Negro Travex",price:476.91,list_price:"S/ 529.90",discount:"-10%",image_url:"https://promart.vteximg.com.br/arquivos/ids/10014505-380-380/168943_22.jpg?v=639047042085100000",category:"Cerradura","available_quantity":10, detail:["Seguridad",
  "funciona con wifi"
]},
{product_name:"Cerradura Digital Inteligente H9P Plata Travex",price:1034.91,list_price:"S/ 1,149.90",discount:"-10%",image_url:"https://promart.vteximg.com.br/arquivos/ids/10014523-380-380/168944_22.jpg?v=639047042227600000",category:"Cerradura","available_quantity":10},
{product_name:"Cerradura Digital Inteligente H3 Negro Travex",price:629.91,list_price:"S/ 699.90",discount:"-10%",image_url:"https://promart.vteximg.com.br/arquivos/ids/10014518-380-380/168946_20.jpg?v=639047042202100000",category:"Cerraduras","available_quantity":10},
{product_name:"COMBO Dimfer Puerta Decor 40mm 65x207cm + Marco Pino Blanco",price:179.91,list_price:"S/ 199.90",discount:"-10%",image_url:"https://promart.vteximg.com.br/arquivos/ids/9302769-380-380/106250_10.jpg?v=638930552060500000",category:"Puertas de madera","available_quantity":144},
{product_name:"COMBO Dimfer Puerta Decor 40mm 70x207cm + Marco Pino Blanco",price:199.4,list_price:"S/ 209.90",discount:"-10%",image_url:"https://promart.vteximg.com.br/arquivos/ids/9584641-380-380/106251_10.jpg?v=638977453747530000",category:"Puertas de madera","available_quantity":121},
{product_name:"COMBO Dimfer Puerta Decor 40mm 90x207cm + Marco Pino Blanco",price:246.9,list_price:"S/ 259.90",discount:"-5%",image_url:"https://promart.vteximg.com.br/arquivos/ids/9302798-380-380/106255_11.jpg?v=638930552293700000",category:"Puertas de madera","available_quantity":69},
{product_name:"Burlete Autoadhesivo Tesamoll Puerta Blanco 1m x 37mm Tesa",price:45.3,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/684207-380-380/134586_20.jpg?v=637461789666000000",category:" Regatones y protectores de cantos","available_quantity":32},
{product_name:"Burlete de Puerta Transparente Tesamoll Puerta 1m x 37mm",price:44.9,list_price:"S/ 44.90",image_url:"https://promart.vteximg.com.br/arquivos/ids/684202-380-380/134587_20.jpg?v=637461789584770000",category:" Regatones y protectores de cantos","available_quantity":42},
{product_name:"Cerrojo Cantol digital 64 ac inox",price:399,list_price:"S/ 599",discount:"-33%",image_url:"https://promart.vteximg.com.br/arquivos/ids/6508539-380-380/135823_11.jpg?v=637976626658300000",category:" Picaportes y cerrojos","available_quantity":10},
{product_name:"Cerrojo Digital Cantol Modelo 14 Negro de Zamak","sku":135825,price:399,list_price:"S/ 599",image_url:"https://promart.vteximg.com.br/arquivos/ids/6706800-380-380/135825_11.jpg?v=638102741760530000",category:"  Picaportes y cerrojos","available_quantity":7},
{product_name:"Cinta de Doble Contacto 3M VHB 19mm x 8.9m","brand":"3m","sku":137378,price:64.71,list_price:"S/ 71.90",image_url:"https://promart.vteximg.com.br/arquivos/ids/6610827-380-380/137378_60.jpg?v=638041236293370000",category:" Cintas","available_quantity":58},
{product_name:"Gancho Mosquetón De Seguridad con Tuerca 8x80mm Werken","brand":"Werken","sku":138032,price:9.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685290-380-380/138032.jpg?v=637818498809430000",category:"Accesorios para cables y mallas","available_quantity":114},
{product_name:"Grampa para Cable de Acero 3/16 Werke",price:7.3,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/8360716-380-380/138033_20.jpg?v=638663492107500000",category:"Accesorios para cables y mallas","available_quantity":126},
{product_name:"Perno Ojo Galvanizado Werken 3/8x4","sku":138035,price:14.9,list_price:"S/ 14.90",image_url:null,category:"Pernos, tuercas y arandelas","available_quantity":115},
{product_name:"Cancamo cerrado 1/4x3\" (6mmx75mm) Werken","sku":138036,price:7.4,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685284-380-380/138036.jpg?v=637818498637530000",category:" Armellas y alcayatas","available_quantity":134},
{product_name:"Polea Fija 25mm Galvanizada Werken",price:6.9,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685294-380-380/138037.jpg?v=637818498928500000",category:"Accesorios para cables y mallas","available_quantity":77},
{product_name:"Gancho mosquetón de seguridad 4x40mm x4un Werken",price:8,list_price:"S/ 8",image_url:"https://promart.vteximg.com.br/arquivos/ids/4685283-380-380/138038.jpg?v=637818498609500000",category:"Accesorios para cables y mallas","available_quantity":132},
{product_name:"Perno Ojo con Tuerca 3/8x6\" (9.5mmx150mm) Werken",price:11,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685287-380-380/138040.jpg?v=637818498723230000",category:"Pernos, tuercas y arandelas","available_quantity":63},
{product_name:"Polea Fija 32mm Galvanizada Werken",price:6.9,list_price:"S/ 6.90",image_url:"https://promart.vteximg.com.br/arquivos/ids/4685288-380-380/138042.jpg?v=637818498752030000",category:"Accesorios para cables y mallas","available_quantity":48},
{product_name:"Cancamo abierto 1/4x3\" (6mmx75mm) Werken",price:7.4,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685292-380-380/138044.jpg?v=637818498870500000",category:"Armellas y alcayatas","available_quantity":103},
{product_name:"Gancho mosquetón de seguridad 5x50mm x4un Werken",price:10.2,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/8360703-380-380/138045_11.jpg?v=638663491976430000",category:"Accesorios para cables y mallas","available_quantity":156},
{product_name:"Perno Ojo con Tuerca 1/4\"x2\" (6mmx50mm) Werken",price:4.9,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685295-380-380/138046.jpg?v=637818498956670000",category:"Pernos, tuercas y arandelas","available_quantity":99},
{product_name:"Gancho Mosquetón de Seguridad 6x60mm Werken Fierro Modelo Fija",price:8.5,list_price:"S/ 8.50",image_url:"https://promart.vteximg.com.br/arquivos/ids/8360708-380-380/138047_11.jpg?v=638663492020870000",category:"Accesorios para cables y mallas","available_quantity":89},
{product_name:"Gancho de Seguridad Werken 10x100mm Fierro Galvanizado",price:12.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/8360712-380-380/138050_11.jpg?v=638663492064670000",category:"Accesorios para cables y mallas","available_quantity":78},
{product_name:"Presilla para cable 1/8\" 10 piezas Werken",price:15.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685303-380-380/138051.jpg?v=637818499187770000",category:" Accesorios para cables y mallas","available_quantity":126},
{product_name:"Perno J Galvanizado 5/16x6",price:8.5,list_price:"S/ 8.50",image_url:null,category:" de fijación > Pernos, tuercas y arandelas","available_quantity":61},
{product_name:"Eslabón rápido 3/8\" con rosca Werken",price:14.6,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/4685281-380-380/138056.jpg?v=637818498549900000",category:"Accesorios para cables y mallas","available_quantity":61},
{product_name:"Polea Fija 38mm Werken",price:12.9,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/8797863-380-380/138057_12.jpg?v=638811150832530000",category:"Accesorios para cables y mallas","available_quantity":64},
{product_name:"Sujetador de cuadros 3M L x 12 unidades",price:31.41,list_price:"S/34.90",discount:"-10%",image_url:"https://promart.vteximg.com.br/arquivos/ids/6634463-380-380/138102_61.jpg?v=638050080648770000",category:"Otros accesorios de fijación","available_quantity":259},
{product_name:"Cinta antideslizante Negro - Amarillo 5mx48mm Tesa",price:69.9,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/7981224-380-380/138161_10.jpg?v=638518434887330000",category:"  Cintas doble contacto y antideslizantes","available_quantity":29},
{product_name:"Cinta antideslizante negra 5mx50mm Tesa",price:74.9,list_price:"S/ 74.90",image_url:"https://promart.vteximg.com.br/arquivos/ids/2985294-380-380/138162_10.jpg?v=637728644503400000",category:" Cintas doble contacto y antideslizantes","available_quantity":35},
{product_name:"Corredera Telescópica Soft-Close 45Mm 16\" (40 cm) Werken",price:16.5,list_price:null,discount:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10222744-380-380/166481_11.jpg?v=639065199086170000",category:"Correderas telescópicas","available_quantity":89},
{product_name:"Corredera Telescópica Push-Open 45Mm 18\" (45 cm) Werken",price:18.5,list_price:"S/ 18.50",image_url:"https://promart.vteximg.com.br/arquivos/ids/10222747-380-380/166483_11.jpg?v=639065199096270000",category:" Correderas telescópicas","available_quantity":82},
{product_name:"Corredera Telescópica Soft-Close 45Mm 18\" (45 cm) Werken",price:18.5,list_price:null,discount:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10222757-380-380/166486_11.jpg?v=639065199124630000",category:" Correderas telescópicas","available_quantity":86},
{product_name:"Corredera Telescópica Push-Open 45Mm 20\" (50 cm) Werken",price:19.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10222761-380-380/166487_11.jpg?v=639065199135270000",category:"  Correderas telescópicas","available_quantity":97},
{product_name:"Corredera Telescópica Soft-Close 45Mm 20\" (50 cm) Werken",price:19.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10222754-380-380/166489_11.jpg?v=639065199115500000",category:" Correderas telescópicas","available_quantity":84},
{product_name:"Corredera Telescópica Push-Open 45Mm 16\" (40 cm) Werken","sku":166490,price:16.5,list_price:null,discount:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10222751-380-380/166490_11.jpg?v=639065199106230000",category:"Correderas telescópicas","available_quantity":96},
{product_name:"Corredera Telescópica 42mm 16\" (40 cm) Acero Eurolocks","sku":169281,price:9.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10187197-380-380/169281.jpg?v=639060093858400000",category:" Correderas telescópicas","available_quantity":186},
{product_name:"Corredera Telescópica 35mm 14\" (35 cm) Acero Eurolocks",price:5.5,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10187200-380-380/169283.jpg?v=639060093884200000",category:"  Correderas telescópicas","available_quantity":77},
{product_name:"Corredera Telescópica 35mm 10\" (25 cm) Acero Eurolocks",price:3.9,list_price:"S/ 3.90",image_url:"https://promart.vteximg.com.br/arquivos/ids/10187196-380-380/169285.jpg?v=639060093849900000",category:" Correderas telescópicas","available_quantity":19},
{product_name:"Corredera Telescópica 42mm 14\" (35 cm) Acero Eurolocks",price:7.9,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10187202-380-380/169287.jpg?v=639060093901100000",category:"  Correderas telescópicas","available_quantity":66},
{product_name:"Corredera Telescópica 35mm 16\" (40 cm) Acero Eurolocks",price:6.3,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/10187201-380-380/169289.jpg?v=639060093892400000",category:" Correderas telescópicas","available_quantity":80},
{product_name:"Transmisor para equipo eléctrico Power Gate",price:130,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/7981201-380-380/18084_4.jpg?v=638518434511630000",category:" Equipo y accesorios para puertas levadizas","available_quantity":13},
{product_name:"Cinta Doble Contacto Pegafan 25mm x 10m Blanco",price:9.9,list_price:null,image_url:"https://promart.vteximg.com.br/arquivos/ids/3044002-380-380/138030.jpg?v=637732078228330000",category:" Cintas doble contacto y antideslizantes","available_quantity":262},
{product_name:"Cinta de Doble Contacto Extrema 3M 25.4mm x 1.52m en Rojo",price:23.31,list_price:"S/ 25.90",image_url:"https://promart.vteximg.com.br/arquivos/ids/6610879-380-380/138113_61.jpg?v=638041236620600000",category:" Cintas doble contacto y antideslizantes","available_quantity":303},
{product_name: "Fierro Corrugado ASTM A615-Grado 60",image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-02/baco-615%20%281%29.jpg",},
  { product_name: "Fierro Corrugado ASTM A706",image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-02/baco-706%20%281%29%20%281%29.jpg", },
  { product_name: "Fierro Corrugado Binorma ASTM A615 - G60 / A706 - G60",image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-09/Fierro-Corrugado-Binorma-ASTM-A615-G60-A706-G60.jpg",},
  {
 
    product_name: "Fierro Corrugado 4.7",
    "descripcion": "Fierro de acero corrugado obtenidas por laminación en frío.\n... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-02/Corrugado-4-7-mm_0.jpg",},
  {
  
    product_name: "Fierro Corrugado NTC 2289 - Colombia",
    "descripcion": "Barras de acero microaleado de alta ductilidad, rectas de sección circular, con resaltes Hi-bond de... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-02/baco-2289%20%281%29_0%20%281%29.jpg",
    
    
  },

  {
    product_name: "Bobinas Prepintadas Galvanizadas y Aluzinc",
    "descripcion": "Son bobinas de acero con recubrimiento de aleación de “aluminio y zinc” o “zinc”. El grosor de la lá... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2024-02/%EF%BB%BFBobinas_Prepintadas_Galvanizadas_Aluzinc.jpg",
        
  },
  {
    product_name: "Planchas de Alta Resistencia",
    "descripcion": "Plancha de acero estructural de micro aleación con altas propiedades mecánicas.\n... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-02/Planchas_Alta_Resistencia_NAXTRA_M700_QL_0_0.jpg",
  },
  {  
    product_name: "Plancha anti desgaste",
    "descripcion": "Plancha de acero aleado de alta resistencia al desgaste, por abrasión, obtenido a través de un proce... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-02/Planchas_Antidesgaste%20_XAR450_XAR500_0.jpg",
          
  },
  {
    product_name: "Planchas A709",
    "descripcion": "Plancha de acero al carbono laminada en caliente obtenido a partir de acero estructural de alta resi... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2020-11/PLANCHAS_A709.jpg",
          
  },
  {
    product_name: "Planchas y Bobinas LAC",
    "descripcion": "Bobinas y Planchas de acero laminadas en caliente con bordes de laminación.\n... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2020-11/bobina-de-acero-lac.jpg",
  },
  {product_name: "Planchas Estriadas LAC",
    "descripcion": "Planchas de acero laminadas en caliente calidad comercial, con bordes de laminación o bordes cortado... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2020-11/planchas-estriadas-lac.png",
          
  },
  {
    product_name: "Planchas y Bobinas LAF",
    "descripcion": "Planchas y bobinas lisas de acero bajo en carbono, laminadas en frío, calidad comercial.\n... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2023-06/PLANCHAS_BOBINA_LAF%20%281%29.png",
  },
  {
    product_name: "Planchas y Bobinas Zincadas",
    "descripcion": "Están constituidas por planchas y bobinas lisas de acero de bajo carbono, revestidas por ambas super... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2020-11/planchas-zincadas.png",
  },
  {
    product_name: "Planchas de alta resistencia A572",
    "descripcion": "Plancha de acero al carbono laminada en caliente obtenido a partir de acero estructural de alta resi... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2026-01/planchas-a572.jpg",
  },
  {
    product_name: "Planchas Navales A131​",
    "descripcion": "Plancha de acero al carbono laminada en caliente obtenido a partir de​ acero estructural naval.\n... ",
    image_url:  "https://acerosarequipa.com/sites/default/files/productos/2026-02/imagen.png",
  }


].map(item => ({
  id: contador++,          
  ...item
}));
