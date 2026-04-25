import random
from datetime import datetime, timedelta

def generar_simulacion(numeroSimulaciones):

    nombres = ["Carlos", "María", "Juan", "Lucía", "Andrés", "Sofía", "Pedro", "Valentina"]
    dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"]
    perfiles = ["turista", "emprendedor"]
    fechaInicio = datetime(2026, 1, 2)

    simulaciones = []
    for i in range(numeroSimulaciones):

        nombre = random.choice(nombres)
        simulacion = {
            "id": str(random.randint(1000, 9999)),
            "nombre": nombre,
            "email": f"{nombre.lower()}{random.randint(1, 99)}@{random.choice(dominios)}",
            "clave": f"Clave{random.randint(1000, 9999)}!",
            "perfil": random.choice(perfiles),
            "creadoEn": fechaInicio + timedelta(days=random.randint(0, 60))
        }

        # Inyectando errores controlados
        probabilidadError = random.random()
        if probabilidadError < 0.2:
            simulacion["id"] = None
        elif probabilidadError < 0.4:
            simulacion["email"] = random.choice(["correo-invalido", "sinArroba.com", None])
        elif probabilidadError < 0.5:
            simulacion["clave"] = random.choice(["", "1234", None])
        elif probabilidadError < 0.7:
            simulacion["perfil"] = random.choice(["admin", "superusuario", "invitado"])
        elif probabilidadError < 0.8:
            simulacion["nombre"] = None
        elif probabilidadError < 0.9:
            simulacion["creadoEn"] = None

        simulaciones.append(simulacion)
    return simulaciones
