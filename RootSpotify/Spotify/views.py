from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.filters import SearchFilter

from .models import Music, Artist, Genres, Albums, Playlist
from Spotify.serializers import UserSerializer, MusicSerializer, ArtistSerializer, GenreSerializer, AlbumsSerializer, PlaylistSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class MusicViewset(viewsets.ModelViewSet):
    # queryset = Music.objects.all()
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

class ArtistViewset(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class GenresViewset(viewsets.ModelViewSet):
    queryset = Genres.objects.all()
    serializer_class = GenreSerializer

class AlbumsViewset(viewsets.ModelViewSet):
    queryset = Albums.objects.all()
    serializer_class = AlbumsSerializer

class PlaylistViewset(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer


# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer

# class ApiViewSet(viewsets.ModelViewSet):
#     queryset = Group.objects.all()
#     serializer_class = ApiSerializer