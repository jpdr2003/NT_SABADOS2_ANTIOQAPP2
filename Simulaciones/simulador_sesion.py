import random
from datetime import datetime, timedelta

def generar_sesion(usuario_id):

    lista_perfiles = ['vips', 'editor', 'viewer']

    sesiones=[]

    sesion={
        "usuario_id": random.randint(0,5000),
        "nombre_usuario": f"user{random.randint(1,100)}",
        "email": f"user{random.randint(1,100)}@example.com",
        "perfil": random.choice(lista_perfiles),
        "fecha_inicio": datetime.now().isoformat(),
    }

    probabilidadError = random.random()
    if probabilidadError < 0.2:
        sesion["usuario_id"] = None
    elif probabilidadError < 0.4:
        sesion["email"] = random.choice(["correo-invalido", "sinArroba.com", None])
    elif probabilidadError < 0.5:
        sesion["perfil"] = random.choice(["admin", "superusuario", "invitado"])
    elif probabilidadError < 0.7:
        sesion["nombre_usuario"] = None
    elif probabilidadError < 0.8:
        sesion["fecha_inicio"] = None

    sesiones.append(sesion)
    return sesiones


datos_simulados = generar_sesion(5)
for d in datos_simulados:
    print(d)