// DOM 탐색하기

let val;

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

val = listItem;
val = list;

val = list.childNodes; // nodelist를 반환 (link break도 포함)
val = list.childNodes[0]; //요소 타입
val = list.childNodes[0].nodeName;
val = list.childNodes[3]; //text노드
val = list.childNodes[3].nodeType; // 1
val = list.childNodes[0].nodeType; // 3

// 노드들에 여러가지 타입이 존재함

console.log(val);
