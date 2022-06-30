let myString = "Hello, World!";
let myRegex = /Hello/;
// regular expression은 / / 사이에 쓴다.
// .test 메소드를 통해 해당 정규식을 시험한다.
// -> 결과값은 true 또는 false 형태

let result = myRegex.test(myString); // Change this line