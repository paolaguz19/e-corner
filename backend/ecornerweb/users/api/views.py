
from rest_framework.response import Response

from rest_framework import viewsets
from users.models import Users
from users.api.serializers import UsersSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser



class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
  