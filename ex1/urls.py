from django.urls import path
from .views import MyHelloView

urlpatterns = [
    path('myhello/', MyHelloView.as_view()),
]
