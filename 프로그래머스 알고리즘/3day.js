// 프로그래머스 알고리즘 입문 Day 3            정답
// 나머지 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = num1 % num2;
    return answer;
}

// 중앙값 구하기
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
// index는 0 1 2 3 4 = 2번의 값을 찾아야함 
// 입출력 예 #2  =>  9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.
function solution(array) {
    // 오름차수는 sort를 사용하면된다.
    let a = array.sort((q,w) => q - w); // w - q는 내림차수로 됨 
    let b = Math.floor(array.length / 2); // index값 가운데 값을 찾아줌.

    return a[b];
}

// 최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
// 입출력 예 #1  =>  [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
function solution(array) {
    var answer = 0;
    return answer;
}

// 짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
// 입출력 #1  =>  10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.
function solution(n) {
    var answer = [];

    for(let i = 1; i <= n; i++){
        if(i % 2 != 0){
            answer.push(i);
        }
    }

    return answer;
}

// 프로그래머스 알고리즘 기초 Day 2 ( , )            정답
// 홀짝 구분하기
// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let a = 'odd' // 홀수 일 때
    if(n % 2 === 0) { // 짝수 일 때
        a = 'even' 
    }
    console.log(`${n} is ${a}`)
});

// 문자열 겹쳐쓰기
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
// 입출력 예 #1  =>  예제 1번의 my_string에서 인덱스 2부터 
// overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.

// 입출력 예
// my_string	overwrite_string	s	result
// "He11oWor1d"	    "lloWorl"	    2	"HelloWorld"

function solution(my_string, overwrite_string, s) {
    const a = [...my_string]
    // ['H', 'e', '1', '1','o', 'W', 'o', 'r','1', 'd']
    // 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꿈
    a.splice(s, overwrite_string.length, overwrite_string) 
    // [ 'H', 'e', 'lloWorl', 'd' ]
    return a.join(''); // HelloWorld
}




















// 프로그래머스 알고리즘 입문 Day 3            문제
function solution(num1, num2) {
    var answer = num1 % num2;
    return answer;
}


function solution(array) {
    var answer = num1 % num2;
    return answer;
}

function solution(array) {
    var answer = 0;
    return answer;
}

function solution(n) {
    var answer = [];
    return answer;
}


// 프로그래머스 알고리즘 기초 Day 2 ( , )            문제

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
});


function solution(my_string, overwrite_string, s) {
    var answer = '';
    return answer;
}