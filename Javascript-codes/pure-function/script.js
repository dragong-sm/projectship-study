// Pure Function (순수함수)
// => 같은 입력값이 주어질 때, 언제나 같은 결과를 반환함
// => side effect를 만들지 않음 (원본이 변화하는 등 ..)

// 사용 이유?
// 1. 클린코드
// 2. 테스트 용이
// 3. 디버그 용이
// 4. 독립코드를 위함

// => 특정 함수가 다른 함수에 미치는 예기치 못한 영향 최소화
// => 함수를 만들고 실핼할 때, 어떤 결괏값을 리턴할 지 예측할 수 있다는 장점

// ----------------------------------------------------

// Same input => same output

const add = (x, y) => x + y;
console.log(add(10, 20));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("John", "Ahn"));

// -----------------------------------------------------

// sideEffect x

// ex01.
let x = 0;
const pureNumberUp = (num) => (num += 1);
console.log(pureNumberUp(x));
console.log(x);

// ex02.

const alphabetArray = ["A", "B"];

// const addItemToArray = (originalArray, newItem) => {
//   // side effect 발생 !
//   originalArray.push(newItem);
//   return originalArray;
// };

const addItemToArray = (originalArray, newItem) => {
  // spread operator을 사용하여 side effect 해결
  // 원본 배열을 복사하므로, 훼손되지 x
  return [...originalArray, newItem];
};

console.log(addItemToArray(alphabetArray, "C")); // ["A", "B", "C"]
console.log(alphabetArray); // ["A", "B", "C"]
