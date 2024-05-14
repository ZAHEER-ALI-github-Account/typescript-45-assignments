//question no 42
var magician = ["harry potter", "hermione granger", "ron weasley", "albus dumbledore"];
function make_great(megician_array) {
    for (var i = 0; i < megician_array.length; i++) {
        magician[i] = 'the Great ' + megician_array[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
