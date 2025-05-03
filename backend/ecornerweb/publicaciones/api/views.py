
from rest_framework import viewsets
from publicaciones.models import Publicacion
from publicaciones.api.serializers import PublicacionSerializer

class PublicacionViewSet(viewsets.ModelViewSet):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
