import random

# generate a random number between 1 and 100
secret_number = random.randint(1, 100)

# set the number of guesses allowed
num_guesses = 5

# loop through the guesses
for guess_num in range(1, num_guesses + 1):
    # ask the user for a guess
    guess = int(input(f"Guess #{guess_num}: "))

    # check if the guess is correct
    if guess == secret_number:
        print("Congratulations! You guessed the number!")
        break
    elif guess < secret_number:
        print("Too low!")
    else:
        print("Too high!")

# if the player didn't guess the number in time, reveal the secret number
if guess != secret_number:
    print(f"Sorry, you ran out of guesses. The secret number was {secret_number}.")
