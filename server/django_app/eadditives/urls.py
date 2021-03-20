from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EadditivesViewSet

router = DefaultRouter()
router.register(r'eadditives', EadditivesViewSet, basename='eadditives')
urlpatterns = router.urls
