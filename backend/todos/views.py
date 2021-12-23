from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED
from rest_framework.viewsets import ModelViewSet

from todos.models import Todo
from todos.serializers import TodoSerializer


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    @action(detail=False, methods=["post"])
    def seed(self, *args, **kwargs):
        # delete old data
        Todo.objects.all().delete()

        # create new data
        todos = [
            Todo.objects.create(title="Walk the dog", done=True),
            Todo.objects.create(title="Buy groceries", done=False),
        ]

        serializer = TodoSerializer(todos, many=True)

        return Response(serializer.data, status=HTTP_201_CREATED)
