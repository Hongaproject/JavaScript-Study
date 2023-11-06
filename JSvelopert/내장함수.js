// forEach
// forEach는 콜백함수를 인자로 받고 각 요소에 콜백함수를 실행시킨다.
const text = ['고양이', '강아지', '소'];
for(let i = 0; i<text.length; i++){
    console.log(text[i]);
}

text.forEach((a) => {
    console.log(a);
})

// map
// map은 콜백함수를 인자로 받고 각 요소에 콜백함수를 실행시킨 새로운 배열을 반환
const test = [1,2,3,4,5]; // 제곱 문제 
const answer = [];
for(let i = 0; i < test.length; i++){
    console.log(test[i] * test[i]);
}
console.log(answer);

// forEach
const answer1 = [];
test.forEach((a) => {
    answer1.push(a * a);
})
console.log(answer1);

// map
const answ = b => b * b;
const answer2 = test.map(answ);
console.log(answer2); 

// map
const answer2 = test.map(c => c * c);
console.log(answer2);

// map과 forEach
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => {
  return item * 2;
});

console.log(newArr); // [ 2, 4, 6, 8, 10 ]

const arr = [1, 2, 3, 4, 5];
const newArr = arr.forEach((item) => item * 2);

console.log(newArr);

const arr = [1, 2, 3, 4, 5];
const newArr = [];

arr.forEach((item) => newArr.push(item * 2));

console.log(newArr); // [ 2, 4, 6, 8, 10 ]

// filter
let arr1 = [3,5,11,0,9,'string'];
let result = arr1.filter((a) => a < 10)
console.log(result); // 3, 5, 0 ,9

// splice, slice
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers); // 10 20 40

const numbers1 = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers1); // [10, 20, 30, 40]

// pop, push
const numbers2 = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.log(numbers);

// concat
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const concated = a1.concat(a2); 

console.log(concated); // 1 2 3 4 5 6
console.log(a1 + "," + a2); // 1 2 3 4 5 6


const numbers0 = [1, 2, 3, 4, 5];

let sum = 0;
numbers0.map(n => {
  sum += n;
});
console.log(sum);