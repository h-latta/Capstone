# Generated by Django 4.0.3 on 2022-04-13 17:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='dog',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.dog'),
        ),
        migrations.AlterField(
            model_name='event',
            name='vet',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.vet'),
        ),
    ]
