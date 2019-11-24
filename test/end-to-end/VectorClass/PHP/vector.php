require "set"

<?php
class Vector
    attr_accessor :data;
    attr_accessor :capacity;
    attr_accessor :length;

    function __constructor()
        self.capacity = 0;
        self.data = [];
        self.length = 0;
    end

    def at(index)
        if index >= self.length
            raise Exception.new('Index out of bounds: ' . index . ' is greater than ' . self.length . '.');
        end

        return self.data[index];
    end

    def get_capacity()
        return self.capacity;
    end

    def get_length()
        return self.length;
    end

    def get_first()
        if self.capacity == 0
            raise Exception.new("Cannot get first from empty vector.");
        end

        return self.data[0];
    end

    def get_last()
        if self.capacity == 0
            raise Exception.new("Cannot get last from empty vector.");
        end

        return self.data[self.length - 1];
    end

    def ensure_capacity(capacity)
        if capacity <= self.capacity
            return;
        end

        $newCapacity
        $oldData
        self.capacity = newCapacity;
        self.data = Array.new(newCapacity);

        for i in 0...count(oldData)
            self.data[i] = oldData[i];
        end
    end

    def push(item)
        self.ensure_capacity(self.length + 1);

        self.data[self.length] = item;
        self.length += 1;
    end

    def resize(length)
        if length <= self.length
            self.length = length;
            return;
        end

        self.ensure_capacity(length);
        self.length = length;
    end

    def to_array()
        $array

        for i in 0...self.length
            array[i] = self.data[i];
        end

        return array;
    end

    def to_list()
        $list

        for i in 0...self.length
            list[i] = self.data[i];
        end

        return list;
    end

    def to_set()
        $individuals

        for i in 0...self.length
            individuals.add(self.data[i]);
        end

        return individuals;
    end
end
