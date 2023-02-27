// Math 함수

let val;

val = Math.round(2.4); // 0.5이하면 내림, 0.5이상이면 올림
val = Math.ceil(2.4); // 올림
val = Math.floor(2.4); // 내림
val = Math.abs(-2.4); // 절댓값

val = Math.random(); // 0 ~ 1 사이 랜덤값

val = Math.floor(Math.random() * 10);
// 1 ~ 10 사이 랜덤값으로 변경
// 랜덤값을 지정하고자 할 때, 사용하면 좋음 !

console.log(val);
