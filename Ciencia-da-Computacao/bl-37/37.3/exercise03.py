# Complexidade de tempo é O(n)
def remove_duplicates(self):
    list_elements = self()

    while self:
        current_node = self.remove_first()

        if list_elements.index_of(current_node.value) == -1:
            list_elements.insert_last(current_node.value)

    return list_elements
