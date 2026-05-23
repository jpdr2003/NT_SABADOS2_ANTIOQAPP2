def transformar_datos(data_frame_limpio):

    # Transformacion 1 (rutas destacadas por tipo)
    filtro1 = data_frame_limpio.query("destacado == True")
    agrupacion1 = filtro1.groupby("tipo")["id"].count().reset_index(name="conteo")


    # Transformacion 2 (promedio de calificacion por ubicacion)
    filtro2 = data_frame_limpio.query("calificacion >= 4.0")
    agrupacion2 = filtro2.groupby("ubicacion")["calificacion"].mean().reset_index(name="promedio_calificacion")


    # Transformacion 3 (cantidad de reseñas por grupo)
    filtro3 = data_frame_limpio.query("resenas >= 100")
    agrupacion3 = filtro3.groupby("grupo")["resenas"].sum().reset_index(name="total_resenas")


    # Transformacion 4 (conteo de rutas costosas por precio)
    filtro4 = data_frame_limpio.query("precioNum >= 200000")
    agrupacion4 = filtro4.groupby("precio")["id"].count().reset_index(name="conteo")


    # Transformacion 5 (promedio de precio por tipo de ruta)
    filtro5 = data_frame_limpio.query("precioNum > 0")
    agrupacion5 = filtro5.groupby("tipo")["precioNum"].mean().reset_index(name="promedio_precio")


    agrupacion_resumen = {
        "agrupacion1": agrupacion1,
        "agrupacion2": agrupacion2,
        "agrupacion3": agrupacion3,
        "agrupacion4": agrupacion4,
        "agrupacion5": agrupacion5
    }

    return agrupacion_resumen
