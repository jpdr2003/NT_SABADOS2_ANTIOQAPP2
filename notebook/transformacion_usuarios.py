def transformar_datos(data_frame_limpio):

    # Transformación 1 (usuarios creados por fecha)
    filtro1 = data_frame_limpio.query("perfil != ''")
    agrupacion1 = filtro1.groupby("creadoEn")["id"].count().reset_index(name="conteo")

    # Transformación 2 (cantidad de usuarios por perfil)
    filtro2 = data_frame_limpio.query("perfil != ''")
    agrupacion2 = filtro2.groupby("perfil")["id"].count().reset_index(name="conteo")

    # Transformación 3 (usuarios con correo gmail por perfil)
    filtro3 = data_frame_limpio.query("email.str.contains('gmail.com')", engine="python")
    agrupacion3 = filtro3.groupby("perfil")["id"].count().reset_index(name="conteo")

    # Transformación 4 (promedio de longitud de contraseña por perfil)
    filtro4 = data_frame_limpio.query("clave != ''").copy()
    filtro4["longitud_clave"] = filtro4["clave"].str.len()
    agrupacion4 = filtro4.groupby("perfil")["longitud_clave"].mean().reset_index(name="promedio_longitud")

    # Transformación 5 (cantidad de cuentas por dominio de correo)
    filtro5 = data_frame_limpio.copy()
    filtro5["dominio"] = filtro5["email"].str.split("@").str[1]
    agrupacion5 = filtro5.groupby("dominio")["id"].count().reset_index(name="conteo")

    agrupacion_resumen = {
        "agrupacion1": agrupacion1,
        "agrupacion2": agrupacion2,
        "agrupacion3": agrupacion3,
        "agrupacion4": agrupacion4,
        "agrupacion5": agrupacion5
    }

    return agrupacion_resumen