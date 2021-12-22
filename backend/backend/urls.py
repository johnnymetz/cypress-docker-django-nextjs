from django.urls import include, path
from rest_framework.routers import DefaultRouter

from todos.views import TodoViewSet

router = DefaultRouter()
router.register("todos", TodoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
