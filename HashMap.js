class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);
        console.log(index);

        if (!this._hashTable[index]) {
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        };
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);//hello
        const start = hash % this._capacity;

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure has is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}

module.exports = HashMap;




// class HashMap {
//     constructor(initialCapacity = 8) {
//         this.length = 0;
//         this._hashTable = [];
//         this._capacity = initialCapacity;
//         this._deleted = 0;
//     }

//     static _hashString(string) {
//         let hash = 5381;
//         for (let i = 0; i < string.length; i++) {
//             hash = (hash << 5) + hash + string.charCodeAt(i);
//             hash = hash & hash;
//         }
//         return hash >>> 0;
//     }

//     set(key, value) {
//         const loadRatio = (this.length + this._deleted + 1) / this._capacity;
//         if (loadRatio > HashMap.MAX_LOAD_RATIO) {
//             this._resize(this._capacity * HashMap.SIZE_RATIO);
//         }
//         //Find the slot where this key should be in
//         const index = this._findSlot(key);

//         if (!this._hashTable[index]) {
//             this.length++;
//         }
//         this._hashTable[index] = {
//             key,
//             value,
//             DELETED: false
//         };
//     }

//     _findSlot(key) {
//         const hash = HashMap._hashString(key);
//         const start = hash % this._capacity;

//         for (let i = start; i < start + this._capacity; i++) {
//             const index = i % this._capacity;
//             const slot = this._hashTable[index];
//             if (slot === undefined || (slot.key === key && !slot.DELETED)) {
//                 return index;
//             }
//         }
//     }

//     _resize(size) {
//         const oldSlots = this._slots;
//         this._capacity = size;
//         // Reset the length - it will get rebuilt as you add the items back
//         this.length = 0;
//         this._slots = [];

//         for (const slot of oldSlots) {
//             if (slot !== undefined) {
//                 this.add(slot.key, slot.value);
//             }
//         }
//     }

// }

// function simpleHashFunction(number) {
//     return Number % hashTable.length;
// }

// function simpleHashFunction(String) {
//     let total = 0;
//     for (let i = 0; String.length; i++) {
//         total += String.charCodeAt(i);
//     }
//     return total % hashTable.length;
// }

// function hashString(string) {
//     let hash = 5381;
//     for (let i = 0; i < string.length; i++) {
//         hash = (hash << 5) + hash + string.charCodeAt(i);
//         hash = hash & hash;
//     }
//     return hash >>> 0;
// }

// const obj = {
//     key: 'david',
//     value: 'vocals'
// };

// const obj2 = {
//     key: 'gregg',
//     value: 'drums'
// }


// const hash = hashString(obj.key);

// const hash2 = hashString(obj2.key);

// const index = hash % capacity;

// const index2 = hash2 % capacity;