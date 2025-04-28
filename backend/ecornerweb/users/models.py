from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UsersManager(BaseUserManager):
    def create_user(self, email, cedula, password=None, **extra_fields):
        if not email:
            raise ValueError("El email es obligatorio")
        if not cedula:
            raise ValueError("La cédula es obligatoria")
        
        email = self.normalize_email(email)
        user = self.model(email=email, cedula=cedula, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, cedula, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("El superusuario debe tener is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("El superusuario debe tener is_superuser=True.")

        return self.create_user(email, cedula, password, **extra_fields)

class Users(AbstractBaseUser, PermissionsMixin):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    cedula = models.CharField(max_length=10, unique=True)
    Fecha_nacimiento = models.DateField()

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UsersManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['cedula', 'nombre', 'apellido', 'Fecha_nacimiento']

    def __str__(self):
        return self.email
