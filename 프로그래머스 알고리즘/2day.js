// 프로그래머스 알고리즘 입문 Day 2            정답
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = Math.floor(num1 / num2 * 1000);
    return answer;
}

// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    return num1 === num2 ? 1 : -1;

    if(num1 === num2){
        return 1
    } else {
        return -1
    }
}

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // numer1	denom1	numer2	denom2	result
    // 1	2	3	4	[5, 4] 10, 8
    // 9	2	1	3	[29, 6] 29, 6

    let a = numer1 * denom2 + numer2 * denom1  //분자 10 , 29
    let b = denom1 * denom2  //분모 8 , 6

    // 최대공약수 구하기 = 통분 
    let c = (a,b) => (a % b === 0 ? b : c(b, a % b));
    
    // 최소공배수 
    answer[0] = a / c(a, b);
    answer[1] = b / c(a, b);


    return answer;
}

//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    var answer = [];
    numbers.forEach((a) => {
        answer.push(a*2);
    })

    answer = numbers.map((a) => a*2);
    return answer;
}


// 프로그래머스 알고리즘 기초 Day 2 3개 (덧셈 출력, 문자열 붙여서 출력, 문자열 돌리기)                     정답
// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요. a + b = c
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = a + b;
    console.log(`${a} + ${b} = ${a+b}`);
    console.log(a, '+', b, '=', c);
});

// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.       apple pen
// 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.     applepen
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2);

});

//문자열 str이 주어집니다. 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
// abcde로 입력되는 것을 블록형태로 나오게\
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i = 0; i<str.length; i++){
        console.log(str[i]);
    }

    str = input[0].split(""); // 문자열 나눠주기 spread와 같은방식
    str.forEach((a) => console.log(a))

    str = input[0];
    [...str].forEach((a) => console.log(a)) // 문자열을 배열로 전환 spread
});







// 문제

// 프로그래머스 알고리즘 입문 Day 2          
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = 0;
    return answer;
}

// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = 0;
    return answer;
}

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    return answer;
}

//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    var answer = [];
    return answer;
}


// 프로그래머스 알고리즘 기초 Day 2 3개 (덧셈 출력, 문자열 붙여서 출력, 문자열 돌리기)                   

// 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요. a + b = c
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(Number(input[0]) + Number(input[1]));
});

// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.       apple pen
// 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.     applepen
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];

});

//문자열 str이 주어집니다. 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
// abcde로 입력되는 것을 블록형태로 나오게\
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
});