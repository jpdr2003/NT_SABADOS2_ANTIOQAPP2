import pandas as pd

from notebook.consumo import consumir_api
from notebook.transformacion_Reservas import transformar_datos
from notebook.limpiezaReservas import limpiar_datos


datos_tabla_reservas = consumir_api()

datos_tabla_reservas = pd.DataFrame(datos_tabla_reservas)

limpiar_datos(datos_tabla_reservas)

agrupacion_resumen = transformar_datos(datos_tabla_reservas)
print(agrupacion_resumen)

