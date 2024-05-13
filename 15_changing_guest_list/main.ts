//question no 15
let guest_list:string[]=["sami","asad","zakheer"];
for(let i=0;i<guest_list.length;i++){
    console.log(`Dear mr.` + guest_list[i]+`,\n\nIt is our pleasure to invite you in our dinner`+`,\n\nThank you!\n\n`);
}
let absent_guest:string="sami";
let new_guest:string="ali";
guest_list[0] = new_guest ;
for(let i=0;i<guest_list.length;i++){
    console.log(`Dear mr.` + guest_list[i]+`,\n\nIt is our pleasure to invite you in our dinner`+`,\n\nThank you!\n\n`);
}
console.log(`Mr.${absent_guest} is not coming to the dinner`);