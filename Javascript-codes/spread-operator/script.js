// 전개 연산자 (Spread Operator) => ES6
// 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용
// ... < 을 사용

// ---------------------------------------

// 배열에 배열을 붙이기 위해 apply 사용할 경우

const arr1 = [1,2.3];
const arr2 = [4,5];

// Array.prototype.push.apply(arr1, arr2);
arr1.push(...arr2); // 위의 코드와 동일

console.log(arr1);

// -----------------------------------------

// 기존 배열 보존을 위해

const arrA = [1,2.3];
// 원본 자체를 reverse 하게 되어 원본 배열까지 역순으로 변경 됨 !
// const arrB = arrA.reverse();
const arrB = [...arrA].reverse();
// spread-operator을 사용하면 원본 배열이 유지 됨 ! (불변성 유지)

console.log(arrA);
console.log(arrB);
