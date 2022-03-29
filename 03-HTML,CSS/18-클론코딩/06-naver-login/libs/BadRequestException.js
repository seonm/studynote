/*
  @Filename : BadRequestException.js
  @Author : 정선미(misoda1004@gmail.com)
  @Description : 
    커스텀 에러와 에러 확장
    * 관련파일
      - RegexHelper.js
      - main.js
*/

class BadRequestException extends Error{
  constructor(msg = '잘못된 요청입니다.', selector = null){
    super(msg);
    this._statusCode = 400;
    this._selector = selector;
  }
  get statusCode(){
    return this._statusCode;
  }
  get selector(){
    return this._selector;
  }
  set selector(params){
    this._selector = params;
  }
}

// for node.js
// module.exports = BadRequestException;