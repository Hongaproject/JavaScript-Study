// count를 0으로 초기화하고 while문 안에서 1씩 더해주고 있습니다. 
// 이렇게 하면 count가 9까지 증가한 다음 while문의 조건에 따라 반복이 종료됩니다. 

var count = 0;
while( count < 10){
    console.log( count );
    count++;
}

// 함수 solution은 n을 인자로 받아서 1부터 n까지 더한 값을 return하는 함수입니다. 
// 예를들어 solution(3)을 호출하면 1+2+3인 6을 return합니다.

function solution(n){
    var count = 1;
    var sum=0;
    while( count > 0 ){
    sum = sum + count;
        count++;
    }
    return sum;
}

function solution(n){
    var count = 1;
    var sum=0;
    while( count <= n ){
        sum = sum + count ;
        count++;
    }
    return sum;
}

// for문을 이용해서 배열 cost의 값을 모두 더해 total_cost 변수에 저장하세요.
var cost = [ 85, 42, 37, 10, 22, 8, 15 ];
var total_cost = 0;
// 여기에 코드를 작성하세요.
for (var i = 0; i<cost.length; i++){
    total_cost = total_cost + cost[i];   
}


console.log(total_cost);
