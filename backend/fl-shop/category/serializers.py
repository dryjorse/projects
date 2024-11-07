from rest_framework.serializers import ModelSerializer
from category.models import Category, SubCategory

class CategorySerializer(ModelSerializer):
  class Meta:
    model = Category
    fields = "__all__"

class SubCategorySerializer(ModelSerializer):
  class Meta:
    model = SubCategory
    fields = "__all__"