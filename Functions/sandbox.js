var greet;
//greet='hello';
greet = function () {
    console.log("Hello");
};
//optional parameter(?) to avoid entering all function attributes
//with default donot use ?
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(2, 3, 'string');
var minus = function (a, b) {
    return a - b;
};
var result = minus(2, 4);
var x;
//function signature
var greetagain;
greetagain = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
