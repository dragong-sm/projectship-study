// li element 생성
const li = document.createElement("li");

// class 추가하기
li.className = "list-group-item";

// id 추가
li.id = "new-item";

// attribute(속성) 추가하기
li.setAttribute("name", "New list item");

{
  /* <li class="list-group-item" id='new-item' name='New list item'></li>  */
}

// 생성한 li를 ul의 자식으로 추가
document.querySelector("ul.list-group").appendChild(li);

// 새로운 link element 생성
const link = document.createElement("a");

// icon html 추가 ( 알람 아이콘 )
link.innerHTML = '<i class="bi-alarm"></i>';

// link를 li에 더하기
li.appendChild(link);

// -----------------------------------------------------

// removeChild
// element 지우기

const listParent = document.querySelector("ul");
const list = document.querySelectorAll("li");

listParent.removeChild(list[1]);

// -----------------------------------------------------

// replaceChild 
// element 바꾸기

const oldElement = document.getElementById("a");

// span 태그
const newElement = document.createElement("span");
newElement.textContent = "Hi";

// replaceChild : oldElement를 newElement로 변경
listParent.replaceChild(newElement, oldElement);
