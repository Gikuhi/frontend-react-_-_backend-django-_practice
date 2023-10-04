from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect
from app.models import Customer
from app.models import Order
from app.serializer import CustomerSerializer
from app.serializer import OrderSerializer


# Create your views here.
def home(request):
    return render(request, 'test.html')


def about(request):
    return render(request, 'about.html')


def customer(request):
    data = Customer.objects.all()
    serializer = CustomerSerializer(data, many=True)
    return JsonResponse({'customers': serializer.data})


def order(request):
    data = Order.objects.all()
    serializer = OrderSerializer(data, many=True)
    return JsonResponse({'orders': serializer.data})


def details(request, id):
    try:
        data = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        # return HttpResponse("Record Not Found")
        return redirect("/")

    serializer = CustomerSerializer(data)
    return JsonResponse({'customer': serializer.data})

    # invoke serializer and return to client
