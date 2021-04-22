from rest_framework import serializers
from .models import *
from rest_framework.validators import UniqueTogetherValidator


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        validators = [
            UniqueTogetherValidator(
                queryset=Post.objects.all(),
                fields=['title', 'description','image']
            )
        ]

class CRUDPostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'