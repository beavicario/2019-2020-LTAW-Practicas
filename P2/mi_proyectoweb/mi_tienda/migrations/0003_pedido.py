# Generated by Django 2.2.12 on 2020-05-25 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0002_producto_clase'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('articulo', models.CharField(default='[]', max_length=150)),
                ('total', models.FloatField(default=0.0)),
            ],
        ),
    ]