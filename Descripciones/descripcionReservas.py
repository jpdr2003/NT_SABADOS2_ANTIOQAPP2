import pandas as pd

def describir_datos(data_frame_limpio):
    print("*** DESCRIPCION DEL DATASET ***")
    print(f"Numero de filas: {data_frame_limpio.shape[0]}")
    print(f"Numero de columnas: {data_frame_limpio.shape[1]}")
    print(f"Lista de columnas disponibles: {list(data_frame_limpio.columns)}")
    print(f"Tipos de datos: {data_frame_limpio.dtypes}")

    # Estadisticas (SOLO APLICA PARA DATOS NUMERICOS)
    print("*** ESTADISTICAS ***")
    print(f"{data_frame_limpio[["precioNum", "personas"]].describe()}")

    # Informacion de conteos valiosos
    print("*** CONTEOS ***")
    print(f"{data_frame_limpio["tipo"].value_counts()}")
    print(f"{data_frame_limpio["estado"].value_counts()}")
    print(f"{data_frame_limpio["lugar"].value_counts()}")

    # Describiendo las fechas
    print("*** DESCRIPCION DE FECHAS ***")
    print(f"{data_frame_limpio["fecha"].min()}")
    print(f"{data_frame_limpio["fecha"].max()}")