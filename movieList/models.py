from django.db import models

class Movie(models.Model):
    imdb_id = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    poster = models.CharField(max_length=500)
    year = models.CharField(max_length=100)

    def __str__(self):
        return self.title
