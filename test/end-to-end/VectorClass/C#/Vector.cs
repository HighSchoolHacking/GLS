using System;
using System.Collections.Generic;

namespace VectorClass
{
    public class Vector<T>
    {
        private T[] data;
        private int capacity;
        private int length;

        public Vector()
        {
            this.capacity = 0;
            this.data = new T[0];
            this.length = 0;
        }

        public T At(int index)
        {
            if (index >= this.length)
            {
                throw new Exception(string.Format("Index out of bounds: {0} is greater than {1}.", index, this.length));
            }

            return this.data[index];
        }

        public int GetCapacity()
        {
            return this.capacity;
        }

        public int GetLength()
        {
            return this.length;
        }

        public T GetFirst()
        {
            if (this.capacity == 0)
            {
                throw new Exception("Cannot get first from empty vector.");
            }

            return this.data[0];
        }

        public T GetLast()
        {
            if (this.capacity == 0)
            {
                throw new Exception("Cannot get last from empty vector.");
            }

            return this.data[this.length - 1];
        }

        public void EnsureCapacity(int capacity)
        {
            if (capacity <= this.capacity)
            {
                return;
            }

            int newCapacity = (int)(Math.Ceiling((capacity / 2.0)) * 3);
            T[] oldData = this.data;
            this.capacity = newCapacity;
            this.data = new T[newCapacity];

            for (int i = 0; i < oldData.Length; i += 1)
            {
                this.data[i] = oldData[i];
            }
        }

        public void Push(T item)
        {
            this.EnsureCapacity(this.length + 1);

            this.data[this.length] = item;
            this.length += 1;
        }

        public void Resize(int length)
        {
            if (length <= this.length)
            {
                this.length = length;
                return;
            }

            this.EnsureCapacity(length);
            this.length = length;
        }

        public T[] ToArray()
        {
            T[] array = new T[this.length];

            for (int i = 0; i < this.length; i += 1)
            {
                array[i] = this.data[i];
            }

            return array;
        }

        public List<T> ToList()
        {
            List<T> list = new List<T>(this.length);

            for (int i = 0; i < this.length; i += 1)
            {
                list[i] = this.data[i];
            }

            return list;
        }

        public HashSet<T> ToSet()
        {
            HashSet<T> individuals = new HashSet<T>();

            for (int i = 0; i < this.length; i += 1)
            {
                individuals.Add(this.data[i]);
            }

            return individuals;
        }
    }
}
