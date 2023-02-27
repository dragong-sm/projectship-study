// DOM(돔) >> Document Object Model
// Contents 부분 정보를 가짐

// 메모리에 웹 페이지 문서를 구조화
// 트리구조, 노드

// JS를 이용해 DOM 조작 가능 ! 스타일변경, 버튼클릭 .. 여러가지
// Layout 과 Paint 부분이 많이 일어나면 .. 성능이 좋지 않음

// 따라서 그 부분을 최소화 하기 위해 React 에서는 Virtual DOM 사용

let val;

val = document;
val = document.baseURI; // http://127.0.0.1:5500/document-object/
val = document.head; //head 태그 부분 반환
val = document.body; // body 태그 부분 반환

val = document.forms; // <form> 태그 반환
val = document.forms[0]; // 첫번째 form
val = document.forms[0].id; // id
val = document.forms[0].action; // 액션
val = document.forms[0].method; //메서드

val = document.links;
val = document.scripts;

console.log(val);

// -----------------------------------------------------

// ** 하나의 요소에 접근 **

// document.querySelector(선택자)
// document.getElementById(요소 아이디)
// document.getElementsByName(name 속성값)

const headerContainer = document.getElementById("header-container");
console.log(headerContainer);
// div#header-container.container-fluid.p-5.bg-primary.text-white.text-center

// headerContainer 요소의 text 부분을 변경
headerContainer.textContent = "textContent ";

headerContainer.innerText = "innerText";

headerContainer.innerHTML = "innerHTML";
headerContainer.innerHTML = "<span>안뇽</span>"; // 태그넣음

// li 태그 첫번째 요소를 blue 색살으로 변경
document.querySelector("li").style.color = "blue";

// li 태그 마지막 요소를 red
document.querySelector("li:last-child").style.color = "red";

// li 태그 3번째 요소를 red
document.querySelector("li:nth-child(3)").style.color = "orange";

// ---------------------------------------------------

// ** 여러 요소에 접근 **

// document.getElementsByTagName(태그 이름)
// document.getElementsByClassName(클래스 이름)
// document.querySelectorAll(선택자)

// list-groip-item 이라는 클래스 이름을 가진 요소들에 접근
const items = document.getElementsByClassName("list-group-item");
console.log(items);

// 해당 클래스의 0번째 요소의 색상 변경
items[0].style.color = "skyblue";
// 해당 클래스의 3번째 요소의 text 변경
items[3].textContent = "변경";

// 태그 이름으로 li 요소들 접근
const lists = document.getElementsByTagName("li");
console.log(lists);

// 모두 선택
const listItems = document.querySelectorAll("ul.list-group li.list-group-item");

// 선택자로 접근하여 text 내용을 변경
listItems.forEach(function (item, index) {
  item.textContent = `${index}. List`;
});

// 홀수번째만 선택
const liOdd = document.querySelectorAll("li:nth-child(odd)");
// 짝수번째만 선택
const liEven = document.querySelectorAll("li:nth-child(Even)");

// 홀수번째 요소의 배경색을 변경
liOdd.forEach(function (li, index) {
  li.style.background = "gray";
});

// 짝수번째 요소의 배경색을 변경
liEven.forEach(function (li, index) {
  li.style.background = "lightgray";
});
