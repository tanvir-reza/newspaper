from django.shortcuts import render
from news.models import *

def index(request):
    slider_news = NewsDB.objects.filter(highlight_status=1)[0:10]
    trends_topics = NewsCategory.objects.filter(tranding=1)
    homepage_status = NewsDB.objects.filter(homepage_status=1)[1]
    homepage_status1 = NewsDB.objects.filter(homepage_status=1)[0:2]
    homepage_status2 = NewsDB.objects.filter(homepage_status=1)[0:3]
    motamot = NewsDB.objects.filter(categoryid__title="মতামত")[0]
    # jatio = NewsDB.objects.filter(categoryid__title="জাতীয়")
    jatioSingle = NewsDB.objects.filter(categoryid__title="জাতীয়")[0]
    rajnitiSingle = NewsDB.objects.filter(categoryid__title="রাজনীতি")[0]
    
    

    print(motamot.Written_by.first_name)
    context = {
        'slider_news':slider_news,
        'trends_topics':trends_topics,
        'homepage_status':homepage_status,
        'homepage_status1':homepage_status1,
        'homepage_status2':homepage_status2,
        'motamot':motamot,
        'jatioSingle':jatioSingle,
        'rajnitiSingle':rajnitiSingle,
        
        }
    return render(request,'index.html',context)