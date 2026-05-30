import requests
import re
import json

def consumir_api():
    url="http://localhost:8082/rutas"
    respuesta=requests.get(url)
    respuesta.raise_for_status()
    texto = re.sub(r'\bNaN\b', 'null', respuesta.text)
    texto = re.sub(r'[+-]?Infinity', 'null', texto)
    texto = re.sub(r'\bundefined\b', 'null', texto)
    # Claves sin valor (bug del backend): "clave":} o "clave":, → "clave": null
    texto = re.sub(r'("[^"]+")\s*:\s*(?=[},])', r'\1: null', texto)
    datos = json.loads(texto)
    return datos
