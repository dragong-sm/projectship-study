// 얕은 비교 (Shallow Compare)
// => 숫자, 문자열 등 원시 자료형은 "값"을 비교
// => 배열, 객체 등 참조 자료형은 값/속성을 비교하지 않고 "참조되는 위치"를 비교

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false

// ---------------------------------------------

// 깊은 비교
// => 얕은 비교와 달리 객체의 경우에도 "값" 비교

// 1. 객체의 깊이가 깊지 않은 경우? => JSON.stringify() 사용
// 2. 객체의 깊ㅍ이가 깊은 경우? => lodash 라이브러리의 isEqual() 사용
const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };

console.log(JSON.stringify(objA) === JSON.stringify(objB)); // true
