import random
from datetime import datetime, timedelta

def generar_simulacion_ruta(numeroSimulaciones):
    titulos = ["Ruta al Lago", "Tour Montaña", "City Tour", "Ruta Histórica"]
    ubicaciones = ["Medellín", "Bogotá", "Cartagena", "Cali"]
    tipos = ["cultural", "aventura", "gastronomía"]
    grupos = ["familiar", "pareja", "amigos"]
    precios = ["$350000", "$100000", "$250000"]
    preciosNum = [350000, 100000, 250000]
    fechaInicio = datetime(2026, 1, 2)

    simulaciones = []
    for _ in range(numeroSimulaciones):
        simulacion = {
            "id": str(random.randint(1, 200)),  # PK como string
            "titulo": random.choice(titulos),
            "duracion": f"{random.randint(1, 10)} horas",
            "grupo": random.choice(grupos),
            "calificacion": round(random.uniform(1.0, 5.0), 1),
            "resenas": random.randint(0, 500),
            "ubicacion": random.choice(ubicaciones),
            "precio": random.choice(precios),
            "precioNum": random.choice(preciosNum),
            "descripcion": "Descripción de la ruta turística",
            "tipo": random.choice(tipos),
            "destacado": random.choice([True, False]),
            "fecha": fechaInicio + timedelta(days=random.randint(0, 60))
        }

        # Inyectando errores controlados
        probabilidadError = random.random()
        if probabilidadError < 0.15:
            simulacion["id"] = None  # id faltante
        elif probabilidadError < 0.3:
            simulacion["precioNum"] = random.choice([0, -50000, None])  # precios inválidos
        elif probabilidadError < 0.45:
            simulacion["tipo"] = random.choice(["clase de python", "evento musical"])  # valores no esperados
        elif probabilidadError < 0.6:
            simulacion["titulo"] = " " + simulacion["titulo"].upper()  # espacios y mayúsculas
        elif probabilidadError < 0.75:
            simulacion["fecha"] = None  # fecha faltante
        elif probabilidadError < 0.9:
            simulacion["destacado"] = None  # booleano faltante

        simulaciones.append(simulacion)

    return simulaciones

# Ejemplo de uso
datos_simulados = generar_simulacion_ruta(5)
for d in datos_simulados:
    print(d)