/* ============================================================
   AUTH.JS — Autenticación y gestión de sesión
   Maneja: registro, login, logout, sesión con localStorage
   ============================================================ */

/* ------------------------------------------------------------
   CLAVES DE LOCALSTORAGE
   Si necesitas renombrar las claves, cámbialas solo aquí
   ------------------------------------------------------------ */
const CLAVE_USUARIOS = 'antioqapp_usuarios';
const CLAVE_SESION   = 'antioqapp_sesion';

/* ------------------------------------------------------------
   USUARIOS DE DEMOSTRACIÓN
   Se cargan automáticamente si no hay usuarios en localStorage
   ------------------------------------------------------------ */
const USUARIOS_DEMO = [
  {
    id: 'u1',
    nombre:  'María González',
    email:   'maria@demo.com',
    clave:   'Colombia2025!',
    perfil:  'turista',
    creadoEn: '2025-01-01'
  },
  {
    id: 'u2',
    nombre:  'Carlos Emprendedor',
    email:   'carlos@demo.com',
    clave:   'Antioquia123!',
    perfil:  'emprendedor',
    creadoEn: '2025-01-01'
  }
];

/* ------------------------------------------------------------
   FUNCIÓN SEGURA DE LOCALSTORAGE
   Evita errores en modo privado o cuando localStorage está lleno
   ------------------------------------------------------------ */
function leerLS(clave, valorPorDefecto = null) {
  try {
    const raw = localStorage.getItem(clave);
    return raw ? JSON.parse(raw) : valorPorDefecto;
  } catch (e) {
    console.warn('Error leyendo localStorage:', clave, e);
    return valorPorDefecto;
  }
}

function escribirLS(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (e) {
    console.warn('Error escribiendo localStorage:', clave, e);
    return false;
  }
}

function borrarLS(clave) {
  try {
    localStorage.removeItem(clave);
  } catch (e) {
    console.warn('Error borrando de localStorage:', clave, e);
  }
}

/* ------------------------------------------------------------
   GESTIÓN DE USUARIOS
   ------------------------------------------------------------ */

// Inicializar usuarios demo si no existen
function inicializarUsuarios() {
  if (!leerLS(CLAVE_USUARIOS)) {
    escribirLS(CLAVE_USUARIOS, USUARIOS_DEMO);
  }
}

// Obtener todos los usuarios
function obtenerUsuarios() {
  inicializarUsuarios();
  return leerLS(CLAVE_USUARIOS, []);
}

// Buscar usuario por email
function buscarUsuarioPorEmail(email) {
  const usuarios = obtenerUsuarios();
  return usuarios.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}

/* ------------------------------------------------------------
   REGISTRO
   Retorna: { exito: true, usuario } | { exito: false, mensaje }
   ------------------------------------------------------------ */
function registrarUsuario(datos) {
  // Verificar si el email ya existe
  if (buscarUsuarioPorEmail(datos.email)) {
    return { exito: false, mensaje: 'Este correo ya está registrado.' };
  }

  const usuarios = obtenerUsuarios();
  const nuevoUsuario = {
    id:        'u' + Date.now(),
    nombre:    datos.nombre.trim(),
    email:     datos.email.toLowerCase().trim(),
    clave:     datos.clave,
    perfil:    datos.perfil || 'turista',
    creadoEn:  new Date().toISOString()
  };

  usuarios.push(nuevoUsuario);
  escribirLS(CLAVE_USUARIOS, usuarios);

  return { exito: true, usuario: nuevoUsuario };
}

/* ------------------------------------------------------------
   LOGIN
   Retorna: { exito: true, usuario, sesion } | { exito: false, mensaje }
   ------------------------------------------------------------ */
function iniciarSesion(email, clave) {
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.clave === clave
  );

  if (!usuario) {
    return { exito: false, mensaje: 'Correo o contraseña incorrectos.' };
  }

  const sesion = {
    usuarioId: usuario.id,
    nombre:    usuario.nombre,
    email:     usuario.email,
    perfil:    usuario.perfil,
    loginEn:   new Date().toISOString()
  };

  escribirLS(CLAVE_SESION, sesion);
  return { exito: true, usuario, sesion };
}

/* ------------------------------------------------------------
   LOGOUT
   ------------------------------------------------------------ */
function cerrarSesion() {
  borrarLS(CLAVE_SESION);
  window.location.href = 'login.html';
}

/* ------------------------------------------------------------
   OBTENER SESIÓN ACTIVA
   Retorna el objeto de sesión o null si no hay sesión
   ------------------------------------------------------------ */
function obtenerSesion() {
  return leerLS(CLAVE_SESION, null);
}

/* ------------------------------------------------------------
   VERIFICAR SI ESTÁ LOGUEADO
   ------------------------------------------------------------ */
function estaLogueado() {
  return obtenerSesion() !== null;
}

/* ------------------------------------------------------------
   PROTEGER PÁGINAS QUE REQUIEREN LOGIN
   Uso: llamar requireirLogin() al inicio de la página
   ------------------------------------------------------------ */
function requerirLogin() {
  if (!estaLogueado()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

/* ------------------------------------------------------------
   INICIALIZAR al cargar
   ------------------------------------------------------------ */
inicializarUsuarios();
