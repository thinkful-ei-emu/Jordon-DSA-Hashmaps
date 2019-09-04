const HashMap = require('./HashMap');

// const WhatDoesThisDo = function () {
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new HashMap();
//     map1.set(str1, 10);
//     map1.set(str2, 20);
//     let map2 = new HashMap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3, 20);
//     map2.set(str4, 10);

//     console.log(map1.get(str1));
//     console.log(map2.get(str3));
// }

//

function removeDuplicate(string) {

    let map = new HashMap();
    let newStr = '';

    for (let i = 0; i < string.length; i++) {
        try {
            map.get(string(i))
        }
        catch (e) {
            map.set(string(i), string(i));
            newStr = string(i);
        }
    }
    console.log(newStr);
    return newStr;
}

function isPalindrome(string) {
    const strMap = new HashMap();
    let charList = '';

    for (let i = 0; i < string.length; i++) {
        try {
            const count = strMap.get(str.charAt(i));
            strMap.set(string.charAt(i), count + 1);
        } catch (e) {
            strMap.set(str.charAt(i), 1);
        }
    }
    let Odd = 0;
    strMap._hashTable.forEach(keyValObj => {
        if (keyValObj.value % 2 === 1) {
            Odd += 1;
        }
    });
    if (Odd > 1) {
        return false;
    }
    return true;
}



function main() {
    const lor = new HashMap();
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;

    lor.set("Hobbit", "Bilbo");
    lor.set("Hobbit", "Frodo");
    lor.set("Wizard", "Gandolf");
    lor.set("Human", "Aragon");
    lor.set("Elf", "Legolas");
    lor.set("Maiar", "The Necromancer");
    lor.set("Maiar", "Sauron");
    lor.set("RingBearer", "Gollum");
    lor.set("LadyOfLight", "Galadriel");
    lor.set("HalfElven", "Arwen");
    lor.set("Ent", "Treebeard");

    console.log(lor);

    // console.log(lor._hashTable);
    // console.log(lor._hashString("Elf"));
    // console.log(lor.get("Hobbit"))//Frodo
    // console.log(lor.get("Maiar"))//Sauron

    // console.log(lor._capacity)
}

// main();
