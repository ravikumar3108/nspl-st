# class : - \
# # Struecture 
# # class Student:
# #     x = 10
# # #  create a object : allow access the all properties and the methods of our class. 
# # student1 = Student()
# # print(student1.x)
# class Student:
#     # constructor :- which is always call when our class is exceute. 
#     # self keywords : denotes the class name 
#     def __init__(self,name,age,bloodgp):
#         self.name = name
#         self.age = age
#         self.bloodgp = bloodgp
# #  create a object : allow access the all properties and the methods of our class. 
# student1 = Student("shubh",18,"A+")
# student1 = Student("shubh",18,"A+")
# student1 = Student("shubh",18,"A+")
# student1 = Student("shubh",18,"A+")
# student1 = Student("shubh",18,"A+")
# student1 = Student("shubh",18,"A+")
# student1 = Student("shubh",18,"A+")
# print(student1.name)


# parent class :- 
# child class ;- 

# class classRoom:
#     x = 10
    
# # inheritance 

# class Students(classRoom):
#     pass



# obj = Students()
# print(obj.x)




# class classRoom:
#     def __init__(self,section,name,totalStudents):
#         self.section =section,
#         self.name = name,
#         self.totalStudents = totalStudents


# # inheritance 

# class Students(classRoom):
#     pass



# obj = Students("A","10th",23)
# print(obj.name)


class classRoom:
    def __init__(self,section,name,totalStudents):
        self.section =section,
        self.name = name,
        self.totalStudents = totalStudents

    def getName(self):
        return self.name


# inheritance 

class Students(classRoom):
    def __init__(self, section, name, totalStudents,id,rollno):
        super().__init__(section, name, totalStudents)
        self.id = id,
        self.rollno = rollno

    def section(self):
        return self.id


obj = Students(section="A",name="10th",totalStudents=23,id=10,rollno=30)
print(obj.rollno)
