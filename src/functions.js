function sayHello() {
    return "Hello world";
}


function multiplyBy2(number) {
    return number * 2;
}

function multiply(a, b = 1) {
    return a * b;
}


//arrow functions

const sayHello = () => {
    return "Hello world";
}
//OR
const sayHello = () => "Hello world"


const multiplyBy2 = (number) => number * 2
//OR
const multiplyBy2 = number => number * 2


const multiply = (a, b = 1) => a * b;
