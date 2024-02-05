// 깊은복사
// 새로운 메모리 공간을 확보하여 완전히 복사하는 것을 의미합니다.

// 얕은복사
// 참조 타입 데이터가 저장한 메모리 주소값을 복사하는 것을 의미

// 깊은 복사는 객체의 실제 값을 복사, 얕은 복사는 객체의 참조값(주소값)을 복사

// 얕은복사 
const user = { 
	name : "Hong", 
	age : 27, 
} 
const user2 = user; 
user2.name = "Lee"; 

//모두 똑같은 객체를 바라보고 있음 
console.log(user); // {name:"Lee", age:27} 
console.log(user2); // {name:"Lee", age:27} 

// user를 user2에 넣었더니 기존의 user 값도 같이 변경된 것을 확인 할 수 있다. 
// 데이터 자체를 복사한 것이 아니라 해당 데이터의 참조 값을 전달하여 하나의 데이터를 공유하는 것이다. 

// 깊은복사
// 얕은복사처엄 참조값이 복사되는 것이 아닌 값만 복사가 된다.
// Object.assign()   Object.assign(생성할 객체, ...복사할 객체);
const user1 = { 
	name : "Hong", 
	age : 27, 
} 
const user2 = object.assign({},user1);
user2.name = "Lee"; 

//모두 똑같은 객체를 바라보고 있음 
console.log(user1); // {name:"Hong", age:27} 
console.log(user2); // {name:"Lee", age:27} 

// 전개연산자 spread
const user3 = { 
	name : "Hong", 
	age : 27, 
} 
const user2 = {...user3}
user2.name = "Lee"; 

//모두 똑같은 객체를 바라보고 있음 
console.log(user3); // {name:"Hong", age:27} 
console.log(user2); // {name:"Lee", age:27} 

// JSON.parse && JSON.stringify
const user4 = { 
	name : "Hong", 
	age : 27, 
} 
const user2 = JSON.parse(JSON.stringify(user4));
user2.name = "Lee"; 

//모두 똑같은 객체를 바라보고 있음 
console.log(user4); // {name:"Hong", age:27} 
console.log(user2); // {name:"Lee", age:27} 
