//question no 37
function make_shirt(size:string = `large` , text:string = `I love typescript.`){

    console.log(`create a ${size} shirt with the message ${text}`);
}

make_shirt();

make_shirt(`medium`);

make_shirt(`small`, `I love python.`);