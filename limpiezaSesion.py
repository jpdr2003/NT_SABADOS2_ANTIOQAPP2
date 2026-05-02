import pandas as pd

def limpiar_sesiones(data_frame_sucio):
    data_frame_limpio = data_frame_sucio.copy()

    #limpiar las columnas String del DF
    columnas_texto = ["nombre_usuario", "email", "perfil"]
    for columna in columnas_texto:
        data_frame_limpio[columna] = (
            data_frame_limpio[columna]
            .astype("string")
            .str.strip()
            .str.lower()
        )

    # definir valores de String esperados
    valores_vaidos_perfil= ["vips", "editor", "viewer"]
    data_frame_limpio["perfil"] = data_frame_limpio["perfil"].where(
        data_frame_limpio["perfil"].isin(valores_vaidos_perfil),
        pd.NA
    )

    #limpiar las columnas numericas del DF
    data_frame_limpio["usuario_id"] = pd.to_numeric(
        data_frame_limpio["usuario_id"], errors="coerce"
    )

    #limpiar campos numericos no validos 
    data_frame_limpio = data_frame_limpio[
        data_frame_limpio["usuario_id"] >= 0
    ]

    #organizar columnas de tipo fecha
    data_frame_limpio["fecha_inicio"] = pd.to_datetime(
        data_frame_limpio["fecha_inicio"], errors="coerce"
    )
    
    #remplazar fechas nulas por default
    fecha_default = pd.to_datetime("2000-01-01")
    data_frame_limpio["fecha_inicio"] = data_frame_limpio[      
        "fecha_inicio"                                    
    ].fillna(fecha_default)

    #eliminar registros con datos obligatorios vacios
    columnas_obligatorias = [
        "usuario_id",
        "nombre_usuario",
        "email",
        "perfil",
        "fecha_inicio"
    ]
    data_frame_limpio = data_frame_limpio.dropna(
        subset=columnas_obligatorias
    )

    #eliminar registros duplicados
    data_frame_limpio = data_frame_limpio.drop_duplicates()

    return data_frame_limpio