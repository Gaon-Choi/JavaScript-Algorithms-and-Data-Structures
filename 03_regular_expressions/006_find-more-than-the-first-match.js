let twinkleStar = "Twinkle, twinkle, little star";

// 지금까지는 1개만 검색
// 이젠 여러 개를 해보고 싶은거임 -> g flag를 사용하면 된다.

let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line