/* if문 */
// if(조건식){ 조건식이 참일 때 실행할 문장; }
if (5 < 3) {
  console.log("얍");
}

// let number = Number(prompt("숫자를 입력해주세요"));
// console.log(typeof number);
// if ~ else ...
/* 
if(조건){
  // 조건이 참일 때 실행할 문장
}else{
  // 조건이 거짓일 때 실행할 문장
}
*/

// if (number > 10) {
//   // alert('10보다 큽니다.')
//   console.log('10보다 큼');
// } else {
//   // alert('10이거나, 10보다 작습니다.')
//   console.log('10이거나, 10보다 작습니다.')
// }

// if(number > 10){
//   console.log('10보다 큽니다.');
// }else if(number === 10){
//   console.log('입력한 수가 10이네요.')
// }else{
//   console.log('10보다 작은수입니다.')
// }

/* 성적 산출 프로그램 */
// 0 ~ 100 까지의 수 입력
// 91 ~ 100 A
// 81 ~ 90 B
// 71 ~ 80 C
// 61 ~ 70 D
// 나머지는 F
// if(number >= 90){
//   console.log("A");
// }else if(number >= 80){
//   console.log('B');
// }else if(number >= 70){
//   console.log('C');
// }else if(number >= 60){
//   console.log('D');
// }else{
//   console.log('F');
// }

// login();
/* switch ~ case */
// switch(값){
  //   case 1:
  //       // 값이 1이라면 실행할 문장
  //       break;
  //     case 'abcd':
  //       // 값이 'abcd'라면 실행할 문장
  //       break;
  //     default:
  //       // 위의 case가 모두 일치하지 않을 때 실행할 문장
  //       break;
  // }

  let a = 4;
  switch(a){
    case 3:
      console.log('입력값이 4보다 작습니다.');
      break;
    case 4:
      console.log('입력값이 4입니다.');
      break;
    case 5:
      console.log('a는 5입니다.');
      break;
    default:
      console.log('3,4,5가 아니네요');
      break;
  }

let num = 5;
if(num % 2 === 0){
  console.log('짝수')
}else{
  console.log('홀수')
}

/* 삼항연산자
조건 ? (조건이 참일 때)실행1:(조건이 거짓일 때)실행2
*/
let result = num % 2 === 1 ? "홀수" : "짝수"
console.log(result)

let now = new Date().getHours();

let ampm = now < 12 ? "오전" : "오후"
console.log(ampm)
