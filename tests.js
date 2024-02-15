// 별찍기
for(let i = 1; i <= 5; i++){
	let stars = "";
	for(let j = 1; j <= i; j++){ 
		stars += '*';
	}
	console.log(stars);
}


for(let a = 1; a <= 5; a++){ // a가 1이여지 
    const star = '*'; // 1개부터 시작이됨.
    console.log(star.repeat(i));
}

// https://velog.io/@reasonz/2022.07.24-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%84%EC%B0%8D%EA%B8%B0-repeat-%ED%95%A8%EC%88%98

// 구구단

for(let i = 2; i <= 9; i++) {  
    console.log(i + '단');  
    for(let j = 1; j <= 9; j++) {    
        console.log(i + ' * ' + j + ' = ' + (i*j));  
    }
}


