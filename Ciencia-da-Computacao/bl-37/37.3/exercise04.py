class DoublyLinkedList:
    # Complexidade de tempo é O(n)
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


# Complexidade de tempo é O(n)
def delete_duplicates(linkedList):
    list_with_unique_elements = DoublyLinkedList()

    while linkedList:
        current_node = linkedList.remove_first()
        if linkedList.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
