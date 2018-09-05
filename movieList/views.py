#pylint: disable=E1101
from django.shortcuts import render, get_object_or_404

from .models import Movie
from .serializers import MovieSerializer
from rest_framework import mixins, generics
from django.views import generic
from django.http import HttpResponse

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

def watch_movie(reuqest, movie_id):
    selected_movie = get_object_or_404(Movie, pk=movie_id)
    selected_movie.Watched = not selected_movie.Watched
    selected_movie.save()
    return  HttpResponse('hello ', movie_id)