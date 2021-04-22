from django.db import models

# Create your models here.
class Post(models.Model):
    title=models.CharField(max_length=100,verbose_name="Title")
    description=models.TextField(verbose_name="Description",blank=True,null=True)
    image=models.FileField(verbose_name="Files",blank=True,null=True)
    created_at=models.DateField(auto_now_add=True,verbose_name="Created_On")

    def __str__(self):
        return self.title