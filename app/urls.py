from django.urls import path
from app import views
app_name = "app"

urlpatterns = [
    path('/', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('api/customers/', views.customer, name='Customers'),
    path('api/orders/', views.order, name='Orders'),
    path('api/customers/<int:id>', views.details, name='details')


]
