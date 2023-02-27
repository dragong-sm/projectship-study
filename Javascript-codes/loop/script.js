// 루프의 종류

// for : 코드 블록 여러 번 반복
// for/in : 객체의 속성(property)을 따라 반복
// while : 지정된 조건이 true 인 동안 코드 블록을 반복
// do/while : 일단 do 한 번 실행한 후, while 조건 true 인 동안 코드 블록 반복

// -----------------------------------------------------------------

// ** for **

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("it is 3");
    //  i는 3이면 아래 코드 실행 x 안하고 바로 다음 루프로 감
    continue;
  }
  if (i === 5) {
    console.log("5 stop the loop");
    // i가 5이면 루프를 벗어남 (끝남)
    break;
  }
  console.log("for : " + i);
}

// ** for/in **

const user = {
  name: "hong",
  province: "경기도",
  city: "성남시",
};
for (let x in user) {
  // user의 x 속성의 값은 ?
  console.log(`${x} : ${user[x]}`);
}

// ** while **

let i = 0;
while (i < 10) {
  console.log("While : ", i);
  i++;
}

// ** do/while **

let a = 100;
do {
  console.log("do/While : ", a);
  a++;
} while (a < 10);

// -----------------------------------------

// ** 배열 순회 **

const locations = ["서울", "부산", "경기도", "대구"];

// for
for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}

// forEach
locations.forEach(function (location, index, array) {
  console.log(location); // 서울
  console.log(index); // 0
  console.log(array); // ['서울', '부산', '경기도', '대구']
});

// map
locations.map(function (location) {
  console.log(location); // 서울
});
