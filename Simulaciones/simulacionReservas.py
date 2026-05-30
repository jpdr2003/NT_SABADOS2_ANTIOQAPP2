import random
import uuid

from datetime import datetime, timedelta

def generar_simulacion_reservas(numeroSimulaciones):

    tipos = ["ruta", "evento"]
    titulos = ["Ruta Cafetera", "Festival de Flores", "Sendero El Poblado"]
    proveedores = ["Turismo Antioquia", "Eventos Medellín", "Guias Locales"]
    estados = ["confirmado", "pendiente", "completado", "cancelado"]
    precios = ["$50,000", "$120,000", "$200,000"]
    preciosNum = [50000, 120000, 200000]
    horas = ["08:00", "10:30", "14:00", "16:00"]
    lugares = ["Medellín", "Guatapé", "Santa Fe de Antioquia"]
    fechaInicio = datetime(2026, 1, 2)

    simulaciones = []
    for _ in range(numeroSimulaciones):

        precioIndex = random.randint(0, len(precios) - 1)

        simulacion = {
            "id": str(uuid.uuid4()),
            "usuarioId": str(uuid.uuid4()),
            "itemId": str(uuid.uuid4()),
            "tipo": random.choice(tipos),
            "titulo": random.choice(titulos),
            "proveedor": random.choice(proveedores),
            "precio": precios[precioIndex],
            "precioNum": preciosNum[precioIndex],
            "estado": random.choice(estados),
            "fecha": (fechaInicio + timedelta(days=random.randint(0, 60))).strftime("%Y-%m-%d"),
            "hora": random.choice(horas),
            "personas": random.randint(1, 10),
            "lugar": random.choice(lugares),
            "codigoConfirmacion": "CONF-" + str(random.randint(1000, 9999)),
            "creadoEn": datetime.now().isoformat()
        }

        # Inyectando errores controlados
        probabilidadError = random.random()
        if probabilidadError < 0.15:
            simulacion["id"] = None
        elif probabilidadError < 0.30:
            simulacion["tipo"] = random.choice(["hotel", "restaurante"])
        elif probabilidadError < 0.45:
            simulacion["precioNum"] = random.choice([0, -5000, None])
        elif probabilidadError < 0.60:
            simulacion["estado"] = random.choice(["archivado", "borrador"])
        elif probabilidadError < 0.75:
            simulacion["usuarioId"] = "  " + simulacion["usuarioId"].upper() + "  "
        elif probabilidadError < 0.85:
            simulacion["fecha"] = None
        elif probabilidadError < 0.95:
            simulacion["personas"] = random.choice([0, -1, None])

        simulaciones.append(simulacion)
    return simulaciones

# Generar y mostrar datos simulados
datos_simulados = generar_simulacion_reservas(5)
for d in datos_simulados:
    print(d)    