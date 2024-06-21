import math


def higher_number(a, b):
    """Recebe dois números e retorne o maior deles."""
    if a > b:
        return a
    else:
        return b


def arithmetic_mean(list):
    """Retorna média aritmética dos valores contidos em uma lista."""
    sum = 0

    for num in list:
        sum += num

    return sum / len(list)


def square(n):
    """Imprime um quadrado feito de asteriscos de lado de tamanho n."""
    for row in range(n):
        print(n * "*")


def biggest_word(list):
    """Retorna o nome com a maior quantidade de caracteres."""
    max_word = list[0]

    for word in list:
        if len(word) > len(max_word):
            max_word = word

    return max_word


def calc_paint(m):
    """Recebe uma metragem e retorna a quantidade de latas e o preço total."""
    price = 80
    liters = m / 3
    cans_paint = math.ceil(liters / 18)

    return cans_paint, liters * price


def triangle(a, b, c):
    """Recebe três lados de um triângulo e informe qual o tipo de triâgulo"""
    is_triangle = a + b > c and b + c > a and a + c > b

    if not is_triangle:
        return "não é tirângulo"
    elif a == b == c:
        return "equilátero"
    elif a == b or b == c or c == a:
        return "isósceles"
    else:
        return "escaleno"
