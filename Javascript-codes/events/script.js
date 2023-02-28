// 마우스 이벤트

const submitBtn = document.querySelector(".submit-btn");

// Click
submitBtn.addEventListener("click", handleEvent);

// Double Click
submitBtn.addEventListener("dblclick", handleEvent);

// mouseUP
submitBtn.addEventListener("mouseup", handleEvent);

// mouseEnter
submitBtn.addEventListener("mouseenter", handleEvent);

// mouseleave
submitBtn.addEventListener("mouseleave", handleEvent);

// mousemove
submitBtn.addEventListener("mousemove", handleEvent);

function handleEvent(e) {
  // 이벤트 종류
  console.log("Event Type : " + e.type);
  // 마우스 위치
  title.textContent = `MouseeX : ${e.offsetX} MouseY : ${e.offsetY}`;
}

// -------------------------------------------------

// 폼이벤트

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const title = document.querySelector("h2");

form.addEventListener("submit", handleEvent2);

// keydown
emailInput.addEventListener("keydown", handleEvent2);

// keyup : 키보드에서 손 뗄떄
emailInput.addEventListener("keyup", handleEvent2);

// keypress : 키 누를때
emailInput.addEventListener("keypress", handleEvent2);

function handleEvent2(e) {
  // 이벤트 종류
  console.log("Event Type 2 : " + e.type);
  e.preventDefault();

  title.innerText = e.target.value;
}
