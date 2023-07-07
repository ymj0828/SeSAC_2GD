// $('선택자')
// document.querySelector('선택자')

console.log($('button'));
$('button').css('color', 'red');

// 글자와 속성 변경
function submitjs(){
  const div1 = document.querySelector('.div1');
  div1.innerHTML = '<b> 반갑습니다. </b>'
  div1.setAttribute('style', 'border : 2px solid red;')
}
function submitjq(){
  $('.div1').html('<li>잘 지내세요 여러분..🥲</li>');
  $('.div1').css('border', '3px dotted blue');
}