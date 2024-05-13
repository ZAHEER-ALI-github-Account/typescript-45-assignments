//question no 19
var guest_list = ["sami", "asad", "zakheer"];
var absent_guest = "sami";
var new_guest = "ali";
guest_list[0] = new_guest;
guest_list.unshift("subhan");
guest_list.splice(2, 0, "fawad");
guest_list.push("abdullah");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
}
guest_list.splice(0, 2);
console.log(guest_list);
// print a message indicating the number of people you are inviting to dinner:
console.log("total number of guest are: ".concat(guest_list.length));
