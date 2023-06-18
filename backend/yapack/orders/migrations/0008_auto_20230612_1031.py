# Generated by Django 2.2.16 on 2023-06-12 07:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_auto_20230609_1243'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='orderreceivedsku',
            options={'ordering': ['order'], 'verbose_name': 'SKU в заказе', 'verbose_name_plural': 'SKU в заказе'},
        ),
        migrations.RenameField(
            model_name='orderreceivedsku',
            old_name='order_key',
            new_name='order',
        ),
    ]