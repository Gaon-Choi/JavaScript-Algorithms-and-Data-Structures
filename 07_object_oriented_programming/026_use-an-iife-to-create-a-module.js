// 이전에 이야기한 "만들자마자 실행하는 함수"를
// IIFE라고 한다.
// immediately invoked function expression

// 이러한 IIFE 여러개를 하나의 모듈로 묶고 싶은거임.

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();