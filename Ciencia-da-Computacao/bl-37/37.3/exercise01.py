def clear(self):
    while not self.is_empty():
        self.remove_first()


# Complexidade de tempo é O(n)
def __get_node_at(self, position):
    value_to_be_returned = self.head_value

    if value_to_be_returned:
        while position > 0 and value_to_be_returned.next:
            value_to_be_returned = value_to_be_returned.next
            position -= 1

    return value_to_be_returned


# Complexidade de tempo é O(n)
def insert_at(self, value, position):
    if position < 1:
        return self.insert_first(value)

    if position >= len(self):
        return self.insert_last(value)

    current_value = self.__get_node_at(position - 1)
    next_value = Node(value)
    next_value.next = current_value.next
    current_value.next = next_value
    self.__length += 1


# Complexidade de tempo é O(1)
def insert_last(self, value):
    if self.is_empty():
        return self.insert_first(value)


# Complexidade de tempo é O(1)
def remove_last(self):
    if len(self) <= 1:
        return self.remove_first()

    previous_to_be_removed = self.__get_node_at(len(self) - 2)
    value_to_be_removed = previous_to_be_removed.next

    previous_to_be_removed.next = None
    self.__length -= 1

    return value_to_be_removed


# Complexidade de tempo é O(n)
def remove_at(self, position):
    if position < 1:
        return self.remove_first()

    if position >= len(self):
        return self.remove_last()

    previous_to_be_removed = self.__get_node_at(position - 1)

    value_to_be_removed = previous_to_be_removed.next
    previous_to_be_removed.next = value_to_be_removed.next
    value_to_be_removed.next = None
    self.__length -= 1

    return value_to_be_removed


# Complexidade de tempo é O(n)
def get_element_at(self, position):
    value_returned = None
    value_to_be_returned = self.__get_node_at(position)

    if value_to_be_returned:
        value_returned = Node(value_to_be_returned.value)

    return value_returned
