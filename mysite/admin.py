from django.contrib import admin
from .models import MainContent, Comment

@admin.register(MainContent)
class MainContentAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'content', 'pub_date']
    list_display_links = ['id', 'title']
    search_fields = ['title']

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['content_list', 'content', 'author', 'create_date', 'modify_date']
    search_fields = ['author']