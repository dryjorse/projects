from rest_framework.viewsets import ModelViewSet
from category.models import Category, SubCategory
from category.serializers import CategorySerializer, SubCategorySerializer

class CategoryViewSet(ModelViewSet):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer

class SubCategoryViewSet(ModelViewSet):
  queryset = SubCategory.objects.all()
  serializer_class = SubCategorySerializer