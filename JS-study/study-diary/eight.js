//파라미터
function add (a,b) {
    return a + b;
}
const sum = add(1,2);
console.log(sum);


const add1 = (a,b) => {
    return a + b;
}
console.log(add1(1,2));


function number1 (r) {
    return Math.PI*r*r;
}
const sum1 = number1(1);
console.log(sum1);


function number2 (r =1){
    return Math.PI*r*r;
}
const sum2 = number2();
console.log(sum2);


const number3 = (r = 1) => {
    return Math.PI*r*r;
}
console.log(number3());