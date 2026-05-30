import pandas as pd

def transformar_datos(data_frame_limpio):

    # Transformacion 1 - Rutas destacadas: conteo por tipo
    # Grafica recomendada: Grafico de barras verticales
    filtro1 = data_frame_limpio.query("destacado == True")
    agrupacion1 = filtro1.groupby("tipo")["id"].count().reset_index(name="conteo")

    # Transformacion 2 - Rutas bien calificadas: ingreso total por ubicacion
    # Grafica recomendada: Grafico de barras horizontales
    filtro2 = data_frame_limpio.query("calificacion >= 4.0")
    agrupacion2 = filtro2.groupby("ubicacion")["precioNum"].sum().reset_index(name="ingreso_total")

    # Transformacion 3 - Rutas de grupo familiar: promedio de calificacion por tipo
    # Grafica recomendada: Grafico de barras verticales
    filtro3 = data_frame_limpio.query("grupo == 'familiar'")
    agrupacion3 = filtro3.groupby("tipo")["calificacion"].mean().reset_index(name="calificacion_promedio")

    # Transformacion 4 - Rutas economicas: conteo por ubicacion
    # Grafica recomendada: Grafico de torta (pie chart)
    filtro4 = data_frame_limpio.query("precioNum <= 50000")
    agrupacion4 = filtro4.groupby("ubicacion")["id"].count().reset_index(name="conteo")

    # Transformacion 5 - Todas las rutas: promedio de resenas por grupo
    # Grafica recomendada: Grafico de lineas
    filtro5 = data_frame_limpio.query("resenas > 0")
    agrupacion5 = filtro5.groupby("grupo")["resenas"].mean().reset_index(name="promedio_resenas")

    agrupacion_resumen = {
        "agrupacion1": agrupacion1,
        "agrupacion2": agrupacion2,
        "agrupacion3": agrupacion3,
        "agrupacion4": agrupacion4,
        "agrupacion5": agrupacion5
    }

    return agrupacion_resumen