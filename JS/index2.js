// 5. Array 배열
let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits2 = new Array("orange", "kiwi", "mango", "apple");
console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

console.log(fruits2[2]);

// 이차원 배열, 배열 안에 배열이 있는 형태
let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["거", "너", "더"],
];
console.log(kr[0][1]);
console.log(kr[2][2]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);
console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);
// console.log(`${letters[3][0]+letters[1][3]+letters[0][1]+letters[0][3]+letters[2][2]}`)

// 6. Object
// 배열은 순서가 있는 반면에
// 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
};

console.log(cat);
// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
// 대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);
cat["gender"] = "F";
console.log(cat);
cat["parent"] = ["mom", "dad"];
console.log(cat);

console.log("------typeof-----");
let und;
console.log(typeof "문자");
console.log(typeof 245);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});
// 형변환
// let likeNum = prompt("가장 좋아하는 숫자는?");
// likeNum = Number(likeNum);
// console.log(likeNum + 10);
// 1. >> 문자
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());

// 2. >> 숫자
let n1 = true; // boolean
let n2 = false; // boolean
let n3 = 123; // number
let n4 = "3.14"; // string

console.log(typeof Number(n1)); // true -> 1
console.log(typeof Number(n2)); // false -> 0

console.log(typeof Number(n4)); // 3.14
console.log(Number(n4)); // 3.14
console.log(typeof parseInt)