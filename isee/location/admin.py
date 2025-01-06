from django.contrib import admin

from .models import Location


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ['acc','city','street','home','fract','create','update']
    list_filter = ['create','update','street']
    # prepopulated_fields = {'city':('acc',)}
    # raw_id_fields = ['acc']
    search_fields = ['acc']
    date_hierarchy = 'update'
# admin.site.register(Location)