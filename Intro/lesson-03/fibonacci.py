# Description: Fibonacci series up to n-th term
userInput = int(input("How many terms? "))

# first two terms
first, second = 0, 1

count = 0

# check if the number of terms is valid
if userInput <= 0:
    print("Please enter a positive integer")
elif userInput == 1:
    print("Fibonacci sequence upto",userInput,":")
    print(first)
else:
    print("Fibonacci sequence:")
    while count < userInput:
        print(first)
        nextNumber = first + second
        # update values
        first = second
        second = nextNumber
        count += 1
