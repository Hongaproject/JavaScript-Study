// for
for(let i = 0; i < 10; i++){  // for(초기식; 조건식; 증감식;)
    console.log(i); // 0 ~ 9 명령문
}

const names = ['강아지','고양이','짹쨱이'];

for(let a = 0; a < names.length; a++){
    console.log(names[a]); // 강아지 고양이 쨱쨱이
}

//while
// for과 while의 차이점 while은 특정 조건이 참이면 계속 돔 for은 특정 숫자를 가지고 반복을 돌림 

let i = 0;
while( i < 10){
    console.log(i);
    i++;
}

for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음 루프를 실행
    console.log(i);
    if (i === 5) break; // 반복문을 끝내기
  }