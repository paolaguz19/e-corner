
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users import views
from .views import LoginAPIView
from .views import LogoutAPIView
from users.api.views import UsersViewSet, LoginAPIView, LogoutAPIView

router = DefaultRouter()
router.register(r'users', views.UsersViewSet)  

urlpatterns = [
    path('', include(router.urls)),  
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
]