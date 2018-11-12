#
from math import floor, ceil
class Vector:

    def __init__(self):
        self.__capacity = 0
        self.__data = []
        self.__length = 0

    def at(self, index):
        if index >= self.__length:
            raise Exception("Index out of bounds: {0} is greater than {1}.".format(index, self.__length))

        return self.__data[index]

    def get_capacity(self):
        return self.__capacity

    def get_length(self):
        return self.__length

    def get_first(self):
        if self.__capacity == 0:
            raise Exception("Cannot get first from empty vector.")

        return self.__data[0]

    def get_last(self):
        if self.__capacity == 0:
            raise Exception("Cannot get last from empty vector.")

        return self.__data[self.__length - 1]

    def ensure_capacity(self, capacity):
        if capacity <= self.__capacity:
            return

        newCapacity = floor(ceil((capacity / 2.0)) * 3)
        oldData = self.__data
        self.__capacity = newCapacity
        self.__data = [None] * newCapacity

        for i in range(0, len(oldData)):
            self.__data[i] = oldData[i]

    def push(self, item):
        self.ensure_capacity(self.__length + 1)

        self.__data[self.__length] = item
        self.__length += 1

    def resize(self, length):
        if length <= self.__length:
            self.__length = length
            return

        self.ensure_capacity(length)
        self.__length = length

    def to_array(self):
        array = [None] * self.__length

        for i in range(0, self.__length):
            array[i] = self.__data[i]

        return array

    def to_list(self):
        list = [None] * self.__length

        for i in range(0, self.__length):
            list[i] = self.__data[i]

        return list

    def to_set(self):
        individuals = set()

        for i in range(0, self.__length):
            individuals.add(self.__data[i])

        return individuals
#
