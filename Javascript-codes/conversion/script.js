// JS 변수는 새 변수 및 다른 데이터 유형으로 변환할 수 있음

// -----------------------------------------------

// 1. 함수 이용하여 타입변경

let val;

// Number => String
val = String(100);
val = String(8 + 4);
val = (5).toString();

// Boolean => String
val = String(true);
// Date => String

val = String(new Date());
// Mon Feb 27 2023 20:09:20 GMT+0900 (한국 표준시)

// Array => String
val = String([1, 2, 3, 4]);

// String => Number
val = Number("1");

// String => Number(Int)로 변경
// float부분(0.303030) 없어짐
val = parseInt("1111.303030");

console.log(val);
// typeof 를 이용하여 타입 확인 가능
console.log(typeof val);

// -----------------------------------------

// 2. JS 자체에 의해 자동으로 타입 변경됨

const val1 = String(2); // String
const val2 = 3; // Number
const val3 = 5;

const sum = val1 + val2; // String으로 자동으로 변경 됨
const sum2 = val2 + val3; // Number

console.log(typeof val1);
console.log(typeof val2);
console.log(sum);
console.log(typeof sum); // String
console.log(typeof sum2); // number
