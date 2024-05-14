//question no 44
function makeSandwich(item) {
    console.log("\n\nMaking your sandwich with:");
    item.forEach(function (element) { return console.log("- " + element); });
    console.log("Enjoy your sandwich!");
}
makeSandwich(['jam', 'cheese', 'lettuce']);
makeSandwich(['turkey', 'bacon']);
makeSandwich(['peanut butter', 'jelly']);
