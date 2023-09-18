function printSome<T>(x: T) {
  return x;
}

printSome<string>("a");
printSome<boolean>(true);
printSome<number[]>([1, 2, 3, 4, 5]);

function printSome2<T>(x: T, y: T): void {
  console.log(x);
  console.log(y);
}

printSome2<number>(1, 2);
printSome2<string>("안녕", "hello");

function printSome3<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}

printSome3<string, boolean>("hello", false);

const arrLength = <T>(arr: T[]) => {
  return arr.length;
};

const arr_1 = [1, 2, 3, 5, 6]; // number[]
const arr_2 = ["pineapple", "mango"]; // string[]
const arr_3 = [[12, 13], [20, 21], [10]]; // number[number[]]
console.log(arrLength<number>(arr_1))
console.log(arrLength<string>(arr_2))
console.log(arrLength<number[]>(arr_3))

// 실습문제
console.log("--------실습--------");

function arrElement<T>(arr: T[], index:number): T | boolean{
  // arr의 길이보다 index가 크거나 같다면 
  if(arr.length <= index){
    return false;
  }
  return arr[index];
}

console.log(arrElement<number>([1, 2, 3, 4, 5, 6, 8, 8], 5));
console.log(arrElement<boolean>([true, false], 3))