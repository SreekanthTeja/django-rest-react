from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class PostListView(generics.ListAPIView):
    # permission_classes = (IsAuthenticated, )
    queryset=Post.objects.all()
    serializer_class=PostSerializer

class PostCreateView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = CRUDPostSerializer

class RUDPostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = CRUDPostSerializer

class PostCountView(generics.RetrieveAPIView):
    serializer_class = CRUDPostSerializer
    def get(self, request):
        return Response({
            'count': Post.objects.all().count()
        })
    
