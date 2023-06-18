# Generated by Django 2.2.16 on 2023-06-08 15:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_packagerecommended'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orderreceived',
            options={'ordering': ['order_key'], 'verbose_name': 'Полученный заказ', 'verbose_name_plural': 'Полученные заказы'},
        ),
        migrations.AlterModelOptions(
            name='package',
            options={'ordering': ['packagetype'], 'verbose_name': 'Упаковка', 'verbose_name_plural': 'Виды упаковок'},
        ),
        migrations.AlterModelOptions(
            name='packagerecommended',
            options={'ordering': ['order', 'package'], 'verbose_name': 'Рекомендованная упаковка', 'verbose_name_plural': 'Рекомендованные упаковки'},
        ),
    ]