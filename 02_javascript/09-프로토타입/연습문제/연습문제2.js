function Rectangle(width, height){
  this._width = width;
  this._height = height;
}
Rectangle.prototype = {
  get width(){
    return this._width;
  },
  set width(para){
    this._width = para;
  },
  get height(){
    return this._height;
  },
  set height(para){
    this._height = para;
  },
  getAround: function(){
    return (this.width + this.height) * 2
  },
  getArea: function(){
    return this.width * this.height
  }
}

const rectangle1 = new Rectangle(10,5);
console.log(`둘레는 ${rectangle1.getAround()}, 넓이는${rectangle1.getArea()}` )