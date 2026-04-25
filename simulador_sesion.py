import random
from datetime import datetime, timedelta

def generar_sesion(usuario_id):

    lista_perfiles = ['vips', 'editor', 'viewer']

    sesion=[]

    sesion={
        "usuario_id": random.randint(0,5000),
        "nombre_usurio": f"user{random.randint(1,100)}",
        "email": f"user{random.randint(1,100)}@example.com",
        "perfil": random.choice(lista_perfiles),
        "fecha_inicio": datetime.now().isoformat(),
    }
    sesion.append(sesion)
    return sesion