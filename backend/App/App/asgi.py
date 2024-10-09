import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path
from main.consumer import ChatConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'App.settings')

# Get the ASGI application
django_asgi_app = get_asgi_application()

# WebSocket URL patterns
ws_pattern = [
    path('chat/', ChatConsumer.as_asgi()),  # Use as_asgi() to instantiate the consumer
]

# Combine HTTP and WebSocket routing
application = ProtocolTypeRouter({
    "http": django_asgi_app,  # Handle HTTP requests
    "websocket": AuthMiddlewareStack(  # Use AuthMiddlewareStack if you need authentication
        URLRouter(ws_pattern)
    ),
})
