// Method 에서 this를 사용하면 ?
//  => 해당 객체를 가리킴(참조)

const audio = {
  title: "a",
  play() {
    console.log("play this", this);
  },
};

// 함수 실행
audio.play();

audio.stop = function () {
  console.log("stop this", this);
};

audio.stop();

// Funtion 에서 this 사용?  => window 객체를 가리킴

function playAudio() {
  console.log(this);
}

playAudio();

const audio2 = {
  title: "audio",
  categories: ["rock", "pop", "hiphop", "jazz"],
  displayCategories() {
    this.categories.forEach(function (category) {
      // this는 window 객체 !
      // title이 없어서 undefined
      //    => this를 마지막에 넣어줘야 들어감
      //    => 해당 this는 callback 함수에 있는 게 아닌, 메서드 안에 있는 것 ! 
      console.log(`title: ${this.title}, category: ${category}`);
    },
    this);
  },
};

audio2.displayCategories();

// 생성자함수 => {}

// 화살표 함수
const audio3 = {
  title: "audio",
  categories: ["rock", "pop", "hiphop", "jazz"],
  displayCategories() {
    // 상위 객체를 가리킴
    // 여기서의 this는 메소드를 가리키므로 title을 받아올 수 있는 것 !
    this.categories.forEach((category) => {
      console.log(`title: ${this.title}, category: ${category}`);
    });
  },
};

audio3.displayCategories();
