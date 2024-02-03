// 1day
var answer = num1 + num2 ; 
var answer = num1 - num2 ; 
var answer = num1 * num2 ;
var answer = Math.floor(num1 / num2) ; // 몫

// floor 소수점 버림 1.2 - > 1
// ceil 소수점 올림 1.2 -> 2
// round 소수점 반올림 1.6 -> 2 , 1.4 -> 1

// 2day
var answer = Math.floor((num1 / num2) * 1000);
var answer = num1 === num2 ? 1 : -1; 
var answer = numbers.map((a) => a*2); // 2배 만들기

// 3day
var answer = num1 % num2 ; // 나머지
var answer = array.sort((a, b) => b - a)[Math.floor(array.length / 2)]; // 중앙값 구하기
var answer = (n) => { // 홀수만 나오게 하기
    var array = [];
    for(let a = 1; a <= n; a ++){ // 15까지면 n은 15이고 a < n 이면 a 가 14로 오류가 발생하여 a <= n해서 15 <= 15가 되게 만든다.
        if(a % 2 != 0){ // 나머지가 0이 아니면 홀수이므로
            array.push(a); // array배열 안에 a를 push하여 넣어준다.
        }
    }
    return array;
}

// 4day
var answer = Math.ceil(n / 7); // 모든 사람이 1판 이상 먹어야 한다고 해서 ceil은 소수점을 올림.
var answer = (n) => { // 6조각으로 나누어줌 
    for(let a = 1; a <= n; a++){
        if(6 * a % n === 0){ // 나머지가 0 이여야 함. n 은 조각 갯수 a는 피자 판 갯수
            return a;
        }
    }
}
var answer = (slice, n) => { // slice는 피자 갯수 n은 사람 수 
    // n명의 사람이 한 조각 이상은 피자 먹기
    var a = Math.ceil(n / slice); 
}
var answer = (numbers) => {
    var a = 0;
    for(let i = 0; i < numbers.length; i++){ 
        a += numbers[i]; // numbers 매개변수 []안에 i값을 넣어주고 +하여 a에 더함 
    }
    return a / numbers.length; 
}

// 5day















