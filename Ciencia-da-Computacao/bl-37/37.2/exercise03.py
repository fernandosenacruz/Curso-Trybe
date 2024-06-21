# um for, portanto possui Complexidade de Tempo O(n)

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def combinations(nums):
    answer = 0
    i = 0

    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                answer += 1

    return answer


print(combinations([1, 3, 1, 1, 2, 3]))
print(combinations([1, 1, 2, 3]))
