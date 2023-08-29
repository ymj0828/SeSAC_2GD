// 오브젝트를 생성
/* 
  속성
      만들어진 연도 year
      집의 이름 name
      창문의 갯수 window
  함수
      만들어진 연도를 콘솔창에 출력하는 '건물의 나이'
      창문의 갯수를 콘솔창에 출력하는 함수
*/

class House{
  constructor(year, name, window){
    this.year = year
    this.name = name
    this.window = window
  }

  getAge(){
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 지났어요`);
  }
  getWindow(){
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}
const house1 = new House(1789, '자이', 10);
console.log(house1);  // House { year: 1789, name: '자이', window: 10 }
house1.getAge();  // 자이는 건축한지 234년 지났어요
house1.getWindow();  // 자이의 창문은 10개 입니다.
console.log('--------')

const house2 = new House(2022, '자이', 10);
house2.getAge()
house2.getWindow()
console.log(house2.name);
console.log('----상속----');

/* 
추가할 속성
    층수 floor
    창문 제조업체 windowMaker
추가할 함수
    aptInfo() 아파트 정보를 나타내는 메소드
*/
class Apartment extends House{
  constructor(year, name, window, floor, windowMaker){
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo(){
    return `${this.year}에 지어진 ${this.name}.
    총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
  }
  getWindow(){
    return `${this.name}아파트의 ${this.window}개의 창문은
    ${this.windowMaker}에서 만들었습니다.`
  }
}

const apt1 = new Apartment(2020, 'raemian', 6, 19, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
apt1.getAge()
console.log(apt1.getWindow())


/* 실습문제 */
/* Shape 클래스
속성: width, height
함수: getArea()
*/

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle1 = new Shape(3, 4);
console.log(rectangle1.getArea());

// Rectangle 클래스
class Rectangle extends Shape {
  // 속성 추가를 하지 않는다면 constuctor로 정의하지 않아도 됨
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
const rectangle2 = new Rectangle(6, 8);
console.log(rectangle2.getArea());
console.log(rectangle2.getDiagonal());

// Triangle 클래스
class Triangle extends Shape {
  // overriding
  // 함수의 이름은 같지만 기능은 다르게 쓰고 싶을 때
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const triangle1 = new Triangle(3, 4);
console.log(triangle1.getArea());

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  // overriding
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
const circle = new Circle(1, 1, 5);
console.log(circle.getArea());