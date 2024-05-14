//question no 42
let magician : string[] = ["harry potter","hermione granger","ron weasley","albus dumbledore"];

function make_great (megician_array: string[]){
    
    for(let i=0; i<megician_array.length; i++){
        magician[i] = 'the Great ' + megician_array[i];
    }
}

function show_magicians (magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);