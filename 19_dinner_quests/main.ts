//question no 19
let guest_list:string[]=["sami","asad","zakheer"];

let absent_guest:string="sami";

let new_guest:string="ali";

guest_list[0] = new_guest ;

guest_list.unshift("subhan");

guest_list.splice(2 , 0 , "fawad");

guest_list.push("abdullah");

while(guest_list.length>2){
    let remove_guest = guest_list.pop()
}

guest_list.splice(0 , 2);

console.log(guest_list);

// print a message indicating the number of people you are inviting to dinner:
console.log(`total number of guest are: ${guest_list.length}`);