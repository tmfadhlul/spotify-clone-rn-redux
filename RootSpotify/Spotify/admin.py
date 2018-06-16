from django.contrib import admin
from Spotify.models import Music, Artist, Genres

# # add 'audio_file_player' tag to your admin view
# list_display = (..., 'audio_file_player', ...)
# actions = ['custom_delete_selected']

# def custom_delete_selected(self, request, queryset):
#     #custom delete code
#     n = queryset.count()
#     for i in queryset:
#         if i.audio_file:
#             if os.path.exists(i.audio_file.path):
#                 os.remove(i.audio_file.path)
#         i.delete()
#     self.message_user(request, ("Successfully deleted %d audio files.") % n)
# custom_delete_selected.short_description = "Delete selected items"

# def get_actions(self, request):
#     actions = super(AudioFileAdmin, self).get_actions(request)
#     del actions['delete_selected']
#     return actions