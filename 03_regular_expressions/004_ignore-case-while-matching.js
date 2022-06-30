let myString = "freeCodeCamp";

// i flag는 아래와 같이 대소문자 구분을 없애버림.

let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);