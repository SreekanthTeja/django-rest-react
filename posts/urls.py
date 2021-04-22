from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import *

urlpatterns = [
    path('all',PostListView.as_view()),
    path('create',PostCreateView.as_view()),
    path('rud/<int:pk>',RUDPostView.as_view()),
    path('count',PostCountView.as_view()),
]