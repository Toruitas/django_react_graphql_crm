# Generated by Django 3.1.1 on 2020-09-10 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0003_customer_website'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
