let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
// mixin: 상속 관계 등이 전혀 맞지 않는 두 개 이상의 클래스에
// 같은 메소드를 만들어야 하는 경우에 사용 가능한 것
// 예시) 날기(fly) 기능: 새, 비행기 --> 그러나 새와 비행기 사이에는 아무런 연관이 없음.

let glideMixin = function(obj) {
  obj.glide = function() {

  }
}

glideMixin(bird);
glideMixin(boat);