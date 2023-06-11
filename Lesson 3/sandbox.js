//-->arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//pushing a number into names doesn't work
//because different types
var numbers = [10, 20, 30, 40];
numbers.push(5);
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push('9');
//lets us push 2 types
//-->Objects
var ninja = {
    name: "Mario",
    belt: "Black",
    age: 27,
};
ninja.age = 40;
ninja.name = "ryu";
//cannot assign number to string type object attribute
//ninja.skills = ['fighting']
//cannot overwrite attribute or type whatsoever but can overwrite all data with same types and same no. of attributes
//eg:
ninja = {
    name: "Yoshi",
    age: 16,
    belt: "Black",
};
