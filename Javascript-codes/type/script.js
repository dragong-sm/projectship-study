// 자바스크립트 타입

// ** 자바스크립트는 " 동적 타입 " >> 느슨한 타입의 동적 언어 **

// JS 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당(& 재할당) 가능
// 같은 변수가 여러 개의 타입을 가질 수 있음 ( 타입을 명시하지 x )

// ** 원시타입 | Primitive type (불변성을 가짐) **

// Boolean(참/거짓), String(문자열), Number(숫자),
// null(하나의 값, 의도적으로 없음을 나타냄),
// undefined(하나의 값, 초기화되지 않은 변수의 기본값),
// Symbol(변경불가능한 유일한 값을 생성할 때 사용 (ES6에서 새로 생김))

// ** 참조타입 |Object type **
// Object, Array, Function, Class, Object Literal

// Templete Literal 이란? 백틱을 사용한 문자열

// 원시타입은 값을 저장하기 위해 Call Stack 메모리공간을 사용하지만,(불변성)
// 참조타입의 경우는 Heap이라는 별도의 메모리 공간을 사용함 (데이터크기 정해지지 x 데이터 값은 heap에 저장)
// Call Stack은 개체 및 배열 값이 아닌 ** Heap 메모리 참조 ID ** 를 값으로 저장 (참조타입)

// --------------------------------------------

// ** 원시타입 **

const name = "hong";
const age = 30;
const hasJob = true;
const car = null; // null
let anything; // undefined
const sym = Symbol();

// ** 참조타입 **

const hobbies = ["walking", "books"]; //배열
const address = {
  //객체
  province: "경기도",
  city: "성남시",
};
