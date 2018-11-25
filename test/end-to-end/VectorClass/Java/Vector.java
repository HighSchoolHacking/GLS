package vectorclass;

import java.util.Arrays;
import java.util.HashMap;
import java.util.ArrayList;

public class Vector<T> {
    private T[] data;
    private Integer capacity;
    private Integer length;

    public Vector() {
        this.capacity = 0;
        this.data = new T[0];
        this.length = 0;
    }

    public T at(Integer index) {
        if (index >= this.length) {
            throw new Exception(String.format("Index out of bounds: %0$d is greater than %1$d.", index, this.length));
        }

        return this.data[index];
    }

    public Integer getCapacity() {
        return this.capacity;
    }

    public Integer getLength() {
        return this.length;
    }

    public T getFirst() {
        if (this.capacity == 0) {
            throw new Exception("Cannot get first from empty vector.");
        }

        return this.data[0];
    }

    public T getLast() {
        if (this.capacity == 0) {
            throw new Exception("Cannot get last from empty vector.");
        }

        return this.data[this.length - 1];
    }

    public void ensureCapacity(Integer capacity) {
        if (capacity <= this.capacity) {
            return;
        }

        Integer newCapacity = (int)Math.floor(Math.ceil((capacity / 2.0)) * 3);
        T[] oldData = this.data;
        this.capacity = newCapacity;
        this.data = new T[newCapacity];

        for (Integer i = 0; i < oldData.length; i += 1) {
            this.data[i] = oldData[i];
        }
    }

    public void push(T item) {
        this.ensureCapacity(this.length + 1);

        this.data[this.length] = item;
        this.length += 1;
    }

    public void resize(Integer length) {
        if (length <= this.length) {
            this.length = length;
            return;
        }

        this.ensureCapacity(length);
        this.length = length;
    }

    public T[] toArray() {
        T[] array = new T[this.length];

        for (Integer i = 0; i < this.length; i += 1) {
            array[i] = this.data[i];
        }

        return array;
    }

    public ArrayList<T> toList() {
        ArrayList<T> list = new ArrayList<T>(this.length);

        for (Integer i = 0; i < this.length; i += 1) {
            list[i] = this.data[i];
        }

        return list;
    }

    public HashSet<T> toSet() {
        HashSet<T> individuals = new HashSet<T>undefined;

        for (Integer i = 0; i < this.length; i += 1) {
            individuals.add(this.data[i]);
        }

        return individuals;
    }
}
