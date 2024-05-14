var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question no 43
var magician = ["harry potter", "hermione granger", "ron weasley", "albus dumbledore"];
function copy_array(arr) {
    return __spreadArray([], arr, true);
}
function make_great(megician_array) {
    for (var i = 0; i < megician_array.length; i++) {
        megician_array[i] = 'the Great ' + megician_array[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copymagicianarray = copy_array(magician);
make_great(copymagicianarray);
console.log("\n\nThis is my original array.");
show_magicians(magician);
console.log("\n\nThis is my modified copy of the array.");
show_magicians(copymagicianarray);
