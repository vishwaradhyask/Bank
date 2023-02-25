import json
from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from members.serializers import UserSerilaizer, UserDetailsSerializer, SavingAccountSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from .models import UsersDetails, SavingAccount


class RegisterUser(APIView):
    def post(self, request):
        data = json.loads(request.body)
        print('data', data)
        ser = UserDetailsSerializer(data=data)
        if not ser.is_valid():
            print("error", ser.error_messages, ser.errors)
            return Response({'status': 403, 'errors': ser.errors, 'message': 'something went wrong'}, status=500)
        ser.save()
        serializer = UserSerilaizer(data=data)
        if not serializer.is_valid():
            print(serializer.error_messages, serializer.errors)
            return Response({'status': 403, 'errors': serializer.errors, 'message': 'something went wrong'})
        serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        token_obi, _ = Token.objects.get_or_create(user=user)
        return Response({'status': 200, 'message': 'success', 'token': str(token_obi)})


def members(request):
    return render(request, 'index.html')

def checkUserPresent(user):
    try:
        UsersDetails.objects.get(username=user)
    except Exception as E:
        return Response({'status': 403, 'message': 'user is not registration:{}'.format(E)}, status=500)


class SavingAccountView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        try:
            user = request.user.username
            checkUserPresent(user)
            data = json.loads(request.body)
            ser = SavingAccountSerializer(data=data)
            if not ser.is_valid():
                print("error", ser.error_messages, ser.errors)
                return Response({'status': 403, 'errors':ser.errors, 'message': 'something went wrong'})
            ser.save()
            return Response({'status': 200, 'message': 'success'}, status=200)
        except Exception as E:
            return Response({'status': 500, 'message': 'something went wrong:{}'.format(E)}, status=500)

class Checksavingaccountuser(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request):
        try:
            user = request.user.username
            data = SavingAccount.objects.filter(username=user).values()
            print("len", len(data))
            if(len(data)>0):
                l = []
                for i in data:
                    l.append(i)
                return Response({'status': 200, 'message': 'success', "body":l}, status=200)   
            else:        
                return Response({'status': 403, 'message': 'saving account not exit for this user please ceate one'}, status=200)
        except Exception as E:
            return Response({'status': 500, 'message': 'something went wrong:{}'.format(E)}, status=500)    