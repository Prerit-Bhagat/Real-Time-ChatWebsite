from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models import Member
from app.Serializer import MemberSerializer
from django.http import HttpResponse

def set_cookie(request):
    response = HttpResponse("Cookie Set!")
    response.set_cookie('username', 'DjangoMaster')
    return response

def get_cookie(request):
    username = request.COOKIES.get('username', 'Guest')
    return HttpResponse(f"Hello, {username}!")

def delete_cookie(request):
    response = HttpResponse("Cookie deleted successfully!")
    response.delete_cookie('username')
    return response

class MemberCreateView(APIView):
    def post(self, request):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MemberListView(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)
