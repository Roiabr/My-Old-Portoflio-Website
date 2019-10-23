from django.db import models


class Student(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)

    def __str__(self):
        return self.firstName +" "+ self.lastName


class Contact(models.Model):
    email = models.EmailField()
    subject = models.CharField(max_length=196,blank=True,null=True,default= True)
    message = models.TextField()

    def __str__(self):
        return self.email