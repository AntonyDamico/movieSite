from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.main_game),
    path('list', views.MovieList.as_view()),
    path('<int:pk>', views.MovieDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)