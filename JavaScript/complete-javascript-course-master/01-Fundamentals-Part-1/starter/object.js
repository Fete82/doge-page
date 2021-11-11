//objects in javascript

const person = {
    firstName: "Fete",
    surName: "Edvin",
    fullName: function(){
        return this.firstName + this.surName;
    }
};

console.log(person);
console.log(person.firstName);