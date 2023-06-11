let greet: Function;
//greet='hello';

greet = () =>{
    console.log("Hello");
}
//optional parameter(?) to avoid entering all function attributes
//with default donot use ?
const add = (a:number,b:number,c:number|string = 10):void => {
    console.log(a+b);
    console.log(c);
}

add(2,3,'string');

const minus = (a:number,b:number):number => {
    return a-b;
}

let result = minus(2,4);
//result takes data type of minus return 

// result='string' gives error now

//void represents lack of return function

type StringorNum = (string|number);
let x : StringorNum[];

//function signature

let greetagain: (a:string,b:string)=>void;
greetagain = (name:string,greeting:string) => {
    console.log(`${name} says ${greeting}`);
}