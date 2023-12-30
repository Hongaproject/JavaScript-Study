// 프로그래머스 알고리즘 입문 Day 7          정답
// 특정 문자 제거하기
function solution(my_string, letter) {
    // 방법 1
    var answer = '';

    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] !== letter){ // for문으로 돌려 letter이 아닌 부분만 넣어준다.
            answer += my_string[i];
        }
    }
    return answer;
}

// 각도기
function solution(angle) {
    if(angle < 90){
        return 1
    } else if(angle === 90) {
        return 2
    } else if(angle < 180) {
        return 3
    } else {
        return 4
    }
}

// 양꼬치
function solution(n, k) {
    let a = 12000 * n + 2000 * k
    let b = Math.floor(n / 10) 
    return a - 2000*b
}

// 짝수의 합
function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n; i++){
        if(i % 2 === 0){
            answer += i
        }
    }
    return answer
}

