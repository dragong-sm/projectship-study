// window 객체
// 창에 전체에 대한 정보를 다 가지고 있음

// var을 통해 선언하면 window 객체의 하나의 property가 됨 (const, let은 안됨)

// window 메서드를 사용할 때는 window 빼도 됨!

// alert : 팝업
// window.alert("Hello World");
// alert("Hello World ! ");

// Prompt 에 적은 값을 팝업
// const input = prompt();
// alert(input);

// Confirm
// 조건에 따라 !
// if (confirm("Yes or No")) {
//   // 확인을 누르면 YES
//   console.log("YES");
// } else {
//   // 취소를 누르면 NO
//   console.log("NO");
// }

// Outer height and width
let val;

val - window.outerHeight; //창 전체 (켜진 창 자체)
val = window.outerWidth;

val = window.innerHeight; // f12부분 제외 전체 (실제화면 contents)
val = window.innerWidth;

val = window.scrollX; // 가로스크롤
val = window.scrollY; // 세로스크롤

val = window.location;
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/window/', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// 윈도우의 위치 정보 !

val = window.navigator;
// Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}
// 윈도우의 여러가지 정보들 (언어 ..)!

console.log(val);
