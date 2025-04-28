
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from users import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.api.urls')),  # Rutas para la API de users
    path('', TemplateView.as_view(template_name="index.html"), name='home'),  # Ruta para la vista principal
    path('registrar/', views.register_view, name='registrar'),
    path('ingresar/', views.login_view, name='ingresar'),
]


urlpatterns += static(settings.STATIC_URL, document_root=settings.BASE_DIR / 'frontend/dist/assets')

