// Write your solution here!
//Q1
const cats = ["Milo", "Otis", "Garfield"];

function beforeEach(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

//Q2
function destructivelyAppendCat(name){
    beforeEach();
    cats.push(name)
    return console.log(cats);
}
destructivelyAppendCat('Ralph')

//Q3
function destructivelyPrependCat(name){
    beforeEach();
    cats.unshift(name)
    return console.log(cats);
}
destructivelyPrependCat("Bob")

//Q4
function destructivelyRemoveLastCat(){
    beforeEach();
    cats.pop()
    return cats;
}
destructivelyRemoveLastCat()

//Q5
function destructivelyRemoveFirstCat(){
    beforeEach();
    cats.shift()
    return cats;
}
destructivelyRemoveFirstCat()

//Q6
function appendCat(name){
    beforeEach();
    const newCats = [...cats, name];
    return newCats;
}
appendCat("Broom");

//Q7
function prependCat(name){
    beforeEach();
    const newCats2 = [name, ...cats];
    return newCats2;
}

//Q8
function removeLastCat(){
    beforeEach();
    const newCats3 = cats.slice(0, -1)
    return newCats3;
}

//Q9
function removeFirstCat(){
    beforeEach();
    const newCats4 = cats.slice(1)
    return newCats4;
}

