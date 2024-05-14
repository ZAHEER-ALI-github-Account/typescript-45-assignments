var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question no 45
function storecarinfo(manufacturer, model_name) {
    var extra_option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extra_option[_i - 2] = arguments[_i];
    }
    var carInfo = __assign({ manufacturer: manufacturer, model_name: model_name }, Object.assign.apply(Object, __spreadArray([{}], extra_option, false)));
    return carInfo;
}
;
var answer = storecarinfo('honda', 'civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
