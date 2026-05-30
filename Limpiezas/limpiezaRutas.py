import pandas as pd

def limpiar_datos_ruta(df_sucio):
    df_limpio = df_sucio.copy()

    # 1. Limpiar columnas de texto
    columnas_texto = ["titulo", "ubicacion", "descripcion", "tipo"]
    for columna in columnas_texto:
        df_limpio[columna] = df_limpio[columna].astype("string").str.strip().str.lower()

    # 1.1 Validar valores esperados en 'tipo'
    valores_validos_tipo = ["aventura", "cultural", "gastronomica", "ecologica"]
    df_limpio["tipo"] = df_limpio["tipo"].where(
        df_limpio["tipo"].isin(valores_validos_tipo),
        pd.NA
    )

    # 2. Limpiar columnas numéricas
    df_limpio["id"] = pd.to_numeric(df_limpio["id"], errors="coerce")
    df_limpio["precioNum"] = pd.to_numeric(df_limpio["precioNum"], errors="coerce")
    df_limpio["calificacion"] = pd.to_numeric(df_limpio["calificacion"], errors="coerce")
    df_limpio["resenas"] = pd.to_numeric(df_limpio["resenas"], errors="coerce")

    # 2.1 Filtrar valores válidos
    df_limpio = df_limpio[df_limpio["precioNum"] >= 0]
    df_limpio = df_limpio[df_limpio["id"] >= 0]
    df_limpio = df_limpio[df_limpio["calificacion"].between(0, 5)]

    # 3. Limpiar booleanos
    df_limpio["destacado"] = df_limpio["destacado"].astype("boolean")

    # 4. Eliminar registros con datos obligatorios vacíos
    columnas_obligatorias = ["id", "titulo", "ubicacion", "precioNum"]
    df_limpio = df_limpio.dropna(subset=columnas_obligatorias)

    # 5. Eliminar duplicados
    df_limpio = df_limpio.drop_duplicates()

    return df_limpio