from django.db import models
from rest_framework.exceptions import ValidationError

def discount(price: int, discountPercentage: int):
  return price * discountPercentage / 100

def validate_discount(discount):
  if discount > 100:
    raise ValidationError({'message': "Процент скидки не должен быть выше 100"})

class Promotion(models.Model):
  name = models.CharField(max_length=255)
  discount = models.PositiveIntegerField(blank=True, default=0, validators=[validate_discount])
  price = models.PositiveIntegerField()
  customed_price = models.PositiveIntegerField()
  image = models.ImageField(upload_to="images/promotions")


  class Meta:
    verbose_name = "Акция"
    verbose_name_plural = "Акции"

  def __str__(self):
    return self.name
