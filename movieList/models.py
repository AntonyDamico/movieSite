from django.db import models

class Movie(models.Model):
    Imdb_id = models.CharField(max_length=32, primary_key=True)
    Title = models.CharField(max_length=100)
    Poster = models.CharField(max_length=500)
    Year = models.CharField(max_length=100)
    Watched = models.BooleanField(default=False)

    def __str__(self):
        return self.Title
