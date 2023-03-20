//배열 내장함수 forEach
const names = ['자바스크립트', '리액트', '타입스크립트'];

for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}

names.forEach(study => {
    console.log(study);
});

const array = [1,2,3,4,5];

const number = [];
for(let j = 0; j<array.length; j++){
    number.push(array[j]*array[j]);
}
console.log(number);

array.forEach(n => {
    number.push(n*n);
})
console.log(number);

const num = m => m * m;
const numbers = array.map(num);
console.log(numbers);