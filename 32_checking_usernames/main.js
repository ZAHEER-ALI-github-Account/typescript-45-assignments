//question no 32
var current_users = ["zaHeer", "zaKheer", "asAd", "subhan", "john"];
var new_users = ["fawad", "zaHeer", "shayan", "noman", "subhan"];
new_users.forEach(function (newusername) {
    var lowercase = newusername.toLowerCase();
    if (current_users.map(function (c_users) { return c_users.toLowerCase(); }).includes(lowercase)) {
        console.log("the username ".concat(newusername, " is not available. please write different username."));
    }
    else {
        console.log("this username ".concat(newusername, " is available."));
    }
});
