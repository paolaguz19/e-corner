from rest_framework import serializers
from users.models import Users
from django.contrib.auth import authenticate

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['nombre', 'apellido', 'email', 'cedula', 'Fecha_nacimiento', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Users(
            email=validated_data['email'],
            cedula=validated_data['cedula'],
            nombre=validated_data.get('nombre'),
            apellido=validated_data.get('apellido'),
            Fecha_nacimiento=validated_data.get('Fecha_nacimiento'),
        )
        user.set_password(validated_data['password'])  # Importantísimo para que la password se guarde correctamente
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)
            if not user:
                raise serializers.ValidationError("Credenciales incorrectas.")
        else:
            raise serializers.ValidationError("Se deben ingresar ambos campos: email y contraseña.")
        
        data['user'] = user
        return data