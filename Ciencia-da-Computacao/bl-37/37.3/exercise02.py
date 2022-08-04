# Complexidade de tempo é O(n)
def index_of(self, value):
    position = 1
    current_value = self.head_value
    while current_value:
        if current_value.value == value:
            return position

        current_value = current_value.next
        position += 1

    return -1
