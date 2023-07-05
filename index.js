function add(a, b) {
    return a + b;
}

function add5(number) {
    return (number+=5);
}

function divideBy3 (number) {
    return (number /= 3);
}

function subtract (a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide (a, b) {
    return (a / b);
}

function multiply (a, b) {
    return (a * b);
}

function increment (n) {
    n += 1;
    return n;
}

function decrement(n) {
    n -= 1;
    return n;
}

function makeInt(n) {
    return (parseInt(n, 10));
}

function preserveDecimal(string) {
    return (parseFloat(string));
}

makeInt("5");
makeInt("Five");
preserveDecimal("5.555");
preserveDecimal("Five point five");

let number = 10;
divideBy3();
add5();
number = 10;
add5();
divideBy3();
decrement(197);