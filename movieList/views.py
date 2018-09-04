#pylint: disable=E1101
from django.shortcuts import render

from .models import Movie
from .serializers import MovieSerializer
from rest_framework import mixins, generics

def main_game(request):
    return render(request, 'movieList/index.html')

class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer