// 변수 선언 방식

// ** var **
// 중복선언과 재할당 가능

var greeting = "hello";
console.log(greeting);

// 중복선언 가능!
var greeting = "hi";
console.log(greeting);

// 재할당 가능!
greeting = "how are you?";
console.log(greeting);

// ---------------------------------------------

// ** let (ES6부터) **
// 중복선언 x 재할당 o

let abc = "안녕";
console.log(abc);

// 중복선언 안돼 ! // Identifier 'abc' has already been declared
// let abc = "반가워";
// console.log(abc);

// 재할당 가능
abc = "방가워";
console.log(abc);

// ---------------------------------------------

// ** const **
// 중복선언, 재할당 모두 x

const message = "가나다";
console.log(message);

// 중복선언 x // Identifier 'message' has already been declared
// const message = "라마바";
// console.log(message);

// 재할당 x // Assignment to constant variable.
// message = "라마바";
// console.log(message);

// 중요 !!
// const로 선언해도 배열과 객체의 값을 변경하는 것은 가능
const arrList = [1, 2, 3];
console.log(arrList); // [1,2,3]
arrList.push("a");
console.log(arrList); // [1,2,3,'a']

const objList = { a: "a", b: "b" };
console.log(objList); // {a: 'a', b: 'b'}
objList.다 = "다";
console.log(objList); // {a: 'a', b: 'b', 다: '다'}

//  ----------------------------------------------

// ** var **
// 하나의 함수 내에서 선언된 변수는 함수 내에서만 유효
// 함수 내에서는 블록의 내부와 외부에 관계없이 유효
// BUT, 함수 외부에서는 참조 x

// 함수 내부
function func() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}

// 함수호출
func();

// 함수 외부
// console.log(a); // a is not defined

// -------------------------------------------------

// ** let , const **
// 블록 내에서 선언된 변수는 블록 내에서만 유효

// 함수 내부
function func() {
  // b는 블록
  if (true) {
    let b = "b";
    const c = "c";
    console.log(b);
    console.log(c);
  }
  //   console.log(b); // b is not defined
  //   console.log(c);
}

// 함수호출
func();

// 함수 외부
// console.log(b); // b is not defined
// console.log(c);

//  --------------------------------------------------

// ** 호이스팅 **
// 무언가를 들어올리거나 끌어 올리는 동작
// JS에서 코드가 실행되기 전에 변수 및 함수 선언이 로컬범위의 맨위로 들어올려지거나 끌어올려지는 경우

// var은 호이스팅 되어서 undefined가 할당 됨
console.log(hoisting); // undefined
var hoisting = "hello";

// 변수생성 >> 선언단계, 할당단계가 존재
// 따라서 아래의 선언단계가 코드 실행 전에 현재 범위의 맨위로 호이스팅되고 undefined 값이 할당되게 됨 !
// 즉, 초기화 되기 전에 hoisting 변수를 사용할 수 있게 됨

// 함수도 함수 생선 전에 호출하면 호이스팅 됨 !!

func2();

function func2() {
  console.log("함수호이스팅");
}

// const, let도 호이스팅 되지만, undefined가 할당되지 않음 ! (에러)
// TDZ(Temperal Dead Zone) 이라 함 >> 값이 없는데 참조하려고 하니까 ..

// console.log(hoisting2); // Cannot access 'hoisting2' before initialization
// console.log(hoisting3); // Cannot access 'hoisting3' before initializatio
const hoisting2 = "hello";
let hoisting3 = "hello2";

// **** 결론 !
// var은 되도록이면 사용하지 않음 ! (사용하지 마세요)
// 재할당이 필요하다면 let을, 그게 아니라면 const 사용
// 변수의 scope를 최대한 좁게 만들어서 사용해주기 위함
