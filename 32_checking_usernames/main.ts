//question no 32

let current_users: string[] = ["zaHeer","zaKheer","asAd","subhan","john"];

let new_users: string[] = ["fawad","zaHeer","shayan","noman","subhan"];

new_users.forEach(newusername => {
    let lowercase: string = newusername.toLowerCase();

    if(current_users.map(c_users => c_users.toLowerCase()).includes(lowercase)){
        console.log(`the username ${newusername} is not available. please write different username.`);
    }
    else{
        console.log(`this username ${newusername} is available.`);
    }
});