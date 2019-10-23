from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from mySite.models import Contact


def index(request):
    return render(request, "mySite/base.html")



def contact(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        c = Contact(email=email, subject=subject, message=message)
        c.save()

        return render(request, 'mySite/thank.html')
    else:
        return render(request, 'mySite/contact.html')


def portfolio(request):
    return render(request, "mySite/portfolio.html")


def cv(request):
    return render(request, "mySite/cv.html")
