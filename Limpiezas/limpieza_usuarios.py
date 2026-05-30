import pandas as pd

def limpiar_datos(data_frame_sucio):
    data_frame_limpio = data_frame_sucio.copy()

    # Procesando los textos del DF SUCIO

    # 1. Limpiando los textos para eliminar espacios y mayúsculas
    data_frame_limpio["nombre"] = data_frame_limpio["nombre"].astype("string").str.strip().str.title()
    data_frame_limpio["email"] = data_frame_limpio["email"].astype("string").str.strip().str.lower()
    data_frame_limpio["clave"] = data_frame_limpio["clave"].astype("string").str.strip()
    data_frame_limpio["perfil"] = data_frame_limpio["perfil"].astype("string").str.strip().str.lower()

    # 2. Limpiando textos para controlar valores inesperados en perfil
    valores_esperados_perfil = ["turista", "emprendedor"]
    data_frame_limpio["perfil"] = data_frame_limpio["perfil"].where(
        data_frame_limpio["perfil"].isin(valores_esperados_perfil),
        pd.NA
    )

    # 3. Validar formato básico de email (debe contener '@' y '.')
    email_valido = data_frame_limpio["email"].str.contains(r"^[\w\.-]+@[\w\.-]+\.\w+$", regex=True, na=False)
    data_frame_limpio["email"] = data_frame_limpio["email"].where(email_valido, pd.NA)

    # 4. Validar que la clave no sea débil o vacía
    claves_invalidas = ["", "1234", "None", "<​NA>"]
    data_frame_limpio["clave"] = data_frame_limpio["clave"].where(
        ~data_frame_limpio["clave"].isin(claves_invalidas) & data_frame_limpio["clave"].notna(),
        pd.NA
    )

    # Limpieza del ID (string no nulo)
    data_frame_limpio["id"] = data_frame_limpio["id"].astype("string").str.strip()
    data_frame_limpio = data_frame_limpio[data_frame_limpio["id"].notna()]

    # Limpieza de FECHAS

    # 1. Verificar que creadoEn sí es una fecha
    data_frame_limpio["creadoEn"] = pd.to_datetime(data_frame_limpio["creadoEn"], errors="coerce")

    # 2. Reemplazar fechas nulas por una fecha por defecto
    fecha_default = pd.to_datetime("2026-01-02")
    data_frame_limpio["creadoEn"] = data_frame_limpio["creadoEn"].fillna(fecha_default)

    # NOVEDADES de datos vacíos - eliminar filas con campos obligatorios nulos
    columnas_obligatorias = ["id", "nombre", "email", "clave", "perfil"]
    data_frame_limpio = data_frame_limpio.dropna(subset=columnas_obligatorias)

    return data_frame_limpio