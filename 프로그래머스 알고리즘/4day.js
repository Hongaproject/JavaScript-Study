// 프로그래머스 알고리즘 입문 Day 4           정답
// 피자 나눠먹기 1
function solution(n) {
    var answer = n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
    return answer;
}

// 피자 나눠먹기 2
function solution(n) {
    for(let i = 1; i<=n; i++) {
        if(6*i%n === 0){ // i는 피자 판 갯수 n은 인원수
            return i;
        }
    }
}

// 피자 나눠먹기 3
function solution(slice, n) { // slice는 조각수 n은 사람수
    var answer = Math.ceil(n / slice) 
    // Math.floor를 사용하면 소수점을 버리기 때문에
    // Math.ceil를 사용해서 소수점 올림을 사용하기 
    return answer;
}

// 평균값 구하기
const solution = (numbers) => {
    let a = 0;

    for(let b = 0; b<numbers.length; b++){
        a += numbers[b]; // a부분에 b의 값을 넣어서 더해준다.
    }

    return a / numbers.length; // 총값 / 갯수  평균값 제공
}