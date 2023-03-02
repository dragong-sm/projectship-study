// Closure
// 다른 함수 내부에 정의된 함수가 있는 경우, 외부 함수가 실행을 완료하고
// 해당 변수가 해당 함수 외부에서 더이상 엑세스할 수 없는 경우에도
// 해당 내부 함수는 외부 함수의 변수 및 범위에 엑세스할 수 있음

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer Variable : ' + outerVariable)
        console.log('Inner Variable : ' + innerVariable)
    }
}

// outerFunction('outside')는 변수 newFunction이 할당되는 즉시 호출 됨
// outerFunction은 newFunction을 outerFunction(outerVariable)대신 innerFunction(innerVariable) 반환
// 그 후, newFunction('inside')를 호출하여 innerFunction('inside')를 호출 함
// 이 때, closure은 outerFunction('outside')로 설정한 outerVariable 매개변수를 기억하고 엑세스 할 수 있음
// 따라서 'inside'로만 호출되었어도 'outside'와 'inside'를 모두 출력 가능
const newFunction = outerFunction('outside')
newFunction('inside')

// ----------------------------------------

let a = 'a'

// function functionB(){
//     let c = 'c';
//     console.log(a, b, c); // Error : b is not defined
// }

// function functionA() {
//     let b = 'b';
//     // console.log(a, b);
//     functionB();
// }

// Closure => 내부 함수에서 외부 함수의 변수 범위를 엑세스할 수 있음
function functionA(){
    function functionB(){
            let c = 'c';
            console.log(a, b, c); 
        }
    let b='b';
    functionB();
}

functionA();
