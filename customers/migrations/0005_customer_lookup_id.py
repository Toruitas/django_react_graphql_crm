# Generated by Django 3.1.1 on 2020-09-10 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0004_customer_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='lookup_id',
            field=models.CharField(blank=True, max_length=24, unique=True),
        ),
    ]
