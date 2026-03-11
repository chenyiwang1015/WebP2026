from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class MyHelloView(APIView):
    def get(self, request):
        name = request.query_params.get('name')
        if name is None or name == "":
            return Response({"res": "parameter: name is None"}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"res": f"Hello {name}"}, status=status.HTTP_200_OK)