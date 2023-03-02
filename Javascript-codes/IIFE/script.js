// IIFE (Immediately Invoked Function Expression) => 즉시 호출 함수 표현식

/* 
( : 첫번째 소괄호 => 전역 선언을 막구 IIFE 내부 안으로 다른 변수 접근 막음
    function () {    }
    : 두번째 소괄호 => 즉시 실행 함수를 생성함 (JS엔진은 함수를 즉시 해석 & 실행)
)
*/

(function () {
  var aName = "Barry";
})();

// IIFE 내부에서 정의된 변수는 외부 범위에서 접근 불가 !
// console.log(aName); // Error

// -----------------------------------------------------

var result = (function () {
  var name = "Barry";
  return name;
})();

// 즉시 결과를 생성 !
//  => IIFE를 변수에 할당하면 IIFE 자체는 저장되지 않고, 함수 실행 결과만 저장 됨

console.log(result); // "Barry"

// -----------------------------------------------------

// 이름 없는 함수를 위해서도 사용 가능

// 함수 리터럴
// function minus(a,b) {
//     return a - b;
// }

// 이름 없는 함수로 변경 => 이름이 없어 에러 !
// function (a,b){
//     return a-b;
// }

// 따라서, 이름 없는 함수를 할당받을 변수를 지정한 후, 즉시 호출

// 1. 할당 받은 변수 지정
const minus = (function (a, b) {
  return a - b;
})(
  // 2. 함수 즉시 호출
  function (a, b) {
    // return a-b;
    return console.log(a - b);
    // 함수가 즉시 호출되어 값이 출력 됨
  }
)(1, 2);
