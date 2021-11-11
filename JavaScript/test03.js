console.log(4);

console.log(true);

console.log('STRING');

let myBox = 'Edvin';
console.log(myBox);

let numOne = 8;
let numTwo = 82;
console.log(numOne + numTwo);

function Print() {
    console.log('hello world');
}

Print();
Print();
Print();

function hellox(name) {

    let ucFirst = name[0].toUpperCase() + name.slice(1);
    name[0].toUpperCase
    console.log('hello, ' + ucFirst);
}

hellox('edvin');

function multiply(a , b) {
    return a * b;
}

console.log(multiply(4, 6));

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
    //better way to add space than to insert +" "?
}

console.log(fullName("Edvin", "Lindahl"));
console.log(fullName("Edvin", "Lindahl"));
console.log(fullName("Edvin", "Lindahl"));


/*

function btcPriceTarget(price, multiple) {
    return price * multiple;
}

console.log(btcPriceTarget(60000, ∞));



function getPriceValue() {
    let a = "$1999";
    let b = parseInt(a);
    return b;
}


console.log(getPriceValue());


let price = "THE PRICE IS ONLY $1999";

function getPriceValue(price) {

    let dollarSign = price.indexOf("$")+1;

    let priceValue = price.substring(dollarSign, price.lenght);

    console.log(priceValue);
}

getPriceValue(price);

let coins = ['btc', 'doge', 'eth'];
console.log(coins);

coins.pop();

*/

let citiesArr = ['malmö', 'lund', 'växjö', 'braås'];

/*
let removed = citiesArr.splice(1,3)

console.log(removed);
console.log(citiesArr);




console.log(citiesArr);
console.log(citiesArr.indexOf('lund'));
console.log(citiesArr.includes('åseda'));

citiesArr.forEach(function(item, index) {
    console.log(index, + ":" + item);
});

*/

citiesArr.sort();
console.log(citiesArr);