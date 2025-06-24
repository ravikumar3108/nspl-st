
tp = (1,2,4,5,78,)
# ordered , allow duplictes, unchangeable 
tp1 = (2,)
print(type(tp1))

# length
print(len(tp))  
# Accees
print(tp[3])

x = list(tp)
print(x)
x[3] = "Shubh"
x.append("Heloo")

tp = tuple(x)
print(tp)
print(type(tp))



 


