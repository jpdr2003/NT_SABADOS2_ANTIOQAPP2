import pandas as pd

# Implementar lógica de limpieza de datos
def limpiar_datos(data_frame_sucio):

    # 1 Limpiar columnas STRING del DF
    data_frame_limpio = data_frame_sucio.copy()
    columnas_texto = ["id", "usuarioId", "itemId", "tipo", "titulo",
                      "proveedor", "precio", "estado", "hora",
                      "lugar", "codigoConfirmacion"]

    for columna in columnas_texto:
        data_frame_limpio[columna] = data_frame_limpio[columna].astype("string").str.strip().str.lower()

    # 1.1 Definir valores String esperados
    valores_validos_tipo = ["ruta", "evento"]
    valores_validos_estado = ["confirmado", "pendiente", "completado", "cancelado"]

    data_frame_limpio["tipo"] = data_frame_limpio["tipo"].where(
        data_frame_limpio["tipo"].isin(valores_validos_tipo),
        pd.NA
    )

    data_frame_limpio["estado"] = data_frame_limpio["estado"].where(
        data_frame_limpio["estado"].isin(valores_validos_estado),
        pd.NA
    )

    # 2. Limpiar columnas numericas del DF
    data_frame_limpio["precioNum"] = pd.to_numeric(data_frame_limpio["precioNum"], errors="coerce")
    data_frame_limpio["personas"] = pd.to_numeric(data_frame_limpio["personas"], errors="coerce")

    # 2.1 Limpiando campos numericos que no tengan valores validos
    data_frame_limpio = data_frame_limpio[data_frame_limpio["precioNum"] > 0]
    data_frame_limpio = data_frame_limpio[data_frame_limpio["personas"] > 0]

    # 3 Organizar las columnas de tipo FECHA
    data_frame_limpio["fecha"] = pd.to_datetime(data_frame_limpio["fecha"], errors="coerce")

    # 3.1 Si la fecha no existe se remplaza por un valor por defecto
    fecha_default = pd.to_datetime("2026-01-01")
    data_frame_limpio["fecha"] = data_frame_limpio["fecha"].fillna(fecha_default)

    # 4 Eliminar registros que tengan datos obligatorios faltantes
    columnas_obligatorias = ["id", "usuarioId", "itemId", "tipo", "precioNum",
                             "estado", "fecha", "personas"]
    data_frame_limpio = data_frame_limpio.dropna(subset=columnas_obligatorias)

    # 5 Eliminar registros duplicados
    data_frame_limpio = data_frame_limpio.drop_duplicates()

    return data_frame_limpio