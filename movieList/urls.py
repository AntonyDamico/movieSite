from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.IndexView.as_view()),
    path('list', views.MovieList.as_view()),
    path('list/<int:pk>', views.MovieDetail.as_view()),
    path('list/watched/<int:movie_id>', views.watch_movie)
]

urlpatterns = format_suffix_patterns(urlpatterns)