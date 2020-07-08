//accept a base and an exponent, return result, mimicking Math.pow()

function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, exp-1);
}
