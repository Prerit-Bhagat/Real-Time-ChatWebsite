# Generated by Django 5.0.6 on 2024-08-10 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='email',
            field=models.CharField(default='default@example.com', max_length=255),
        ),
    ]
