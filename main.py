import random

letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
in_letters = int(input("How many letters would you like in your password?\n"))
in_symbols = int(input("How many symbols would you like in your password?\n"))
in_numbers = int(input("How many numbers would you like in your password?\n"))

#empty list to each character & for loop to append random characters to the password list
password = []
for i in range(in_letters):
    password.append(random.choice(letters))

for i in range(in_symbols):
    password.append(random.choice(numbers))

for i in range(in_numbers):
    password.append(random.choice(symbols))

#shuffling the characters in password & joining the characters in password
random.shuffle(password)
p = ''.join(password)

print(f"\n Your generated password is {p}")
