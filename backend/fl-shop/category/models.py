from django.db import models
from django.core.validators import FileExtensionValidator

class Category(models.Model):
  name = models.CharField(max_length=255)
  icon = models.FileField(upload_to="images/categories/icons", validators=[FileExtensionValidator(['svg'])])
  image = models.ImageField(upload_to="images/categories/images")

  class Meta:
    verbose_name = "Категория"
    verbose_name_plural = "Категории"

  def __str__(self):
    return self.name
  
class SubCategory(models.Model):
  name = models.CharField(max_length=255)
  category_id = models.ForeignKey(Category, on_delete=models.CASCADE)

  class Meta:
    verbose_name = "Подкатегория"
    verbose_name_plural = "Подкатегории"

  def __str__(self):
    return self.name