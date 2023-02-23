from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
# Create your views here.
from django.shortcuts import render


def members(request):
    # return HttpResponse('Hello world!')
    # template = loader.get_template("index.html")
    # return HttpResponse(template.render)
    return render(request, 'index.html')

