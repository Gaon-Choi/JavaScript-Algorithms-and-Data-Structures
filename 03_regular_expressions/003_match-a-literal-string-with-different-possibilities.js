let petString = "James has a pet cat.";
// 포함하는 단어에 대한 OR 조건은 |을 씀
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);