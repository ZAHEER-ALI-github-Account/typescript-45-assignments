//question no 17
let guest_list:string[]=["sami","asad","zakheer"];

let absent_guest:string="sami";

let new_guest:string="ali";

guest_list[0] = new_guest ;

console.log(`Mr.${absent_guest} is not coming to the dinner`);

console.log(`\n\nGood news! We find big table so we are inviting 3 more guests.`);

guest_list.unshift("subhan");

guest_list.splice(2 , 0 , "fawad");

guest_list.push("abdullah");

for(let i=0;i<guest_list.length;i++){
    console.log(`Dear mr.` + guest_list[i]+`,\n\nIt is our pleasure to invite you in our dinner`+`,\n\nThank you!\n\n`);
}

console.log(`\nsorry we can not arrange big table, only two people will be invited.`);

while(guest_list.length>2){
    let remove_guest = guest_list.pop()
    console.log(`sorry Mr.${remove_guest}, you are nor invited for dinner`);
}

for(let i=0;i<guest_list.length;i++){
    console.log(`Dear mr.` + guest_list[i]+`,\n\nyou are still invited.`+`,\n\nThank you!\n\n`);
}

guest_list.splice(0 , 2);

console.log(guest_list);