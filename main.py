import pandas as pd

from simuladorRutas      import generar_simulacion_ruta
from limpiezaRutas       import limpiar_datos_ruta
from descripcion_rutas   import describir_datos as describir_rutas

from simulacionReservas  import generar_simulacion_reservas
from limpiezaReservas    import limpiar_datos as limpiar_reservas
from descripcionReservas import describir_datos as describir_reservas

from simulacion_usuarios import generar_simulacion
from limpieza_usuarios   import limpiar_datos as limpiar_usuarios
from descripcion_usuario import escribir_datos as describir_usuarios

from simulador_sesion    import generar_sesion
from limpiezaSesion      import limpiar_sesiones
from descrpcionSesion    import describir_sesiones

SEPARADOR = "=" * 65
SUBSEPARADOR = "-" * 65
N = 20  # cantidad de registros a simular por modulo


def encabezado(titulo):
    print(f"\n{SEPARADOR}")
    print(f"  {titulo}")
    print(SEPARADOR)


def resumen_limpieza(df_sucio, df_limpio):
    eliminados = len(df_sucio) - len(df_limpio)
    print(f"\n{SUBSEPARADOR}")
    print(f"  RESUMEN LIMPIEZA")
    print(SUBSEPARADOR)
    print(f"  Registros antes de limpiar : {len(df_sucio)}")
    print(f"  Registros despues de limpiar: {len(df_limpio)}")
    print(f"  Registros eliminados        : {eliminados}")
    print(SUBSEPARADOR)


def ejecutar_rutas():
    encabezado("MODULO 1 — RUTAS")

    datos = generar_simulacion_ruta(N)
    df_sucio = pd.DataFrame(datos)

    print("\n[ DATOS SUCIOS — muestra de columnas clave ]")
    print(df_sucio[["id", "titulo", "tipo", "precioNum", "destacado"]].to_string(index=False))

    df_limpio = limpiar_datos_ruta(df_sucio)

    print("\n[ DATOS LIMPIOS — muestra de columnas clave ]")
    print(df_limpio[["id", "titulo", "tipo", "precioNum", "destacado"]].to_string(index=False))

    resumen_limpieza(df_sucio, df_limpio)

    print("\n[ DESCRIPCION ]")
    describir_rutas(df_limpio)


def ejecutar_reservas():
    encabezado("MODULO 2 — RESERVAS")

    datos = generar_simulacion_reservas(N)
    df_sucio = pd.DataFrame(datos)

    print("\n[ DATOS SUCIOS — muestra de columnas clave ]")
    print(df_sucio[["id", "tipo", "estado", "precioNum", "personas", "fecha"]].to_string(index=False))

    df_limpio = limpiar_reservas(df_sucio)

    print("\n[ DATOS LIMPIOS — muestra de columnas clave ]")
    print(df_limpio[["id", "tipo", "estado", "precioNum", "personas", "fecha"]].to_string(index=False))

    resumen_limpieza(df_sucio, df_limpio)

    print("\n[ DESCRIPCION ]")
    describir_reservas(df_limpio)


def ejecutar_usuarios():
    encabezado("MODULO 3 — USUARIOS")

    datos = generar_simulacion(N)
    df_sucio = pd.DataFrame(datos)

    print("\n[ DATOS SUCIOS — muestra de columnas clave ]")
    print(df_sucio[["id", "nombre", "email", "perfil", "clave"]].to_string(index=False))

    df_limpio = limpiar_usuarios(df_sucio)

    print("\n[ DATOS LIMPIOS — muestra de columnas clave ]")
    print(df_limpio[["id", "nombre", "email", "perfil", "clave"]].to_string(index=False))

    resumen_limpieza(df_sucio, df_limpio)

    print("\n[ DESCRIPCION ]")
    describir_usuarios(df_limpio)


def ejecutar_sesiones():
    encabezado("MODULO 4 — SESIONES")

    datos = []
    for _ in range(N):
        datos.extend(generar_sesion(1))
    df_sucio = pd.DataFrame(datos)

    print("\n[ DATOS SUCIOS — muestra de columnas clave ]")
    print(df_sucio[["usuario_id", "nombre_usuario", "email", "perfil", "fecha_inicio"]].to_string(index=False))

    df_limpio = limpiar_sesiones(df_sucio)

    print("\n[ DATOS LIMPIOS — muestra de columnas clave ]")
    print(df_limpio[["usuario_id", "nombre_usuario", "email", "perfil", "fecha_inicio"]].to_string(index=False))

    resumen_limpieza(df_sucio, df_limpio)

    print("\n[ DESCRIPCION ]")
    describir_sesiones(df_limpio)


if __name__ == "__main__":
    print(f"\n{'*' * 65}")
    print("  ANTIOQAPP — PIPELINE DE DATOS")
    print(f"{'*' * 65}")

    ejecutar_rutas()
    ejecutar_reservas()
    ejecutar_usuarios()
    ejecutar_sesiones()

    print(f"\n{'*' * 65}")
    print("  PIPELINE COMPLETADO")
    print(f"{'*' * 65}\n")
