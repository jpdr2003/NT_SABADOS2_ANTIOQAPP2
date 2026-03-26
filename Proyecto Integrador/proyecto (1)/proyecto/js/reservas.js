/* ============================================================
   RESERVAS.JS — Gestión de reservas y favoritos
   Maneja: crear, cancelar, pagar reservas + favoritos de todo tipo
   ============================================================ */

/* ------------------------------------------------------------
   CLAVES DE LOCALSTORAGE
   ------------------------------------------------------------ */
const CLAVE_RESERVAS    = 'antioqapp_reservas';
const CLAVE_FAV_RUTAS   = 'antioqapp_fav_rutas';
const CLAVE_FAV_EVENTOS = 'antioqapp_fav_eventos';
const CLAVE_FAV_NEGOCIOS = 'antioqapp_fav_negocios';

/* ------------------------------------------------------------
   RESERVAS DEMO
   Se cargan la primera vez que el usuario inicia sesión
   ------------------------------------------------------------ */
const RESERVAS_DEMO = [
  {
    id: 'demo1',
    usuarioId: 'u1',
    tipo: 'ruta',
    itemId: 'guatape',
    titulo: 'Tour Completo Guatapé',
    proveedor: 'Experiencias Antioquia',
    precio: '$320.000 COP',
    precioNum: 320000,
    estado: 'confirmado',
    fecha: '25 de Septiembre, 2025',
    hora: '8:00 AM',
    personas: 2,
    lugar: 'Parque Principal Guatapé',
    codigoConfirmacion: '#GT2025-001',
    imagen: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
    creadoEn: '2025-09-01T10:00:00Z'
  },
  {
    id: 'demo2',
    usuarioId: 'u1',
    tipo: 'evento',
    itemId: 'artesanias-jardin',
    titulo: 'Feria de Artesanías',
    proveedor: 'Artesanías Paisa',
    precio: '$85.000 COP',
    precioNum: 85000,
    estado: 'pendiente',
    fecha: '28 de Septiembre, 2025',
    hora: '2:00 PM',
    personas: 1,
    lugar: 'Plaza Principal, Jardín',
    codigoConfirmacion: '#ART2025-002',
    imagen: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800',
    creadoEn: '2025-09-05T14:00:00Z'
  },
  {
    id: 'demo3',
    usuarioId: 'u1',
    tipo: 'evento',
    itemId: 'gastronomico',
    titulo: 'Tour Gastronómico Medellín',
    proveedor: 'Sabores Paisas',
    precio: '$180.000 COP',
    precioNum: 180000,
    estado: 'completado',
    fecha: '15 de Septiembre, 2025',
    hora: '6:00 PM',
    personas: 2,
    lugar: 'Parque de los Pies Descalzos',
    codigoConfirmacion: '#GAST2025-003',
    imagen: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    creadoEn: '2025-09-10T18:00:00Z'
  }
];

/* ------------------------------------------------------------
   LECTURA Y ESCRITURA DE RESERVAS
   ------------------------------------------------------------ */

function obtenerReservas() {
  return leerLS(CLAVE_RESERVAS, []);
}

function guardarReservas(reservas) {
  escribirLS(CLAVE_RESERVAS, reservas);
}

// Obtener solo las reservas del usuario actual
function obtenerMisReservas() {
  const sesion = obtenerSesion();
  if (!sesion) return [];
  return obtenerReservas().filter(r => r.usuarioId === sesion.usuarioId);
}

// Cargar reservas demo para usuario u1 si no las tiene
function cargarReservasDemo(usuarioId) {
  const reservas = obtenerReservas();
  const yaExisten = reservas.some(r => r.id.startsWith('demo') && r.usuarioId === usuarioId);
  if (!yaExisten) {
    const demos = RESERVAS_DEMO.map(r => ({ ...r, usuarioId }));
    guardarReservas([...reservas, ...demos]);
  }
}

/* ------------------------------------------------------------
   CREAR RESERVA
   ------------------------------------------------------------ */
function crearReserva(datos) {
  const sesion = obtenerSesion();
  if (!sesion) {
    mostrarToast('Debes iniciar sesión para reservar.', 'aviso');
    setTimeout(() => window.location.href = 'login.html', 1500);
    return null;
  }

  const nueva = {
    id: 'r' + Date.now(),
    usuarioId:           sesion.usuarioId,
    tipo:                datos.tipo,       // 'ruta' | 'evento'
    itemId:              datos.itemId,
    titulo:              datos.titulo,
    proveedor:           datos.proveedor || 'AntioqAPP',
    precio:              datos.precio,
    precioNum:           datos.precioNum || 0,
    estado:              'confirmado',
    fecha:               datos.fecha || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('es-CO'),
    hora:                datos.hora || '8:00 AM',
    personas:            datos.personas || 1,
    lugar:               datos.lugar || '',
    codigoConfirmacion:  '#' + Math.random().toString(36).substr(2, 8).toUpperCase(),
    imagen:              datos.imagen || '',
    creadoEn:            new Date().toISOString()
  };

  const reservas = obtenerReservas();
  reservas.push(nueva);
  guardarReservas(reservas);

  return nueva;
}

/* ------------------------------------------------------------
   CANCELAR RESERVA
   ------------------------------------------------------------ */
function cancelarReserva(idReserva) {
  const reservas = obtenerReservas();
  const idx = reservas.findIndex(r => r.id === idReserva);
  if (idx === -1) return false;

  reservas[idx].estado = 'cancelado';
  guardarReservas(reservas);
  return true;
}

/* ------------------------------------------------------------
   PAGAR RESERVA (pendiente → confirmado)
   ------------------------------------------------------------ */
function pagarReserva(idReserva) {
  const reservas = obtenerReservas();
  const idx = reservas.findIndex(r => r.id === idReserva);
  if (idx === -1) return false;

  reservas[idx].estado = 'confirmado';
  guardarReservas(reservas);
  return true;
}

/* ------------------------------------------------------------
   ESTADÍSTICAS DEL USUARIO
   ------------------------------------------------------------ */
function obtenerEstadisticas() {
  const mis = obtenerMisReservas();
  return {
    activas:    mis.filter(r => r.estado === 'confirmado').length,
    completadas: mis.filter(r => r.estado === 'completado').length,
    pendientes: mis.filter(r => r.estado === 'pendiente').length,
    canceladas: mis.filter(r => r.estado === 'cancelado').length,
    totalGastado: mis
      .filter(r => r.estado !== 'cancelado')
      .reduce((sum, r) => sum + (r.precioNum || 0), 0)
  };
}

/* ------------------------------------------------------------
   FAVORITOS — RUTAS
   ------------------------------------------------------------ */
function obtenerFavRutas() {
  return leerLS(CLAVE_FAV_RUTAS, []);
}

function toggleFavRuta(id) {
  const favs = obtenerFavRutas();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    mostrarToast('Ruta guardada en favoritos ❤️', 'exito');
  } else {
    favs.splice(idx, 1);
    mostrarToast('Ruta eliminada de favoritos', 'aviso');
  }
  escribirLS(CLAVE_FAV_RUTAS, favs);
  actualizarBotonesFav('[data-fav-ruta]', favs);
}

function esFavRuta(id) {
  return obtenerFavRutas().includes(id);
}

/* ------------------------------------------------------------
   FAVORITOS — EVENTOS
   ------------------------------------------------------------ */
function obtenerFavEventos() {
  return leerLS(CLAVE_FAV_EVENTOS, []);
}

function toggleFavEvento(id) {
  const favs = obtenerFavEventos();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    mostrarToast('Evento guardado en favoritos ❤️', 'exito');
  } else {
    favs.splice(idx, 1);
    mostrarToast('Evento eliminado de favoritos', 'aviso');
  }
  escribirLS(CLAVE_FAV_EVENTOS, favs);
  actualizarBotonesFav('[data-fav-evento]', favs);
}

function esFavEvento(id) {
  return obtenerFavEventos().includes(id);
}

/* ------------------------------------------------------------
   FAVORITOS — NEGOCIOS
   ------------------------------------------------------------ */
function obtenerFavNegocios() {
  return leerLS(CLAVE_FAV_NEGOCIOS, []);
}

function toggleFavNegocio(id) {
  const favs = obtenerFavNegocios();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    mostrarToast('Negocio guardado en favoritos ❤️', 'exito');
  } else {
    favs.splice(idx, 1);
    mostrarToast('Negocio eliminado de favoritos', 'aviso');
  }
  escribirLS(CLAVE_FAV_NEGOCIOS, favs);
  actualizarBotonesFav('[data-fav-negocio]', favs);
}

function esFavNegocio(id) {
  return obtenerFavNegocios().includes(id);
}

/* ------------------------------------------------------------
   ACTUALIZAR ESTADO VISUAL DE BOTONES DE FAVORITO
   ------------------------------------------------------------ */
function actualizarBotonesFav(selector, favs) {
  document.querySelectorAll(selector).forEach(btn => {
    const id = btn.dataset.favRuta || btn.dataset.favEvento || btn.dataset.favNegocio;
    const guardado = favs.includes(id);
    btn.classList.toggle('guardado', guardado);
    const icono = btn.querySelector('i');
    if (icono) {
      icono.className = guardado ? 'fas fa-heart' : 'far fa-heart';
    }
  });
}

// Inicializar todos los botones de favorito al cargar la página
function inicializarBotonesFav() {
  actualizarBotonesFav('[data-fav-ruta]',    obtenerFavRutas());
  actualizarBotonesFav('[data-fav-evento]',  obtenerFavEventos());
  actualizarBotonesFav('[data-fav-negocio]', obtenerFavNegocios());
}

document.addEventListener('DOMContentLoaded', inicializarBotonesFav);
