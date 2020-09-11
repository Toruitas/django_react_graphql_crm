from django.db import models
from django.conf import settings
import shortuuid

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=128)
    business_name = models.CharField(blank=True, max_length=128)
    phone_number = models.CharField(max_length=24, blank=True) # 24 should allow for any extensions 
    email = models.EmailField(blank=True)
    website = models.URLField(null=True)
    description = models.TextField(blank=True)  # service description

    # have a lookup ID just for this customer. Defaults to a short UUID, but can be changed by user to anything unique
    lookup_id = models.CharField(max_length=24, unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)
    # last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.lookup_id:
            self.lookup_id = shortuuid.uuid()
        return super(Customer, self).save(*args, **kwargs)
        


class Meeting(models.Model):

    class MeetingTypes(models.TextChoices):
        IN_PERSON = "IP", "In-Person"
        PHONE_CALL = "PC", "Phone Call"
        EMAIL = "EM", "Email"
        CHAT_APP = "AC", "In-App Chat"

    subject = models.TextField()
    date = models.DateTimeField()
    contact_method = models.CharField(choices=MeetingTypes.choices, default=MeetingTypes.EMAIL, max_length=2)
    notes = models.TextField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="meetings")
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.subject