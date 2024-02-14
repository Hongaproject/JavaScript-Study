// map, forEach
// 두 함수는 반복문으로 사용이 되며 배열을 사용한다는 공통점이 있습니다.

// map은 새로운 배열을 반환하고  forEach는 원본 배열을 사용한다.
// forEach는 반환값이 undefined고 map은 반환값이 있어 새로운 배열을 생성합니다.

let arr = [1,2,3,4,5];
let a = arr.forEach(function(value){
	return value;
});
console.log(a);   //undefined

let arr = [1,2,3,4,5];
let a = arr.map(function(value){
	return value + 1;
});
console.log(a);  // [2,3,4,5,6]