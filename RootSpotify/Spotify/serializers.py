from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Music, Artist, Genres, Albums, Playlist

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'name', 'description', 'years_active', 'cover')

class GenreSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Genres
        fields = ('id', 'name', 'description')        

class AlbumsSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()
    class Meta:
        model = Albums
        fields = ('id', 'artist', 'name', 'cover')

class MusicSerializer(serializers.ModelSerializer):    
    artist = ArtistSerializer()
    genre = GenreSerializer()
    album = AlbumsSerializer()
    class Meta:
        model = Music
        fields = ('id','title', 'url', 'artist', 'album', 'genre')

class PlaylistSerializer(serializers.ModelSerializer):
    # track = MusicSerializer()
    class Meta:
        model = Playlist
        fields = ('id', 'name', 'track')