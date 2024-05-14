//question no 38
function describe_city(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("karachi", "Pakistan");
describe_city("jiddah", "Saudi Arabia");
describe_city("los angeles");
