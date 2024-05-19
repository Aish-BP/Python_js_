def unique_values(arr):
    return list(set(arr))
user_input = input("Enter a array: ")

input_list = list(map(int, user_input.split()))

unique_list = unique_values(input_list)

print("Unique values:", unique_list)
