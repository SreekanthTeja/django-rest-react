# Generated by Django 3.1.5 on 2021-04-16 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20210416_0653'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='', verbose_name='Files'),
        ),
    ]
