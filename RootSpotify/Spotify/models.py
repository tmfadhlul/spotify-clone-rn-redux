from django.db import models


class Artist(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField()
    years_active = models.IntegerField()
    cover = models.TextField()    

class Genres(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField()

class Albums(models.Model):
    id = models.AutoField(primary_key=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=True, null=True)    
    cover = models.TextField()

class Music(models.Model):
    id = models.AutoField(primary_key=True)
    url = models.TextField()
    title = models.CharField(max_length=100, blank=True, null=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album =  models.ForeignKey(Albums, on_delete=models.CASCADE)
    genre =  models.ForeignKey(Genres, on_delete=models.CASCADE)

class Playlist(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    track = models.ManyToManyField(Music)



























    # Add the audio field to your model
# audio_file = AudioField(upload_to='your/upload/dir', blank=True,
#                         ext_whitelist=(".mp3", ".wav", ".ogg"),
#                         help_text=("Allowed type - .mp3, .wav, .ogg"))


# # Add this method to your model
# def audio_file_player(self):
#     """audio player tag for admin"""
#     if self.audio_file:
#         file_url = settings.MEDIA_URL + str(self.audio_file)
#         player_string = '<audio src="%s" controls>Your browser does not support the audio element.</audio>' % (file_url)
#         return player_string

# audio_file_player.allow_tags = True
# audio_file_player.short_description = ('Audio file player')
