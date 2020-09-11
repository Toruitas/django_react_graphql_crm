# Generated by Django 3.1.1 on 2020-09-11 13:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('customers', '0005_customer_lookup_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.TextField()),
                ('date', models.DateTimeField()),
                ('contact_method', models.CharField(choices=[('IP', 'In-Person'), ('PC', 'Phone Call'), ('EM', 'Email'), ('AC', 'In-App Chat')], default='EM', max_length=2)),
                ('notes', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='meetings', to='customers.customer')),
            ],
        ),
    ]