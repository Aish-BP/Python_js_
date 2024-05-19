def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)


try:
    user_input = int(input("Enter a integer: "))
    
    if user_input < 0:
        print("Please enter a non-negative integer.")
    else:
        result = factorial(user_input)
        print(f"The factorial of {user_input} is {result}.")
except ValueError:
    print("Invalid input! Please enter a valid non-negative integer.")