from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Course_table

# 1. 回傳課程列表 [cite: 8]
@api_view(['GET'])
def courselist(request):
    courses = Course_table.objects.all().values()
    return JsonResponse(list(courses), safe=False)

# 2. 加入課程 [cite: 10]
@api_view(['GET', 'POST']) 
def addcourse(request):
    dept = request.query_params.get('dept')
    title = request.query_params.get('title')
    teacher = request.query_params.get('teacher')
    
    if dept and title and teacher:
        Course_table.objects.create(Department=dept, CourseTitle=title, Instructor=teacher)
        return JsonResponse({"res": "Course added successfully!"})
    return JsonResponse({"res": "Missing parameters"}, status=400)