//question no 45
function storecarinfo (manufacturer: string, model_name: string, ...extra_option: {[key: string]: any}[]): object{
    let carInfo = {
        manufacturer,
        model_name,
        ...Object.assign({}, ...extra_option)
    }
    return carInfo;
};
let answer = storecarinfo('honda','civic',{color: 'black'},{features: ['navigation','power window']});
console.log(answer);