//question no 16
var guest_list = ["sami", "asad", "zakheer"];
var absent_guest = "sami";
var new_guest = "ali";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear mr." + guest_list[i] + ",\n\nIt is our pleasure to invite you in our dinner" + ",\n\nThank you!\n\n");
}
console.log("Mr.".concat(absent_guest, " is not coming to the dinner"));
console.log("\n\nGood news! We find big table so we are inviting 3 more guests.");
guest_list.unshift("subhan");
guest_list.splice(2, 0, "fawad");
guest_list.push("abdullah");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear mr." + guest_list[i] + ",\n\nIt is our pleasure to invite you in our dinner" + ",\n\nThank you!\n\n");
}
