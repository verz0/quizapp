from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuestionViewSet

# Create a router
router = DefaultRouter()

# Register the ItemViewSet with the router
router.register(r'questions', QuestionViewSet)

# Define your API URL patterns
urlpatterns = [
    # Include the default router's generated URL patterns
    path('api/', include(router.urls)),
]
