from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import User
from django.utils.text import slugify
import datetime



STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

# class News(models.Model):
#     title = models.CharField(max_length=200)
#     pub_date = models.DateTimeField()
#     body = models.TextField()
#     image = models.ImageField(upload_to='news/')

#     def __str__(self):
#         return self.title

class NewsCategory(models.Model):
    title = models.CharField(max_length=200)  
    create_by = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    tranding = models.IntegerField(choices=STATUS, default = 0)
    status = models.IntegerField(choices=STATUS, default = 1)
    slug = models.CharField(max_length=200,unique=True, blank=True, null=True, editable=True)
    

    class Meta:
        verbose_name_plural = 'NewsCategorys'
        verbose_name = 'NewsCategory'


    def save(self,*args, **kwargs):
        if not self.slug:
            self.slug = self.title.replace(" ", "-").replace(",", "")
        return super(NewsCategory, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.title
    
class NewsDB(models.Model):
    sironam_status = models.IntegerField(choices=STATUS, default = 1)
    homepage_status = models.IntegerField(choices=STATUS, default = 1)
    highlight_status = models.IntegerField(choices=STATUS, default = 1)
    # title_en = models.CharField(max_length=500,blank=True, null=True,)
    title = models.CharField(max_length=500,  blank=True, null=True)
    detail = RichTextField(blank=True, null=True)
    # detail_en = RichTextField(blank=True, null=True)
    image = models.ImageField(blank=True, null=True, upload_to='news/',max_length=500)
    total_views=models.IntegerField(default=0)
    categoryid = models.ForeignKey(NewsCategory, on_delete=models.CASCADE, blank=True, null=True)  # Field name made lowercase.
    top_news = models.IntegerField(choices=STATUS, default = 0)
    Written_by = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # division = models.CharField(db_column='Division', max_length=50, blank=True, null=True)  # Field name made lowercase.
    # district = models.CharField(db_column='District', max_length=50, blank=True, null=True)  # Field name made lowercase.
    # upozila = models.CharField(db_column='Upozila', max_length=50, blank=True, null=True)  # Field name made lowercase.
    videolink = models.CharField(max_length=300)  # Field name made lowercase.
    status = models.IntegerField(choices=STATUS, default = 1)
    slug = models.CharField(max_length=200,unique=True, blank=True, null=True, editable=True)
    

    class Meta:
        ordering = ["-created_at"]
        verbose_name = 'News Table'
        verbose_name_plural = 'All News'

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = self.title.replace(" ", "-").replace(",", "")
        return super(NewsDB, self).save(*args, **kwargs)

    

    
