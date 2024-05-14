//question no 37
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript."; }
    console.log("create a ".concat(size, " shirt with the message ").concat(text));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love python.");
