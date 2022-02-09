class Rectangle{
  constructor(width, height){
    this._width = width;
    this._height = height;
  }
  set width(value){
    this._width = value
  }
  get width(){
    return this._width
  }
  set height(value){
    this._height = value
  }
  get height(){
    return this._height
  }
  getAround(){
    if(!this._width || !this._height){
      '값을 입력하세요.'
    }
    return (this._width + this._height) * 2;
  }
  getArea(){
    if(!this._width || !this._height){
      '값을 입력하세요.'
    }
    return this._width * this._height;
  }
}
const ara = new Rectangle(10,5);
console.log(`둘레의 길이는 ${ara.getAround()}이고 넓이는 ${ara.getArea()}입니다.`);