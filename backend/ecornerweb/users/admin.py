from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import Users

class CustomUserAdmin(UserAdmin):
    model = Users
    list_display = ('email', 'nombre', 'apellido', 'cedula', 'is_staff', 'is_superuser')
    search_fields = ('email', 'nombre', 'apellido', 'cedula')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Información Personal', {'fields': ('nombre', 'apellido', 'cedula', 'Fecha_nacimiento')}),
        ('Permisos', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'cedula', 'password1', 'password2', 'is_staff', 'is_superuser')}
        ),
    )

admin.site.register(Users, CustomUserAdmin)
