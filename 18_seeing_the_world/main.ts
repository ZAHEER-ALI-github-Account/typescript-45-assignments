// question no 18

let places: string[] = ["Makkah","Madina","dubai","faisal_Masjid","badshahi_masjid"];
//print in original order:
console.log(`original ` + places);

//print in alphabetical order without modifying it:
console.log(`copy ` + [...places].sort());

//show array is still in its original order:
console.log(`original ` + places);

//print in reverse alphabetical order without changing the order of the original list:
console.log(`copy ` + [...places].sort().reverse());

//show array is still in its original order again:
console.log(`original ` + places);

//reverse the order of original list:
console.log(`original ` + places.reverse());

//reverse the order of original list again. print the list to show it's back to its original order:
console.log(`original ` + places.reverse());

// sort your array so it's stored in alphabetical order. print the array to show that its order 
// has been changed:
console.log(`original ` + places.sort());

//sort to chane your array so its stored in reverse alphabetical order. print list to show the 
//order has been changed
console.log(`original ` + places.sort().reverse());