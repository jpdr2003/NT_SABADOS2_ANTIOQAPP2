#GLOBALES
import pandas as pd
from notebook.graficacion import graficar_lineas, graficar_barras, graficar_torta

#TABLA RESERVAS
from notebook.consumo_reservas import consumir_api as consumir_reservas
from notebook.transformacion_Reservas import transformar_datos as transformar_reservas
from Limpiezas.limpiezaReservas import limpiar_datos as limpiar_reservas

#TABLA SESION (simulación)
from Simulaciones.simulador_sesion import generar_sesion
from notebook.transformacion_Sesion import transformar_datos as transformar_sesion
from Limpiezas.limpiezaSesion import limpiar_sesiones

#TABLA USUARIOS
from notebook.consumo_usuario import consumir_api as consumir_usuarios
from notebook.transformacion_usuarios import transformar_datos as transformar_usuarios
from Limpiezas.limpieza_usuarios import limpiar_datos as limpiar_usuarios

#TABLA RUTAS
from notebook.consumo_ruta import consumir_api as consumir_rutas
from notebook.transformacion_ruta import transformar_datos as transformar_rutas
from Limpiezas.limpiezaRutas import limpiar_datos_ruta as limpiar_rutas


# ── PROCESAR DATOS ────────────────────────────────────────────────────────────

datos_tabla_reservas = pd.DataFrame(consumir_reservas())
datos_tabla_reservas = limpiar_reservas(datos_tabla_reservas)
agrupacion_reservas = transformar_reservas(datos_tabla_reservas)

datos_simulados_sesion = [s for _ in range(50) for s in generar_sesion(_)]
datos_tabla_sesion = pd.DataFrame(datos_simulados_sesion)
datos_tabla_sesion = limpiar_sesiones(datos_tabla_sesion)
agrupacion_sesion = transformar_sesion(datos_tabla_sesion)

datos_tabla_usuarios = pd.DataFrame(consumir_usuarios())
datos_tabla_usuarios = limpiar_usuarios(datos_tabla_usuarios)
agrupacion_usuarios = transformar_usuarios(datos_tabla_usuarios)

datos_tabla_rutas = pd.DataFrame(consumir_rutas())
datos_tabla_rutas = limpiar_rutas(datos_tabla_rutas)
agrupacion_rutas = transformar_rutas(datos_tabla_rutas)


# ── GRÁFICAS RESERVAS ─────────────────────────────────────────────────────────

graficar_torta(agrupacion_reservas["agrupacion1"], "tipo", "conteo",
               titulo="Reservas por Tipo",
               nombre_archivo="reservas_por_tipo.png")

# ── GRÁFICAS SESIÓN ───────────────────────────────────────────────────────────
graficar_barras(agrupacion_sesion["agrupacion1"], "perfil", "conteo_usuarios",
                titulo="Usuarios por Perfil (Sesión)",
                nombre_archivo="sesion_usuarios_por_perfil.png")
# ── GRÁFICAS USUARIOS ─────────────────────────────────────────────────────────

graficar_lineas(agrupacion_usuarios["agrupacion1"], "creadoEn", "conteo",
                titulo="Usuarios Creados por Fecha",
                nombre_archivo="usuarios_por_fecha.png")

# ── GRÁFICAS RUTAS ────────────────────────────────────────────────────────────

graficar_barras(agrupacion_rutas["agrupacion1"], "tipo", "conteo",
                titulo="Rutas Destacadas por Tipo",
                nombre_archivo="rutas_destacadas_por_tipo.png")

