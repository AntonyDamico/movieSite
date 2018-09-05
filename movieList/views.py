#pylint: disable=E1101
from django.shortcuts import render, get_object_or_404

from .models import Movie
from .serializers import MovieSerializer
from rest_framework import mixins, generics, status
from django.views import generic
from django.http import HttpResponse, Http404
from rest_framework.response import Response

from rest_framework.views import APIView

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

# class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
#     lookup_field = 'Imdb_id'
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer

class MovieDetail(APIView):
    def get_movie(self, pk):
        return get_object_or_404(Movie.objects.all(), pk=pk)

    def get(self, request, pk, format=None):
        movie = self.get_movie(pk)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        movie = self.get_movie(pk)
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def watch_movie(reuqest, Imdb_id):
    selected_movie = get_object_or_404(Movie, pk=Imdb_id)
    selected_movie.Watched = not selected_movie.Watched
    selected_movie.save()
    return  HttpResponse('hello ', Imdb_id)