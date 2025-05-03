from django.db import models

class Publicacion(models.Model):
    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    imagen1 = models.ImageField(upload_to='publicaciones/', null=True, blank=True)
    imagen2 = models.ImageField(upload_to='publicaciones/', null=True, blank=True)
    imagen3 = models.ImageField(upload_to='publicaciones/', null=True, blank=True)

    OPCIONES_ENVIO = [
        ('domicilio', 'Domicilio'),
        ('retiro_local', 'Retiro en local'),
        ('ambos', 'Ambos'),
    ]
    envio = models.CharField(max_length=20, choices=OPCIONES_ENVIO, default='domicilio')

    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
