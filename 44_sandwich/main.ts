//question no 44
function makeSandwich(item: string[]){
    console.log("\n\nMaking your sandwich with:");

    item.forEach(element => console.log(`- `+ element));

    console.log("Enjoy your sandwich!");
}
makeSandwich(['jam','cheese','lettuce']);
makeSandwich(['turkey','bacon']);
makeSandwich(['peanut butter','jelly']);