// 프로그래머스 알고리즘 입문 Day 4            정답
// 옷가게 할인 받기
// 10만원 이상 5% 30이상 10% 50이상 20% 할인 
// 소수점 이하를 버린 정수를 return 함.
function solution(price) {
    // 조건문으로 풀기
    if(price >= 500000){
        price *= 0.8
    } else if(price >= 300000){
        price *= 0.9
    } else if(price >= 100000){
        price *= 0.95
    }
    return Math.floor(price);
    return parseInt(price); // 소수점을 버리기 때매 사용 가능.

    // Math.floor 소수점 이하 버림 1.1 - > 1
    // Math.ceil 소수점 이하 올림 1.1 -> 2
    // Math.round 소수점 이하 반올림 1.1 -> 1 , 1.5 -> 2
}

// 아이스 아메리카노
// 아메리카노 5500원 -> 15000원시 아메리카노 2잔과 잔돈 4000원이 나오게 해야함.
function solution(money) {
    let americano = 5500;

    let a = Math.floor(money / americano); // 시킬수 있는 갯수 나타냄, 소수 점 있을시 버려야 하기떄매 Math.floor사용
    let b = money % americano; // 잔돈을 나타냄

    let c = [a , b]; // 입출력 예를 따라함

    return c;
}

// 나이출력
// 40살 선생님 몇년생인지 궁금. 
// 입출력예 2022년 기준 40살이므로 1983년생입니다.
function solution(age) {
    return new Date().getFullYear() - age; // 원래 +1을 해야하지만 2022년 기준이라 +1을 뺌
		// 이코드 사용시 기준이 있다면 년도 마다 코드를 바꿔야함. 기준이 안잡혀있으면 사용가능 

    return 2022 - age + 1; // 2022년 기준이 이 답이 맞는답.
}

// 배열뒤집기
// 거꾸로 뒤집기 
function solution(num_list) {
    return num_list.reverse();
}




// 프로그래머스 알고리즘 입문 Day 4            문제
// 옷가게 할인 받기
function solution(price) {
    var answer = 0;
    return answer;
}

// 아이스 아메리카노
function solution(money) {
    var answer = [];
    return answer;
}

// 나이출력
function solution(age) {
    var answer = 0;
    return answer;
}

// 배열뒤집기
function solution(num_list) {
    var answer = [];
    return answer;
}