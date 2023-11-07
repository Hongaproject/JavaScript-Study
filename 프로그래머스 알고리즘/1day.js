// 프로그래머스 알고리즘 기초편 
// 문자열 출력하기 

//문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

const readline = require('readline'); // readline모듈은 사용자의 입력을 console.log로 출력할 수 있도록 해주는 역할
const rl = readline.createInterface({ // 객체를 만들어줌
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) { // line이벤트 입력 받은 값을 처리하는 코드 
    input = [line]; // 입력 후 close에서 종료 후 동작함.
}).on('close',function(){ // 종료이벤트 
    str = input[0]; // 입력이 끝나고 실행하는 코드

    // console.log(str); 답
});

// a와 b출력하기

// 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
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

    // 답
    // let a = Number(input[0]);
    // let b = Number(input[1]);

    // console.log("a = " + a);
    // console.log("b = " + b);

    // console.log("a = " + Number(input[0]));
    // console.log("b = " + Number(input[1]));
});

// 문자열 반복해서 출력하기
// 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);

    //답
    // console.log(str.repeat(n)); // repeat는 반복해주는 메서드
});

// 대소문자 바꿔서 출력하기
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
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
    
    toUpperCase();
    toLowerCase();
});

// 특수문자 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {

    // 답
    // console.log('!@#$%^&*(\\\'"<>?:;')
});


// 알고리즘 입문편  Day 1
// 합

// 차

// 곱

// 몫
