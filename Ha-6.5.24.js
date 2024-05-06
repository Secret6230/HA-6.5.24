// Auf 1
function add(a, b) {
    return a + b;
}
let add = (a, b) => a + b;
console.log(add(10, 5))
  
// Ist das selbe nur das man es verkürzt

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// Auf 2 
function Liste (){
    let numbers = [5,11,8,20,7,15];
    let Bigger = numbers.filter(Zahl => Zahl > 10);
    return Bigger;
}
console.log(Liste())
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// Auf 3
function Tiere(){
    let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
    let animalsGroß = animals.map(animal => animal.toUpperCase());
    return animalsGroß;
}
console.log(Tiere())

function KleineTiere(){
    let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
    let animalsKlein = animals.map(animal => animal.toLowerCase());
    return animalsKlein;   
}
console.log(KleineTiere())
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// Auf 4
function OnlyName(){
    let people = [ 
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
  ];
  let peopleOnlyNames = people.map(Name => Name.name);
  return peopleOnlyNames
}
console.log(OnlyName())

