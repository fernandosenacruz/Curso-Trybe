def verify_time(values):
    max_time = 0
    curr_time = 0

    for value in values:
        if value == 1:
            curr_time += 1
        else:
            curr_time = 0
        if curr_time >= max_time:
            max_time = curr_time

    return max_time


print(verify_time([0, 1, 1, 1, 0, 0, 1, 1]))

print(verify_time([1, 1, 1, 1, 0, 0, 1, 1]))
