# Toda rutina de analisis debe describir el dataset
# 1. Es importante conocer cuantos registros tengo
# 2. Es importante conocer cuantos atributos tengo
# 3. Es Util tener acceso a una lista con los nombres de los atributos
# 4. Es Util hacer conteos de algunas columnas de interes
# 5. Es Util conocer las estadisticas descriptivas de los campos numericos
# Media-max-min-std-percentiles

import pandas as pd

def describir_datos(data_frame_limpio):
    print("*** DESCRIPCION DEL DATASET ***")
    print(f"Numero de filas: {data_frame_limpio.shape[0]}")
    print(f"Numero de columnas: {data_frame_limpio.shape[1]}")
    print(f"Lista de columnas disponibles: {list(data_frame_limpio.columns)}")
    print(f"Tipos de datos: {data_frame_limpio.dtypes}")

    # Estadisticas (SOLO APLICA PARA DATOS NUMERICOS)
    print("*** ESTADISTICAS ***")
    print(f"{data_frame_limpio[["precioNum", "calificacion", "resenas"]].describe()}")

    # Informacion de conteos valiosos
    print("*** CONTEOS ***")
    print(f"{data_frame_limpio["tipo"].value_counts()}")
    print(f"{data_frame_limpio["grupo"].value_counts()}")
    print(f"{data_frame_limpio["ubicacion"].value_counts()}")
    print(f"{data_frame_limpio["destacado"].value_counts()}")