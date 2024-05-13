//question no 14
var guest_list = ["sami", "asad", "zakheer"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear mr." + guest_list[i] + ",\n\nIt is our pleasure to invite you in our dinner" + ",\n\nThank you!\n\n");
}
var absent_guest = "sami";
var new_guest = "ali";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear mr." + guest_list[i] + ",\n\nIt is our pleasure to invite you in our dinner" + ",\n\nThank you!\n\n");
}
console.log("Mr.".concat(absent_guest, " is not coming to the dinner"));
