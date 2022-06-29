function Dog(name) {
  this.name = name;
  // this.numLegs = 4;
}

// 해당 클래스의 모든 인스턴스가 아래의 값을 공유함.
// 그때 사용하는 것이 .prototype
Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");