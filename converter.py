dictionary = []
with open("en.txt") as file:
 for line in file:
    if " " in line:
        pass
    else:
        dictionary.append(line[:-1])
 
 
print ('\ntext file to dictionary=\n',dictionary)
