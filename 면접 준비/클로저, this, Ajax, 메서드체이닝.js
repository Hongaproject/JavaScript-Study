// 면접 준비 파일에 들어가기 전에 미리 한 번 작성 하는 용도 

// 클로저
// 함수와 함수가 선언된 어휘적(렉시컬) 환경의 조합을 뜻하고 내부함수가 외부함수를 접근할 수 있으며 
// 외부 함수의 실행이 종료된 후에도 함수가 선언된 어휘적(렉시컬) 환경에 접근이 가능하다.

const closureComponent = () => {

	// 외부 함수 영역
	const outerFunc = () => {
		let x = 1000;

		// 내부 함수 영역
		let innerFunc = () => {
			console.log(x); // 내부 함수에서 외부 함수로 지역 변수의 접근을 한다.
		};
		return innerFunc;
	};

	// 외부 함수를 실행합니다.
	const callInnerFunc = outerFunc();

	// 외부 함수의 실행이 끝나더라도 변수에 접근이 가능 합니다.
	callInnerFunc(); // 1000
};

export default closureComponent;

// 장점
// 전역 변수 사용 억제, 정보은닉 등이 있음


// this
// 자기가 속한 객체, 자기가 생성할 인스턴스를 가르키는 자기 참조 변수이다.
// 어떻게 호출 되었나에 따라 바인딩 객체가 동적으로 결정이된다.

// 브라우저의 전역객체는 window
console.log(this); // window

// 서버에서는 global
console.log(this); // global

// 1. 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스와 바인딩됨. 
// 2. Call, Apply, Bind 메서드 사용 시, 함수의 첫 번째 인수로 전달하는 객체에 바인딩됨.
// 3. Object.method 형태와 같이 객체 내에서 호출할 경우, this는 해당 객체와 바인딩됨.
// 4. 위 3가지를 제외한 일반 함수로 호출할 경우 this는 전역 객체와 바인딩됨.
// 5. 화살표 함수 내에서 this가 사용될 경우, this는 상위 스코프릐 this와 바인딩됨

// 1. 전역범위서 사용시 전역객체를 가르킴
// 2. 함수에서 사용시 전역객체 가르킴.
// 3. 객체에 속한 메서드에사 사용시 메서드의 객체를 가르킴
// 4. 객체에 속한 메서드의 내부함수에서 사용시 전역객체 가르킴.
// 5. 생성자에게 사용시, 사용자가 만든 새로운객체를 가르킴.

// Ajax
// Ajax은 XMLHttpRequest 객체를 이용해서 서버와 브라우저간 비동시 방식으로 데이터를 교환하는 통신을 뜻합니다.
// 최근에는 XML대신 JSON을 사용합니다.
// Ajax을 사용한 것이 SPA라고 합니다.

// 메서드체이닝
// 객체의 메서드를 연속적으로 호출하는 기능
// 사용시 가독성이 향상되고 간결한 코드 작성
// 너무 많이 사용시 혼란스럽고 에러가 어디서 났는지 찾기 어려움.

// 메서드체이닝은 this를 반환시키는게 가장 편함.
// 호출시마다 value의 값이 바뀌면 자신 객체를 계속 반환하여 체이닝을 한다.
// https://developerntraveler.tistory.com/116 메서드, 옵셔널 체이닝
// https://jimmy-ai.tistory.com/415 메서드 체이닝

