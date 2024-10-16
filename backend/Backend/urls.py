# """
# URL configuration for Backend project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/5.0/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """
# from django.contrib import admin
# from django.urls import path, re_path
# from django.views.generic import TemplateView


# #  Django, re_path is a function used for routing URLs that 
# # match a regular expression pattern. It is a more flexible way 
# # of defining URL patterns compared to path, which uses simpler string patterns
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     # path("",TemplateView.as_view(template_name='base.html')),
#     # path('login/', TemplateView.as_view(template_name='base.html')),
#     re_path(r'^.*$', TemplateView.as_view(template_name='base.html')),
# ]
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from app.views import MemberCreateView ,  MemberListView # Adjust the import based on your app's name

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/members/', MemberCreateView.as_view(), name='member-create'),
    path('api/members/list/', MemberListView.as_view(), name='member-list'),
    re_path(r'^.*$', TemplateView.as_view(template_name='base.html')),
]
