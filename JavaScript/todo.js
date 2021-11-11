const toDoList = [];

function addToList(toDoItem) {
    toDoList.push(toDoItem);
    return toDoList;
}

let toDoItem = {
    name: 'Buy BTC',
    status: 'Not Done'
}


/*
addToList('Buy Bitcoin');
console.log(toDoList);

function addToTopOfList(toDoItem) {
    toDoList.unshift(toDoItem);
    return toDoList;
}

addToTopOfList('Buy More BTC');
console.log(toDoList);

function removeFromList(toDoItem) {
    toDoList.pop(toDoItem);
    return toDoList;
}

removeFromList();
console.log(toDoList);

function removeFromTop(toDoItem) {
    toDoList.shift(toDoItem);
    return toDoList;
}

addToList('Buy Many BTC');
console.log(toDoList);

removeFromTop();
console.log(toDoList);
*/

addToList('Buy BTC');
addToList('Buy ETH');
addToList('Borrow Cash and Buy More BTC');

/*

function removeFromListByIndex(removed) {
    toDoList.splice(removed, 1);
}

removeFromListByIndex(1);
console.log(toDoList);
*/
console.log(toDoList);

let listIndex = toDoList.indexOf("Buy ETH");

toDoList.splice(listIndex, 1);
console.log(toDoList);

//Will remove by index, and stop at removing that one (instead of removing everything after '1' as well.)