# Generated by Django 5.1.4 on 2025-01-06 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='acc',
            field=models.IntegerField(max_length=50),
        ),
    ]
