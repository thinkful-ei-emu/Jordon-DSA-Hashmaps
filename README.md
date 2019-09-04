# 1. Create a HashMap class
Walk through the HashMap implementation in the curriculum and understand it well. Then write a HashMap class and its core functions with open addressing as the collision resolution mechanism.

Export your HashMap module

Create a .js file called HashMaps_drills. In the file import the HashMap module. Create a function called main()

Inside your main() function, create a hash map called `lor.

For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
Add the following items to your hash map: {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
{"Wizard": "Gandolf"}, {"Human": "Aragon"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
{"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
{"Ent": "Treebeard"}

Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?

No, the duplicate key values were reassigned.

Retrieve the value that is hashed in the key "Maiar" and Hobbit.

Frodo, Sauron

What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.

Both were reassigned values.

What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
Current capacity is 24 because initialCapacity * SIZE_RATIO

# 2. WhatDoesThisDo
DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

