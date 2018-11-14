exports.Vector = class Vector {

    constructor() {
        this.capacity = 0;
        this.data = [];
        this.length = 0;
    }

    at(index) {
        if (index >= this.length) {
            throw new Error(`Index out of bounds: ${index} is greater than ${this.length}.`);
        }

        return this.data[index];
    }

    getCapacity() {
        return this.capacity;
    }

    getLength() {
        return this.length;
    }

    getFirst() {
        if (this.capacity === 0) {
            throw new Error("Cannot get first from empty vector.");
        }

        return this.data[0];
    }

    getLast() {
        if (this.capacity === 0) {
            throw new Error("Cannot get last from empty vector.");
        }

        return this.data[this.length - 1];
    }

    ensureCapacity(capacity) {
        if (capacity <= this.capacity) {
            return;
        }

        let newCapacity = Math.floor(Math.ceil((capacity / 2.0)) * 3);
        let oldData = this.data;
        this.capacity = newCapacity;
        this.data = new Array(newCapacity);

        for (let i = 0; i < oldData.length; i += 1) {
            this.data[i] = oldData[i];
        }
    }

    push(item) {
        this.ensureCapacity(this.length + 1);

        this.data[this.length] = item;
        this.length += 1;
    }

    resize(length) {
        if (length <= this.length) {
            this.length = length;
            return;
        }

        this.ensureCapacity(length);
        this.length = length;
    }

    toArray() {
        let array = new Array(this.length);

        for (let i = 0; i < this.length; i += 1) {
            array[i] = this.data[i];
        }

        return array;
    }

    toList() {
        let list = new Array(this.length);

        for (let i = 0; i < this.length; i += 1) {
            list[i] = this.data[i];
        }

        return list;
    }

    toSet() {
        let individuals = new Set();

        for (let i = 0; i < this.length; i += 1) {
            individuals.add(this.data[i]);
        }

        return individuals;
    }
}
