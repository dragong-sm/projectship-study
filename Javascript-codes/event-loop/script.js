// 동기 Synchronous : 순차적으로
// 비동기 Asynchronous : 병렬적? 순서가 x

// JavaScript는 동기 언어 !
// 따라서, 비동기 코드를 작성하기 위해 도움을 받음
// => 브라우저에서 사용한다면, 브라우저 api 사용 (window object)
// => Node에서 사용한다면, Node api 사용

// 자바스크립트 엔진 
// => Memory Heap + Call Stack 으로 이루어짐
// Memory Heap : 메모리할당 발생, 변수 저장창고
// Call Stack : 코드가 실행될 때, 스택이 쌓이는 곳


// 브라우저는 JS엔진 외에서 WebAPI 등과 Callback Queue, EventLoop가 존재

// EventLoop는 CAll stack과 Callback Queue를 주시 
// => call Stasck이 비어지면 들어온 순서대로 Callback Queue에 있는 함수들을 Call Stack에 넣음
// 비동기 작업인 setTimeout은 Web API에서 처리
// => setTimeout의 시간이 지나 완료되면, Callback Queue로 함수가 들어옴
// Callback Queue에는 Web API의 콜백 함수들이 대기