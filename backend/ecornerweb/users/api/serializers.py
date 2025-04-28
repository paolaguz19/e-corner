from rest_framework import serializers
from users.models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['nombre', 'apellido', 'email', 'cedula', 'Fecha_nacimiento', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Users.objects.create_user(
            email=validated_data['email'],
            cedula=validated_data['cedula'],
            password=validated_data['password'],
            nombre=validated_data.get('nombre'),
            apellido=validated_data.get('apellido'),
            Fecha_nacimiento=validated_data.get('Fecha_nacimiento'),
        )
        return user