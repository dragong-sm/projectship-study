window.onload = function () {
  const text = document.getElementById("text");

  text.innerHTML = "HTML 문서 loaded";
};

const aElement = document.querySelector("a");
aElement,
  addEventListener("click", () => {
    alert("a element clicked");
  });