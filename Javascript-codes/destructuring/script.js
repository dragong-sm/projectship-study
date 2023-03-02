// 구조 분해 할당 (Destructuring) => ES6

// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JS 표현식

let person = {
    name : "Maya",
    age : "30",
    phone : "123",
    address:{
        zipcode : 1234,
        street : "rainbow",
        number : 42
    }
}

// zipcode를 가져오려면 ?
// => person.address.zipcode : 1234

// 위의 변수에서 깊게 들어가 있는 객체를 구조 분해 할당하면?

// let {address : {zipcode, street,number }} = person;
// zipcode를 그냥 가져올 수 있음
console.log(zipcode, street, number);

// ----------------------------------------------------

// 배열 구조 분해 할당
let a, b, rest;
[a,b] = [10,20];

console.log(a); // 10

console.log(b); // 20

[a,b,...rest] = [10,20,30,40,50];

console.log(rest); // [30,40,50]

// ----------------------------------------------------

// 생략도 가능함 !
const numbers = [1,2,3,4,5,6];
const [,,three,,five] = numbers;

