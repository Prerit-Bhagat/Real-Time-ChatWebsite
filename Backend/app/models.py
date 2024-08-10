from django.db import models

class Member(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255, default='default@example.com')
    
    def __str__(self):
        return f"post:{self.firstname}"
