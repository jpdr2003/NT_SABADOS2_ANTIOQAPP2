/* ============================================================
   DATOS.JS — Toda la información estática del sitio
   
   ¿Quieres agregar una ruta, evento o negocio?
   Solo agrega un nuevo objeto al array correspondiente.
   ============================================================ */

/* ------------------------------------------------------------
   RUTAS TURÍSTICAS
   Campos: id, titulo, imagen, duracion, grupo, calificacion,
           reseñas, ubicacion, precio, descripcion, incluye, tipo
   ------------------------------------------------------------ */
const RUTAS = [
  {
    id: 'cafe',
    titulo: 'Ruta del Café Tradicional',
    imagen: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '8 horas',
    grupo: '2–12 personas',
    calificacion: 4.8,
    resenas: 124,
    ubicacion: 'Eje Cafetero',
    precio: '$180.000 COP',
    precioNum: 180000,
    descripcion: 'Sumérgete en la cultura cafetera de Antioquia visitando fincas tradicionales. Aprende todo el proceso del café, desde la semilla hasta la taza, con degustación de café premium y almuerzo típico.',
    incluye: ['Transporte ida y vuelta', 'Guía especializado', 'Degustación de café', 'Almuerzo típico', 'Seguro de viaje'],
    tipo: 'cultural',
    destacado: true
  },
  {
    id: 'colonial',
    titulo: 'Medellín Colonial',
    imagen: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '4 horas',
    grupo: '1–15 personas',
    calificacion: 4.6,
    resenas: 89,
    ubicacion: 'Medellín',
    precio: '$85.000 COP',
    precioNum: 85000,
    descripcion: 'Recorre el centro histórico y descubre la arquitectura colonial. Un viaje en el tiempo por las calles y plazas que forjaron la identidad paisa.',
    incluye: ['Guía certificado', 'Mapa histórico', 'Entrada a museos', 'Degustación de café'],
    tipo: 'cultural',
    destacado: true
  },
  {
    id: 'artesanias',
    titulo: 'Artesanías Tradicionales',
    imagen: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800',
    duracion: '6 horas',
    grupo: '1–8 personas',
    calificacion: 4.9,
    resenas: 67,
    ubicacion: 'Jardín',
    precio: '$120.000 COP',
    precioNum: 120000,
    descripcion: 'Aprende técnicas ancestrales de cerámica y tejido con maestros artesanos. Una experiencia única para conectar con las raíces culturales de Antioquia.',
    incluye: ['Taller de cerámica', 'Materiales incluidos', 'Almuerzo típico', 'Artesanía de recuerdo'],
    tipo: 'artesanal',
    destacado: true
  },
  {
    id: 'guatape',
    titulo: 'Guatapé y Piedra del Peñol',
    imagen: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '10 horas',
    grupo: '1–15 personas',
    calificacion: 4.7,
    resenas: 203,
    ubicacion: 'Guatapé',
    precio: '$95.000 COP',
    precioNum: 95000,
    descripcion: 'Descubre el pueblo más colorido de Colombia y sube a la Piedra del Peñol para disfrutar de una vista panorámica espectacular del embalse.',
    incluye: ['Transporte', 'Guía local', 'Entrada a la Piedra del Peñol', 'Almuerzo'],
    tipo: 'naturaleza',
    destacado: false
  },
  {
    id: 'jardin',
    titulo: 'Jardín Pueblo Patrimonio',
    imagen: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '8 horas',
    grupo: '2–12 personas',
    calificacion: 4.5,
    resenas: 91,
    ubicacion: 'Jardín',
    precio: '$110.000 COP',
    precioNum: 110000,
    descripcion: 'Explora este encantador pueblo patrimonio con arquitectura colonial preservada, rodeado de naturaleza y tradiciones vivas.',
    incluye: ['Transporte', 'Guía', 'Recorrido en chiva', 'Café de la región'],
    tipo: 'cultural',
    destacado: false
  },
  {
    id: 'gastronomica',
    titulo: 'Ruta Gastronómica Paisa',
    imagen: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '5 horas',
    grupo: '1–8 personas',
    calificacion: 4.9,
    resenas: 156,
    ubicacion: 'Medellín',
    precio: '$75.000 COP',
    precioNum: 75000,
    descripcion: 'Degusta los sabores auténticos de la cocina antioqueña en restaurantes tradicionales. Bandeja paisa, arepas, chicharrón y mucho más.',
    incluye: ['5 paradas gastronómicas', 'Guía culinario', 'Degustaciones incluidas', 'Recetario de regalo'],
    tipo: 'gastronomica',
    destacado: false
  },
  {
    id: 'santafe',
    titulo: 'Santa Fe de Antioquia',
    imagen: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '9 horas',
    grupo: '2–20 personas',
    calificacion: 4.6,
    resenas: 118,
    ubicacion: 'Santa Fe de Antioquia',
    precio: '$90.000 COP',
    precioNum: 90000,
    descripcion: 'Visita la primera capital de Antioquia y su famoso Puente de Occidente. Arquitectura colonial, historia y el calor del pueblo antioqueño.',
    incluye: ['Transporte', 'Guía histórico', 'Visita al Puente de Occidente', 'Almuerzo típico'],
    tipo: 'cultural',
    destacado: false
  },
  {
    id: 'minera',
    titulo: 'Experiencia Minera',
    imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800',
    duracion: '7 horas',
    grupo: '3–10 personas',
    calificacion: 4.8,
    resenas: 42,
    ubicacion: 'Segovia',
    precio: '$135.000 COP',
    precioNum: 135000,
    descripcion: 'Descubre la tradición minera antioqueña en minas de oro históricas. Una experiencia única que combina historia, geología y cultura.',
    incluye: ['Transporte', 'Guía minero experto', 'Equipo de seguridad', 'Almuerzo', 'Souvenir mineral'],
    tipo: 'naturaleza',
    destacado: false
  },
  {
    id: 'rionegro',
    titulo: 'Rionegro Colonial',
    imagen: 'https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=800',
    duracion: '6 horas',
    grupo: '1–16 personas',
    calificacion: 4.4,
    resenas: 74,
    ubicacion: 'Rionegro',
    precio: '$65.000 COP',
    precioNum: 65000,
    descripcion: 'Conoce la cuna de la independencia antioqueña y su rica historia colonial. Museos, iglesias y la famosa Casa de la Convención.',
    incluye: ['Guía histórico', 'Entrada a museos', 'Café de bienvenida'],
    tipo: 'cultural',
    destacado: false
  }
];

/* ------------------------------------------------------------
   EVENTOS
   Campos: id, titulo, imagen, fecha, hora, ubicacion, tipo,
           precio, precioNum, calificacion, descripcion, actividades
   ------------------------------------------------------------ */
const EVENTOS = [
  {
    id: 'flores',
    titulo: 'Festival de las Flores',
    imagen: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    fecha: '5–14 Agosto 2025',
    hora: '10:00 AM – 10:00 PM',
    ubicacion: 'Centro de Medellín',
    tipo: 'festival',
    precio: '$65.000',
    precioNum: 65000,
    precioAnterior: '$80.000',
    calificacion: 4.9,
    descripcion: 'La celebración más emblemática de Medellín con desfiles de silleteros, conciertos, exposiciones florales y actividades culturales.',
    actividades: ['Desfile de Silleteros', 'Conciertos en vivo', 'Exposiciones florales', 'Actividades culturales', 'Gastronomía típica'],
    destacado: true
  },
  {
    id: 'gastronomico',
    titulo: 'Festival Gastronómico Paisa',
    imagen: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    fecha: '15 Septiembre 2025',
    hora: '12:00 PM – 8:00 PM',
    ubicacion: 'Parque de los Pies Descalzos, Medellín',
    tipo: 'gastronomia',
    precio: '$25.000',
    precioNum: 25000,
    precioAnterior: null,
    calificacion: 4.6,
    descripcion: 'Degusta los sabores auténticos de Antioquia con más de 50 restaurantes locales, chefs reconocidos y productos artesanales.',
    actividades: ['50+ Restaurantes', 'Chefs invitados', 'Catas de café', 'Opciones veganas', 'Talleres culinarios'],
    destacado: true
  },
  {
    id: 'artesanias-jardin',
    titulo: 'Feria de Artesanías de Jardín',
    imagen: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800',
    fecha: '25–27 Septiembre 2025',
    hora: '9:00 AM – 6:00 PM',
    ubicacion: 'Plaza Principal, Jardín',
    tipo: 'artesanal',
    precio: 'Gratis',
    precioNum: 0,
    precioAnterior: null,
    calificacion: 4.8,
    descripcion: 'Descubre el talento de los artesanos locales con productos únicos en cerámica, textiles, madera y joyería tradicional antioqueña.',
    actividades: ['30+ Artesanos', 'Talleres en vivo', 'Productos únicos', 'Música folclórica', 'Gastronomía local'],
    destacado: true
  },
  {
    id: 'cafe-festival',
    titulo: 'Festival Nacional del Café',
    imagen: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    fecha: '15–25 Junio 2025',
    hora: '9:00 AM – 7:00 PM',
    ubicacion: 'Chinchiná, Caldas',
    tipo: 'cultural',
    precio: '$35.000',
    precioNum: 35000,
    precioAnterior: null,
    calificacion: 4.7,
    descripcion: 'Celebración de la cultura cafetera con catas, concursos y experiencias gastronómicas únicas en el corazón del eje cafetero.',
    actividades: ['Catas de café', 'Concurso de baristas', 'Visita a fincas', 'Gastronomía cafetera', 'Música en vivo'],
    destacado: false
  },
  {
    id: 'manizales',
    titulo: 'Feria de Manizales',
    imagen: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    fecha: '3–12 Enero 2026',
    hora: 'Todo el día',
    ubicacion: 'Manizales, Caldas',
    tipo: 'festival',
    precio: 'Desde $45.000',
    precioNum: 45000,
    precioAnterior: null,
    calificacion: 4.5,
    descripcion: 'Una de las ferias más importantes de Colombia con corridas de toros, conciertos, folclor y la famosa Feria Taurina.',
    actividades: ['Corridas de toros', 'Conciertos', 'Desfiles', 'Gastronomía', 'Exposiciones'],
    destacado: false
  }
];

/* ------------------------------------------------------------
   NEGOCIOS
   Campos: id, titulo, imagen, tipo, ubicacion, precio,
           calificacion, estado, telefono, direccion, horario, descripcion
   ------------------------------------------------------------ */
const NEGOCIOS = [
  {
    id: 'hacienda',
    titulo: 'Restaurante La Hacienda',
    imagen: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    tipo: 'restaurante',
    ubicacion: 'Guatapé',
    precio: '$$',
    calificacion: 4.8,
    estado: 'Abierto ahora',
    estadoActivo: true,
    telefono: '+57 310 555 0001',
    direccion: 'Calle Principal #5-20, Guatapé',
    horario: 'Lun–Dom: 8:00 AM – 9:00 PM',
    descripcion: 'Cocina tradicional antioqueña en el corazón de Guatapé. Especialidad en bandeja paisa, sancocho y trucha del embalse.',
    destacado: true
  },
  {
    id: 'colonial-hotel',
    titulo: 'Hotel Boutique Colonial',
    imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    tipo: 'hotel',
    ubicacion: 'Santa Fe de Antioquia',
    precio: '$$$',
    calificacion: 4.9,
    estado: 'Disponible',
    estadoActivo: true,
    telefono: '+57 310 555 0002',
    direccion: 'Calle del Comercio #8-15, Santa Fe de Antioquia',
    horario: 'Recepción 24 horas',
    descripcion: 'Hotel boutique de lujo en el centro histórico. Arquitectura colonial restaurada con todas las comodidades modernas.',
    destacado: true
  },
  {
    id: 'dona-maria',
    titulo: 'Artesanías Doña María',
    imagen: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800',
    tipo: 'artesanias',
    ubicacion: 'Jardín',
    precio: '$',
    calificacion: 4.7,
    estado: 'Talleres disponibles',
    estadoActivo: true,
    telefono: '+57 310 555 0003',
    direccion: 'Carrera 5 #10-30, Jardín',
    horario: 'Mar–Dom: 9:00 AM – 6:00 PM',
    descripcion: 'Taller artesanal con más de 30 años de tradición. Cerámica, tejidos y joyería elaborados con técnicas ancestrales.',
    destacado: true
  },
  {
    id: 'cafe-pueblo',
    titulo: 'Café del Pueblo',
    imagen: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    tipo: 'restaurante',
    ubicacion: 'Medellín',
    precio: '$$',
    calificacion: 4.5,
    estado: 'Abierto',
    estadoActivo: true,
    telefono: '+57 310 555 0004',
    direccion: 'Calle 10 #43-20, El Poblado, Medellín',
    horario: 'Lun–Sáb: 7:00 AM – 8:00 PM',
    descripcion: 'Café especializado en granos de origen antioqueño. Métodos de preparación artesanales y ambiente acogedor en El Poblado.',
    destacado: false
  },
  {
    id: 'aventura',
    titulo: 'Tours Aventura Extrema',
    imagen: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
    tipo: 'tour',
    ubicacion: 'Guatapé',
    precio: '$$$',
    calificacion: 4.9,
    estado: 'Disponible',
    estadoActivo: true,
    telefono: '+57 310 555 0005',
    direccion: 'Malecón del Embalse, Guatapé',
    horario: 'Todos los días: 6:00 AM – 5:00 PM',
    descripcion: 'Operador turístico especializado en aventura extrema: parapente, kayak, senderismo y tours en lancha por el embalse.',
    destacado: false
  },
  {
    id: 'arrayanes',
    titulo: 'Posada Los Arrayanes',
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800',
    tipo: 'hotel',
    ubicacion: 'Jericó',
    precio: '$$',
    calificacion: 4.6,
    estado: 'Pocas habitaciones',
    estadoActivo: true,
    telefono: '+57 310 555 0006',
    direccion: 'Calle 7 #5-10, Jericó',
    horario: 'Recepción 24 horas',
    descripcion: 'Posada familiar en el corazón de Jericó. Habitaciones acogedoras con vista a las montañas y desayuno típico incluido.',
    destacado: false
  },
  {
    id: 'ceramica',
    titulo: 'Taller de Cerámica Ancestral',
    imagen: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tipo: 'artesanias',
    ubicacion: 'Rionegro',
    precio: '$',
    calificacion: 4.8,
    estado: 'Talleres hoy',
    estadoActivo: true,
    telefono: '+57 310 555 0007',
    direccion: 'Vereda El Tablazo, Rionegro',
    horario: 'Mié–Dom: 10:00 AM – 5:00 PM',
    descripcion: 'Taller de cerámica con técnicas precolombinas. Aprende a moldear, decorar y hornear piezas únicas con maestros artesanos.',
    destacado: false
  },
  {
    id: 'fogon',
    titulo: 'Restaurante El Fogón Paisa',
    imagen: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    tipo: 'restaurante',
    ubicacion: 'Medellín',
    precio: '$$',
    calificacion: 4.4,
    estado: 'Abierto',
    estadoActivo: true,
    telefono: '+57 310 555 0008',
    direccion: 'Carrera 50 #52-30, Centro, Medellín',
    horario: 'Lun–Dom: 7:00 AM – 8:00 PM',
    descripcion: 'Restaurante tradicional en el centro de Medellín. La mejor bandeja paisa, frijoles y chicharrón de la ciudad.',
    destacado: false
  },
  {
    id: 'casa-verde',
    titulo: 'Hotel Boutique Casa Verde',
    imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    tipo: 'hotel',
    ubicacion: 'Jardín',
    precio: '$$$',
    calificacion: 4.7,
    estado: 'Disponible',
    estadoActivo: true,
    telefono: '+57 310 555 0009',
    direccion: 'Vereda La Cascada, Jardín',
    horario: 'Recepción 24 horas',
    descripcion: 'Hotel ecológico rodeado de naturaleza. Piscina natural, senderos y desayuno orgánico incluido.',
    destacado: false
  }
];

/* ------------------------------------------------------------
   FUNCIONES DE CONSULTA DE DATOS
   ------------------------------------------------------------ */

// Obtener ruta por id
function obtenerRuta(id) {
  return RUTAS.find(r => r.id === id) || null;
}

// Obtener evento por id
function obtenerEvento(id) {
  return EVENTOS.find(e => e.id === id) || null;
}

// Obtener negocio por id
function obtenerNegocio(id) {
  return NEGOCIOS.find(n => n.id === id) || null;
}

// Obtener rutas destacadas (para el carrusel del index)
function obtenerRutasDestacadas() {
  return RUTAS.filter(r => r.destacado);
}

// Obtener eventos destacados
function obtenerEventosDestacados() {
  return EVENTOS.filter(e => e.destacado);
}

// Obtener negocios destacados
function obtenerNegociosDestacados() {
  return NEGOCIOS.filter(n => n.destacado);
}
