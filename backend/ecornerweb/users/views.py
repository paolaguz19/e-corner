from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.models import Users
from users.api.serializers import UsersSerializer
from rest_framework import status
from django.http import HttpResponse


@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "Usuario creado con éxito!"}, status=201)
        return Response(serializer.errors, status=400)


def register_view(request):
    return HttpResponse("Vista de Registro")


def login_view(request):
    return HttpResponse("Vista de Ingreso")


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
