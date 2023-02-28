window.onload = function () {
  const text = document.getElementById("text");

  text.innerHTML = "HTML 문서 loaded";
};

const aElement = document.querySelector("a");
aElement,
  addEventListener("click", () => {
    alert("a element clicked");
  });

// UI 이벤트
// 키보드 이벤트
// 마우스 이벤트
// 포커스 이벤트
// 폼 이벤트
