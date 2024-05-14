//question no 43
let magician : string[] = ["harry potter","hermione granger","ron weasley","albus dumbledore"];

function copy_array(arr: string[]){
    return [...arr]
}

function make_great (megician_array: string[]){
    
    for(let i=0; i<megician_array.length; i++){
        megician_array[i] = 'the Great ' + megician_array[i];
    }
}

function show_magicians (magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}
let copymagicianarray = copy_array(magician);
make_great(copymagicianarray);

console.log("\n\nThis is my original array.");
show_magicians(magician);

console.log("\n\nThis is my modified copy of the array.");
show_magicians(copymagicianarray);