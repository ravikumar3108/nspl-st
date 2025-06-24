# Write a function that takes a list of tuples and returns the sum of the second elements.
data = [(1, 10), (2, 20), (3, 30)]
def sum_second_elements(data):
    total = 0
    for t in data:
        total += t[1]
    return total

x = sum_second_elements(data)
print(x)
