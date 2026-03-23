from django.db import models

class Course_table(models.Model):
    Department = models.CharField(max_length=50)   # 開課單位 [cite: 5]
    CourseTitle = models.CharField(max_length=100) # 課程名稱 [cite: 5]
    Instructor = models.CharField(max_length=50)   # 授課教師 [cite: 5]

    def __str__(self):
        return self.CourseTitle