# lines = ['Readme', 'How to write text files in Python']
# with open('seeders.txt', 'a') as f:
#     for line in lines:
#         f.write(line)
#         f.write('\n')

f = open("seeders.txt", "r")
print(type(f))
print(type(f.read()))