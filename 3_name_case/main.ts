//question no 3
let personName:string="governor sindh";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));