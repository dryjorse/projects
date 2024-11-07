from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from category.views import CategoryViewSet, SubCategoryViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'category', CategoryViewSet)
router.register(r'subcategory', SubCategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    path('api/v1/auth/', include('authentication.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)