/* ============================================================
   UI.JS — Funciones de interfaz reutilizables
   Toasts, modales, menú móvil, utilidades visuales
   ============================================================ */

/* ------------------------------------------------------------
   TOASTS (notificaciones flotantes)
   Uso: mostrarToast('Mensaje', 'exito' | 'error' | 'aviso' | 'info')
   ------------------------------------------------------------ */
function mostrarToast(mensaje, tipo = 'info') {
  // Remover toast existente si hay uno
  const existente = document.querySelector('.toast');
  if (existente) existente.remove();

  // Iconos según tipo
  const iconos = {
    exito: 'fa-check-circle',
    error: 'fa-times-circle',
    aviso: 'fa-exclamation-triangle',
    info:  'fa-info-circle'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.innerHTML = `<i class="fas ${iconos[tipo] || iconos.info}"></i> ${mensaje}`;
  document.body.appendChild(toast);

  // Remover después de 3 segundos
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3200);
}

/* ------------------------------------------------------------
   MODALES
   Uso: abrirModal('id-del-modal') / cerrarModal('id-del-modal')
   ------------------------------------------------------------ */
function abrirModal(idModal) {
  const overlay = document.getElementById(idModal);
  if (!overlay) return;
  overlay.classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarModal(idModal) {
  const overlay = document.getElementById(idModal);
  if (!overlay) return;
  overlay.classList.remove('abierto');
  document.body.style.overflow = '';
}

// Cerrar modal al hacer clic en el fondo oscuro
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('abierto');
    document.body.style.overflow = '';
  }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.abierto').forEach(m => {
      m.classList.remove('abierto');
    });
    document.body.style.overflow = '';
  }
});

/* ------------------------------------------------------------
   MENÚ MÓVIL
   Uso: llamar toggleMenuMovil() desde el botón hamburguesa
   ------------------------------------------------------------ */
function toggleMenuMovil() {
  const menu = document.getElementById('menu-movil');
  if (menu) menu.classList.toggle('abierto');
}

/* ------------------------------------------------------------
   CARRUSEL
   Uso: new Carrusel('id-pista', 'id-btn-izq', 'id-btn-der')
   ------------------------------------------------------------ */
function Carrusel(idPista, idBtnIzq, idBtnDer) {
  const pista = document.getElementById(idPista);
  if (!pista) return;

  let indice = 0;

  function calcularMaxIndice() {
    const items = pista.querySelectorAll('.carrusel-item');
    const ancho = pista.offsetWidth;
    const anchoItem = items[0]?.offsetWidth || 1;
    return Math.max(0, items.length - Math.floor(ancho / anchoItem));
  }

  function mover(n) {
    const max = calcularMaxIndice();
    indice = Math.max(0, Math.min(indice + n, max));
    const items = pista.querySelectorAll('.carrusel-item');
    const anchoItem = items[0]?.offsetWidth || 0;
    pista.style.transform = `translateX(-${indice * (anchoItem + 24)}px)`;
  }

  const btnIzq = document.getElementById(idBtnIzq);
  const btnDer = document.getElementById(idBtnDer);
  if (btnIzq) btnIzq.addEventListener('click', () => mover(-1));
  if (btnDer) btnDer.addEventListener('click', () => mover(1));
}

/* ------------------------------------------------------------
   TOGGLE DE CONTRASEÑA
   Uso: toggleContrasena('id-del-input', 'id-del-icono')
   ------------------------------------------------------------ */
function toggleContrasena(idInput, idIcono) {
  const input = document.getElementById(idInput);
  const icono = document.getElementById(idIcono);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (icono) icono.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    if (icono) icono.className = 'fas fa-eye';
  }
}

/* ------------------------------------------------------------
   INDICADOR DE FUERZA DE CONTRASEÑA
   Uso: medirFuerzaContrasena('id-input', 'id-barra', 'id-texto')
   ------------------------------------------------------------ */
function medirFuerzaContrasena(valor) {
  let fuerza = 0;
  if (valor.length >= 8)              fuerza++;
  if (/[A-Z]/.test(valor))            fuerza++;
  if (/[0-9]/.test(valor))            fuerza++;
  if (/[^A-Za-z0-9]/.test(valor))     fuerza++;
  return fuerza; // 0-4
}

function actualizarBarraFuerza(fuerzaId, textoId, nivel) {
  const colores = ['', '#e63946', '#e9c46a', '#f4a261', '#40916c'];
  const etiquetas = ['', 'Muy débil', 'Débil', 'Buena', 'Muy fuerte'];

  for (let i = 1; i <= 4; i++) {
    const seg = document.getElementById(`${fuerzaId}-${i}`);
    if (seg) {
      seg.style.background = i <= nivel ? (colores[nivel] || '#e5e7eb') : '#e5e7eb';
    }
  }

  const texto = document.getElementById(textoId);
  if (texto) {
    texto.textContent = nivel === 0 ? 'Mínimo 8 caracteres' : etiquetas[nivel];
    texto.style.color = colores[nivel] || 'var(--texto-gris)';
  }
}

/* ------------------------------------------------------------
   ACTUALIZAR NAVBAR SEGÚN SESIÓN
   Muestra el nombre del usuario si está logueado
   ------------------------------------------------------------ */
function actualizarNav() {
  const sesion = obtenerSesion(); // viene de auth.js
  const btnAuth = document.getElementById('nav-auth-btn');
  if (!btnAuth) return;

  if (sesion) {
    btnAuth.textContent = sesion.nombre.split(' ')[0];
    btnAuth.href = 'reservas.html';
    btnAuth.classList.add('nav-btn');
  } else {
    btnAuth.textContent = 'Iniciar Sesión';
    btnAuth.href = 'login.html';
    btnAuth.classList.add('nav-btn');
  }
}

/* ------------------------------------------------------------
   MOSTRAR/OCULTAR ELEMENTO
   Uso: mostrar('id') / ocultar('id')
   ------------------------------------------------------------ */
function mostrar(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('oculto');
}

function ocultar(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('oculto');
}

function setText(id, texto) {
  const el = document.getElementById(id);
  if (el) el.textContent = texto;
}

/* ------------------------------------------------------------
   INICIALIZAR AL CARGAR
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function() {
  actualizarNav();
});
