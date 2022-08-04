# for dentro de outro, portanto possui Complexidade de Tempo O(n²)

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival < time_instant < departure
        for arrival, departure in zip(arrivals, departures)
    )


print(students_in_instant([1, 2, 3], [3, 2, 7], 4))
