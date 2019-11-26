using namespace System.Collections.Generic
Using-Module "System.ps1"
class Vector {
    $data;
    $capacity;
    $length;

    Vector() {
        $this.capacity = 0;
        $this.data = @();
        $this.length = 0;
    }

    [T] at($index) {
        if (index -gte $$this) {
            throw new Exception("Index out of bounds: $(index) is greater than $($$this).");
        }

        return $$this[index];
    }

    [int] getCapacity() {
        return $$this;
    }

    [int] getLength() {
        return $$this;
    }

    [T] getFirst() {
        if ($$this -eq 0) {
            throw new Exception("Cannot get first from empty vector.");
        }

        return $$this[0];
    }

    [T] getLast() {
        if ($$this -eq 0) {
            throw new Exception("Cannot get last from empty vector.");
        }

        return $$this[$$this - 1];
    }

    [void] ensureCapacity($capacity) {
        if (capacity -lte $$this) {
            return;
        }

        $newCapacity = [convert]::ToInt32(Math.Ceiling((capacity / 2.0)) * 3);
        $oldData = $$this;
        $this.capacity = newCapacity;
        $this.data = [None] * newCapacity;

        for ($i = 0; $i -lt oldData.length; $i += 1) {
            $$this[i] = oldData[i];
        }
    }

    [void] push($item) {
        $this.ensureCapacity($$this + 1);

        $$this[$$this] = item;
        $$this += 1;
    }

    [void] resize($length) {
        if (length -lte $$this) {
            $this.length = length;
            return;
        }

        $this.ensureCapacity(length);
        $this.length = length;
    }

    [T[]] toArray() {
        $array = [None] * $$this;

        for ($i = 0; $i -lt $$this; $i += 1) {
            array[i] = $$this[i];
        }

        return array;
    }

    [List[T]] toList() {
        $list = [None] * $$this;

        for ($i = 0; $i -lt $$this; $i += 1) {
            list[i] = $$this[i];
        }

        return list;
    }

    [System.Collections.Generic.HashSet] toSet() {
        $individuals = New-Object System.Collections.Generic.HashSet[T];

        for ($i = 0; $i -lt $$this; $i += 1) {
            individuals.add($$this[i]);
        }

        return individuals;
    }
}
