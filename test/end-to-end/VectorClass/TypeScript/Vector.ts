export class Vector<T> {
    private data: T[];
    private capacity: number;
    private length: number;

    public constructor() {
        this.capacity = 0;
        this.data = [];
        this.length = 0;
    }

    public at(index: number): T {
        if (index >= this.length) {
            throw new Error(`Index out of bounds: ${index} is greater than ${this.length}.`);
        }

        return this.data[index];
    }

    public getCapacity(): number {
        return this.capacity;
    }

    public getLength(): number {
        return this.length;
    }

    public getFirst(): T {
        if (this.capacity === 0) {
            throw new Error("Cannot get first from empty vector.");
        }

        return this.data[0];
    }

    public getLast(): T {
        if (this.capacity === 0) {
            throw new Error("Cannot get last from empty vector.");
        }

        return this.data[this.length - 1];
    }

    public ensureCapacity(capacity: number): void {
        if (capacity <= this.capacity) {
            return;
        }

        let newCapacity: number = Math.floor(Math.ceil((capacity / 2.0)) * 3);
        let oldData: T[] = this.data;
        this.capacity = newCapacity;
        this.data = new Array<T>(newCapacity);

        for (let i: number = 0; i < oldData.length; i += 1) {
            this.data[i] = oldData[i];
        }
    }

    public push(item: T): void {
        this.ensureCapacity(this.length + 1);

        this.data[this.length] = item;
        this.length += 1;
    }

    public resize(length: number): void {
        if (length <= this.length) {
            this.length = length;
            return;
        }

        this.ensureCapacity(length);
        this.length = length;
    }

    public toArray(): T[] {
        let array: T[] = new Array<T>(this.length);

        for (let i: number = 0; i < this.length; i += 1) {
            array[i] = this.data[i];
        }

        return array;
    }

    public toList(): T[] {
        let list: T[] = new Array<T>(this.length);

        for (let i: number = 0; i < this.length; i += 1) {
            list[i] = this.data[i];
        }

        return list;
    }

    public toSet(): Set<T> {
        let individuals: Set<T> = new Set<T>();

        for (let i: number = 0; i < this.length; i += 1) {
            individuals.add(this.data[i]);
        }

        return individuals;
    }
}
