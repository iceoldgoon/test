let string1 = "Hello";
let number1 = 5;
let boolean1 = true;
let undefined1;
let null1 = null;

console.log(typeof string1);
console.log(typeof number1);
console.log(typeof boolean1);
console.log(typeof undefined1);
console.log(typeof null1);

let nickname = "";

console.log(
nickname
);

let son = '42';

son = Number(son);

console.log(
    `${son} + 8 = ${42 + 8}`
)

let son1 = 2026;

son1 = String(son1);

console.log(
    typeof son1
)

let son2 = 0;

console.log(`${son2} false`)

let son3 = 1;

console.log(`${son3} true`)

let son4 = "";

console.log(`${son4} false`)

let son5 = "Hello";

console.log(`${son5} true`)

let son6 = null;

console.log(`${son6} false`)

let son7 = undefined;

console.log(`${son7} false`)

let son8 = '5';

let son9 = 2;

console.log(`${son8} + ${son9} = ${son8 + son9}`);

let son10 = '5';

let son11 = 2;

console.log(`${son10} - ${son11} = ${son10 - son11}`);

let number = Number("apple");

console.log(number);
console.log(Number.isNaN(number));

let son12 = '19.75';

console.log(`${19.75} + 0.25 = ${Number(son12) + 0.25}`);

let son13 = Number('12px');

console.log(son13);

let son14 = parseInt('12px', 10);

console.log(son14);

let nullValue = null;

console.log(typeof nullValue);

let undefinedValue = undefined;

console.log(typeof undefinedValue);

let number2 = parseFloat('12.50');

console.log(number2);

let priceText = '12.5';

let quantityText = '4';

console.log(`${Number(priceText) + Number(quantityText)}`);

let number3 = Number('');

let number4 = Number('hello');

let number5 = Number(' 15 ');

console.log(`${number3}, ${number4}, ${number5}`)