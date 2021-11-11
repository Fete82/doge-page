let markMass = 78;
let markHeight = 1.69;

let markBMI = (markMass / (markHeight ** 2));

console.log(markBMI);

let johnMass = 92;
let johnHeight = 1.95;

let johnBMI = (johnMass / (johnHeight ** 2));

console.log(johnBMI);

let markHigherBMI = (johnBMI > markBMI);


if (johnBMI > markBMI) {
    console.log(`John's BMI is higher than Mark's at ${johnBMI} !`);
} else {
    console.log(`Mark's BMI is higher than John's at a whopping ${markBMI} !`);
}


const coercionTest = "I am " + 23 + " years old";
console.log(coercionTest);


let n = 1 + '1';
n -= 1;
console.log(n);









/*
let age = 12;
const isOldEnough = age >= 18;



const isRetarded = true;
console.log(isRetarded);



if(isOldEnough) {
    console.log('Fete is old enough');
} else {
    console.log('Fete is too fat to ride the rollercoaster');
}

const birthYear = 1991;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};


//No need for "let/const" inside if/else conditional statement 

console.log(century);
//prints 20

*/