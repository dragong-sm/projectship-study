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

val = list.children;

val = list.firstChild; // #text
val = list.firstElementChild; // li.list-group-item

val = list.lastChild; // #text

val = list.childElementCount; // 5

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextElementSibling;
val = listItem.nextSibling; // #text
val = listItem.nextElementSibling.nextElementSibling; // li.list-group-item
val = listItem.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

// -----------------------------------

// 자식노드 : 바로 아래의 자식 요소
// 후손노드 : 중첩관계에 있는 모든 요소 ( 자식노드와 그 보다 자싣 노드 모두가 후손 노드 )

// ---------------------------------------
