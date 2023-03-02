// Call() : 함수를 호출하는 메서드

// Function this => Window 객체

// Call()

// FullName 함수의 this가 personal 참조
const fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const fullName2 = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const personal = {
  firstName: "John",
  lastName: "Doe",
};

fullName.call(personal);

fullName2.call(personal, "Oslo", "Norway");

// -----------------------------------------------

// Apply() => 인수 부분을 배열로 넣어줘야 함
const fullName3 = function () {
  console.log(this.firstName + " " + this.lastName);
};

const personal2 = {
  firstName: "John",
  lastName: "Doe",
};

fullName3.apply(personal, ["Oslo", "Norway"]);

// ------------------------------------------------

// Bind()

// this가 window 객체 대신 다른 게 나오게 만듦
// 함수를 실핸하지 않고 반환함
function func(language){
  if(language === "kor"){
    console.log(`language: ${this.korGreeting}`);
  }else{
    console.log(`language: ${this.engGreeting}`)
  }
}

const greeting = {
  korGreeting : "안녕",
  engGreeting : "HEllo"
}

const boundFunc = func.bind(greeting);
boundFunc('kor');