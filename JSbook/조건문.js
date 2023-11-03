// 20세 미만인 식을 만드세요
let age = 25;

if(age < 20){ // true
    console.log("20세 미만입니다.");
}
else{ // false
    console.log("20세 이상입니다.");	
}

// age가 20대라면 true를 그렇지 않으면 false를 return합니다. 
function solution(age){
    //age가 20이상, 30미만이면 20대
    if(20 <= age || age < 30){ 
        // &&은 둘 다 참이여야지 참 그 외에는 false 
        // ||은 하나만 참이거나 둘 다 참이면 true 둘 다 거짓이면 false
        return true;
    }
    else{
        return false;
    }
}

// 인자 year가 윤년인지 아닌지를 true, false로 반환하는 solution함수를 완성하세요.
function solution( year ){
    if(year% 4 == 0){
            console.log(solution + "윤년입니다.")
            return true;
       }
    else{
        console.log(year + "윤년이 아닙니다.")
        return false;
    }
}

// 각 달을 month라는 인자로 받아 그 달이 몇일까지 있는 반환하는 함수 solution함수를 완성하세요.
function solution( month ){
    switch ( month ) {
    case 2:
        days = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    default:
        days = 31;
        break;
    }
}