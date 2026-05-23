def transformar_datos(data_frame_limpio):

    # Transformación 1 (usuarios por perfil)
    filtro1 = data_frame_limpio.query("perfil.notnull()", engine="python")
    agrupacion1 = filtro1.groupby("perfil")["usuario_id"] \
        .count().reset_index(name="conteo_usuarios")

    # Transformación 2 (sesiones por usuario)
    filtro2 = data_frame_limpio.query("usuario_id >= 0")
    agrupacion2 = filtro2.groupby("usuario_id")["nombre_usuario"] \
        .count().reset_index(name="cantidad_sesiones")

    # Transformación 3 (correos por dominio)
    filtro3 = data_frame_limpio.query("email.notnull()", engine="python")
    agrupacion3 = filtro3.groupby("email")["usuario_id"] \
        .count().reset_index(name="conteo_correos")

    # Transformación 4 (promedio de sesiones por perfil)
    filtro4 = data_frame_limpio.query("perfil.notnull()", engine="python")
    agrupacion4 = filtro4.groupby("perfil")["usuario_id"] \
        .mean().reset_index(name="promedio_usuario_id")

    # Transformación 5 (sesiones por fecha)
    filtro5 = data_frame_limpio.query("fecha_inicio.notnull()", engine="python")
    agrupacion5 = filtro5.groupby("fecha_inicio")["usuario_id"] \
        .count().reset_index(name="conteo_sesiones")

    agrupacion_resumen = {
        "agrupacion1": agrupacion1,
        "agrupacion2": agrupacion2,
        "agrupacion3": agrupacion3,
        "agrupacion4": agrupacion4,
        "agrupacion5": agrupacion5
    }

    return agrupacion_resumen