from django.contrib import admin
from . import models

# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'image')

admin.site.register(models.NewsDB, NewsAdmin)
admin.site.register(models.NewsCategory)
