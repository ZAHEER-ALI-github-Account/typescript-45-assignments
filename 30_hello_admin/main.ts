//question no 30
//method 1
const userName : string[] = ["admin","zaheer","zakheer","asad","ali"];
for (let i=0; i< userName.length; i++){
    if (userName[i] === `admin`){
        console.log(`Hello admin, would you like to see the status report.`);
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);
    }
}