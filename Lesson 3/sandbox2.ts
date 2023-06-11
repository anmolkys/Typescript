//explicit type

let character: string;
let age: number;
let isThere: boolean;

age=30;
isThere=true;
character='luigi';

//arrays
//have to be assigned to use push
let ninja_age: number[] //unassigned array
let ninjas: string[] = []; //empty array

//union array

let mixed: (string|number|boolean)[] = [];
mixed.push('mario');
mixed.push(17);
mixed.push(true); 
console.log(mixed);

//union variables

let uid: (string|number);
uid='string';
uid=7;

//union objects

let ninjaOne : object;
ninjaOne = {name:"yoshi",age:"17"};

let ninjaTwo : {
    name: string,
    age: number,
    belt: string
};

ninjaTwo = {name:'mario' ,age: 16, belt:'black'};

