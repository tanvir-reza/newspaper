from django.db import models



class News(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to='news-images/')

    def __str__(self):
        return self.title

    

    

    
