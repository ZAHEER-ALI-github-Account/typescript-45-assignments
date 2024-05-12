//question no 3
var personName = "governor sindh";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' '));
