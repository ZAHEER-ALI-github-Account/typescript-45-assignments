//question no 30
var userName = ["admin", "zaheer", "zakheer", "asad", "ali"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] === "admin") {
        console.log("Hello admin, would you like to see the status report.");
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
