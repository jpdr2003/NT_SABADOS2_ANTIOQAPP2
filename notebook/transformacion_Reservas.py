import pandas as pd

def transformar_datos(data_frame_limpio):

    # Transformacion 1 - Conteo de reservas por tipo (ruta vs evento)
    # Grafica recomendada: Grafico de torta (pie chart)
    agrupacion1 = data_frame_limpio.groupby("tipo")["id"].count().reset_index(name="conteo")

    # Transformacion 2 - Ingreso total por lugar (suma de precioNum)
    # Grafica recomendada: Grafico de barras horizontales
    agrupacion2 = data_frame_limpio.groupby("lugar")["precioNum"].sum().reset_index(name="ingreso_total")

    # Transformacion 3 - Conteo de reservas por estado
    # Grafica recomendada: Grafico de barras verticales
    agrupacion3 = data_frame_limpio.groupby("estado")["id"].count().reset_index(name="conteo")

    # Transformacion 4 - Promedio de personas por tipo de reserva
    # Grafica recomendada: Grafico de barras verticales
    agrupacion4 = data_frame_limpio.groupby("tipo")["personas"].mean().reset_index(name="promedio_personas")

    # Transformacion 5 - Ingreso total por fecha (evolucion en el tiempo)
    # Grafica recomendada: Grafico de lineas
    agrupacion5 = data_frame_limpio.groupby("fecha")["precioNum"].sum().reset_index(name="ingreso_total")

    # Transformacion 6 - Promedio del precio por proveedor
    # Grafica recomendada: Grafico de barras horizontales
    agrupacion6 = data_frame_limpio.groupby("proveedor")["precioNum"].mean().reset_index(name="precio_promedio")

    agrupacion_resumen = {
        "agrupacion1": agrupacion1,
        "agrupacion2": agrupacion2,
        "agrupacion3": agrupacion3,
        "agrupacion4": agrupacion4,
        "agrupacion5": agrupacion5,
        "agrupacion6": agrupacion6
    }

    return agrupacion_resumen