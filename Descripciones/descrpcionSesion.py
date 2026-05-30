import pandas as pd

def describir_sesiones(data_frame_limpio):
    print("*** DESCRIPCIÓN DEL DATASET DE SESIONES ***")
    print(f"Número de filas: {data_frame_limpio.shape[0]}")
    print(f"Número de columnas: {data_frame_limpio.shape[1]}")
    print(f"Columnas disponibles: {list(data_frame_limpio.columns)}")
    print(f"Tipos de datos:\n{data_frame_limpio.dtypes}")

    #estadisticas numericas
    
    print("\n*** ESTADÍSTICAS ***")

    # Solo si existe la columna "tiempo"
    if "tiempo" in data_frame_limpio.columns:
        print(data_frame_limpio[["tiempo"]].describe())

    #conteos
    
    print("\n*** CONTEOS ***")

    if "usuario" in data_frame_limpio.columns:
        print("\nUsuarios más frecuentes:")
        print(data_frame_limpio["usuario"].value_counts())

    if "estado" in data_frame_limpio.columns:
        print("\nEstado de sesiones:")
        print(data_frame_limpio["estado"].value_counts())

    if "accion" in data_frame_limpio.columns:
        print("\nAcciones registradas:")
        print(data_frame_limpio["accion"].value_counts())

    #fechas
    
    print("\n*** DESCRIPCIÓN DE FECHAS ***")

    if "fecha" in data_frame_limpio.columns:
        print(f"Fecha más antigua: {data_frame_limpio['fecha'].min()}")
        print(f"Fecha más reciente: {data_frame_limpio['fecha'].max()}")