//question no 38
function describe_city(city:string , country:string = `default country`){
    console.log(`${city} is in ${country}.`);
}
describe_city(`karachi`,`Pakistan`);
describe_city(`jiddah`,`Saudi Arabia`);
describe_city(`los angeles`);