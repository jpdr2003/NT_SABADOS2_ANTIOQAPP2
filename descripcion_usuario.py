import pandas as pd

def escribir_datos(data_frame_limpio):
    print("*** DESCRIPCION DEL DATASET ***")
    print(f"numero de filas del dataset: {data_frame_limpio.shape[0]}")
    print(f"numero de columnas del dataset: {data_frame_limpio.shape[1]}")
    print(f"lista de columnas disponibles: {list(data_frame_limpio.columns)}")
    print(f"tipos de datos de cada atributo:\n{data_frame_limpio.dtypes}")

    # Estadisticas (no hay campos numericos puros en USUARIO,
    # pero podemos analizar longitud de clave como métrica útil)
    print("\n*** ESTADISTICAS - LONGITUD DE CLAVE ***")
    data_frame_limpio["longitud_clave"] = data_frame_limpio["clave"].astype("string").str.len()
    print(f"{data_frame_limpio[['longitud_clave']].describe()}")

    # Informacion de conteos valiosos
    print("\n*** CONTEOS ***")
    print("Distribucion por perfil:")
    print(f"{data_frame_limpio['perfil'].value_counts()}")

    print("\nDistribucion por dominio de email:")
    data_frame_limpio["dominio_email"] = data_frame_limpio["email"].astype("string").str.split("@").str[1]
    print(f"{data_frame_limpio['dominio_email'].value_counts()}")

    # Describiendo las fechas
    print("\n*** DESCRIBIENDO LAS FECHAS ***")
    print(f"Fecha de registro mas antigua: {data_frame_limpio['creadoEn'].min()}")
    print(f"Fecha de registro mas reciente: {data_frame_limpio['creadoEn'].max()}")
    print(f"Rango de dias entre registros: {(data_frame_limpio['creadoEn'].max() - data_frame_limpio['creadoEn'].min()).days} dias")