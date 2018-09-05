#pylint: disable=E1101
from django.shortcuts import render

from .models import Movie
from .serializers import MovieSerializer
from rest_framework import mixins, generics
from django.views import generic

def main_game(request):
    return render(request, 'movieList/index.html')

class IndexView(generic.ListView):
    template_name = 'movieList/index.html'
    context_object_name = 'movies'

    def get_queryset(self):
        return Movie.objects.all()

class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer