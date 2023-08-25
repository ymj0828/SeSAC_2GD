const flowers = ['rose', 'sunflower', 'tulip'];

function getFlowers(idx){
  if(idx > flowers.length || idx < 0) return '잘못된 index';
  return flowers[idx];
}

// es6에서 module을 내보내는 방법
// export {flowers, getFlowers};

// as 이용 별칭
export {flowers as flr, getFlowers as getFlr}