// 프로그래머스 알고리즘 입문 Day 6          정답
// 문자열 뒤집기
function solution(my_string) {
    var a = my_string.split("");
    var b = a.reverse();
    var answer = b.join("");
    return answer;
}

// 직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {

    let a = Number(input[0])
    for (let i = 1; i <= a; i++) {
        console.log('*'.repeat(i))
    }
});

// 짝수 홀수 개수
function solution(num_list) {
// 방법 1
    var answer = []; // 홀수
    var b = []; // 짝수용
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0){
            b.push(i);
        }
    }
    answer = [b.length, num_list.length - b.length];
    return answer;
}

// 문자 반복 출력하기
function solution(my_string, n) {
    var answer = '';
    
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < n; j++){
            answer += my_string[i];
        }
    }
    return answer;
}



