from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import json


class ChatConsumer(WebsocketConsumer):

#ws://
    def connect(self):
        self.room_name="Chat.Website.Room"
        self.group_name="Chat.Website.group"
        async_to_sync(self.channel_layer.group_add)(self.room_name,self.group_name)

        self.accept()
        self.send(text_data=json.dumps({'status':'Connected'}))
    
    def receive(self,text_data):
        print(text_data)
        self.send(text_data=json.dumps({'status':'we got your data'}))
        pass
    def disconnect(self, close_code):
        # Leave room group on disconnect
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )