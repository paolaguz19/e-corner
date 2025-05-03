
from rest_framework.response import Response

from rest_framework import viewsets
from users.models import Users
from users.api.serializers import UsersSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework import status
from rest_framework.views import APIView
from users.api.serializers import LoginSerializer
from django.contrib.auth import login
from django.contrib.auth import authenticate
from django.contrib.auth import logout

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            login(request, user)  # Django inicia la sesión
            return Response({'message': 'Inicio de sesión exitoso.'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutAPIView(APIView):
   def post(self, request):
        logout(request)
        return Response({'message': 'Sesión cerrada correctamente.'}, status=status.HTTP_200_OK)