//파라미터
function number (r) {
    return Math.PI*r*r;
}
const sum1 = number(1);
console.log(sum1);



function number1 ( r = 1) {
    return Math.PI*r*r;
}
const sum2 = number1();
console.log(sum2);



const number2 = (r = 1) => {
    return Math.PI*r*r;
}

const sum3 = number2();
console.log(sum3);
