# Generated by Django 2.1.1 on 2018-09-05 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movieList', '0002_auto_20180904_1240'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='Watched',
            field=models.BooleanField(default=False),
        ),
    ]