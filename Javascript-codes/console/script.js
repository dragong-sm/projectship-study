// js를 html과 연결하는 작업이 필요
// <script> 라는 태그를 이용  // <script src="script.js"></script>

// console 안에는 여러개의 메서드가 존재

// console.log()를 통해 f12 - console 에서 출력확인 가능
console.log("하이");
console.log(123456);
console.log({ a: "a" }); // 객체타입도 출력가능

// console.table 이라는 매서드 안에 객체를 넣어 table 형태로 확인 가능
console.table({ a: "a" });

// console.error 를 통해 에러타입으로 보여줌
console.error("ERROR");

// console.warn을 통해 경고메세지
console.warn("warning");

// console.time 과 console.timeEnd
// time ~ timeEnd 까지의 시간 계산
console.time("hello");
console.log(1);
console.log(2);
console.log(3);
console.timeEnd("hello");

// cnosole.clear 클리어 해주는 메서드
console.clear;
