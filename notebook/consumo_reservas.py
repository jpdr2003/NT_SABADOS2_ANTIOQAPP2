import requests

def consumir_api():
    url="http://localhost:8082/reservas"
    respuesta=requests.get(url)
    respuesta.raise_for_status()  
    datos=respuesta.json()  
    return datos