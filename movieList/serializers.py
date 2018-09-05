from rest_framework import serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('Imdb_id', 'Title', 'Poster', 'Year', 'Watched')