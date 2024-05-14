//question no 21

// datatypes of person objects:
interface person {
    age : number ,
    name : string ,
    nationality : string ,
    student : boolean ,
}
//person objects:
let person : person = {
    age : 18 ,
    name : "Zaheer",
    nationality : "Pakistani",
    student : true  ,
}
//print person:
console.log(person);

//datatypes of car objects:
interface car {
    maker : string,
    color : string,
    automatic : boolean,
}
//car objects:
let car = {
    maker : "toyota",
    color : "black",
    automatic : true,
}
console.log(car);