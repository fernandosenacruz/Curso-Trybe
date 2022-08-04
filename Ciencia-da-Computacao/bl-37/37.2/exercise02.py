# um for, portanto possui Complexidade de Tempo O(n)

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def call_the_shots(numbers, n):
    result = []
    arr_index = 0

    for i in range(n):
        result.insert(arr_index, numbers[i])
        arr_index += 1
        result.insert(arr_index, numbers[i + n])
        arr_index += 1

    return result


print(call_the_shots([2, 6, 4, 5], 2))
print(call_the_shots([1, 4, 4, 7, 6, 6], 3))
