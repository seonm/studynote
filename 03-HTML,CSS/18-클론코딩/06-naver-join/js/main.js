/*
  @Filename : main.js
  @Author : 정선미(misoda1004@gmail.com)
  @Description : 
    .box-wrap 내부의 값들을 target에 넣어
    .box코드에 focus 클래스를 add, remove
*/
function selectGreen(target){
  document.querySelectorAll(`.box-wrap ${target}`).forEach((v, i) =>{
    v.addEventListener('focus', e => {
      const parent = e.currentTarget.closest('.box');
      parent.classList.add('focus');
    });
    v.addEventListener('blur', e => {
      const parent = e.currentTarget.closest('.box');
      parent.classList.remove('focus');
    });
  })
}
selectGreen('input');
selectGreen('select');

/*
  @Filename : main.js
  @Author : 정선미(misoda1004@gmail.com)
  @Description : 
    전화번호 입력완료시 인증번호 입력창 활성화
*/
function disable(){
  let phoneInput = document.querySelector('.phone-box2 .box').value;
  const phone = document.querySelector('.phone');
  if(phoneInput == undefined || phoneInput == '' ){
    phone.querySelector('.phone-box3').classList.add('disabled')
    phone.querySelector('#userTelPass').disabled = true;
  }else{
    document.querySelector('.phone-box3').classList.remove('disabled')
    phone.querySelector('#userTelPass').disabled = false;
  }
}
document.querySelector('.phone-box2 input').addEventListener('change',e=>{
  disable()
});

document.querySelector('#userTelBtn').addEventListener('click',e=>{
  e.preventDefault()
})

/*
  @Filename : main.js
  @Author : 정선미(misoda1004@gmail.com)
  @Description : 
    정규표현식 검사 수행
    * 관련파일
      - BadRequestException.js
      - RegexHelper.js
*/
document.querySelector("#joinForm").addEventListener('submit', e => {
  e.preventDefault();
  const regexHelper = new RegexHelper();

  try {
    /* 아이디 검사 */
    regexHelper.value('#userId', '아이디를 입력하세요.');
    regexHelper.minLength('#userId', 4, '아이디는 최소 4자 이상 입력 가능합니다.');
    regexHelper.maxLength('#userId', 20, '아이디는 최대 20자 까지만 입력 가능합니다.');
    regexHelper.engNum('#userId', '아이디는 영어와 숫자 조합만 입력 가능합니다.')

    /* 비밀번호 검사 */
    regexHelper.value('#userPw', '비밀번호를 입력하세요.');
    regexHelper.minLength('#userPw', 4, '비밀번호는 최소 4자 이상 입력 가능합니다.');
    regexHelper.maxLength('#userPw', 20, '비밀번호는 최대 20자 까지만 입력 가능합니다.');
    regexHelper.compareTo('#userPw','#userPwRe', '비밀번호 확인이 잘못되었습니다.')

    /* 이름 검사 */
    regexHelper.value('#userName', '이름을 입력하세요.');
    regexHelper.minLength('#userName', 2, '이름은 최소 2자 이상 입력해주세요.')
    regexHelper.maxLength('#userName', 20, '이름은 최대 20자 까지만 입력 가능합니다.')
    regexHelper.kor('#userName', '이름은 한글만 입력 가능합니다.')

    /*생년월일*/
    regexHelper.value('#userBirthY', '태어난 년도를 입력하세요.');
    regexHelper.minLength('#userBirthY', 4, '연도는 최초 4자 이상 입력해주세요.');
    regexHelper.maxLength('#userBirthY', 4, '연도는 최대 4자 까지만 입력 가능합니다.');
    
    regexHelper.dropdown('#userBirthM', '태어난 월을 선택하세요.');

    regexHelper.value('#userBirthD', '태어난 일을 입력하세요.');
    regexHelper.minLength('#userBirthD', 1, '일은 최초 1자 이상 입력해주세요.');
    regexHelper.maxLength('#userBirthD', 2, '일은 최대 2자 까지만 입력 가능합니다.');
    
    /* 성별 검사 */
    regexHelper.dropdown('#userGender', '성별을 선택하세요.');

    /* 이메일 검사 */
    regexHelper.value('#userEmail', '이메일을 입력하세요.');
    regexHelper.email('#userEmail', '이메일 주소가 잘못되었습니다.');

    /* 연락처 검사 */
    regexHelper.value('#userTel', '연락처를 입력하세요.');
    regexHelper.phone('#userTel', '연락처가 잘못되었습니다.');

    /* 인증번호 검사 */
    regexHelper.value('#userTelPass', '인증번호를 입력하세요.');
    regexHelper.num('#userTelPass', '인증번호가 잘못되었습니다.');
    regexHelper.maxLength('#userPw', 8, '인증번호는 8자리입니다.');

  } catch (e) {
    alert(e.message);
    console.error(e);
    document.querySelector(e.selector).focus();
    return;
  }

  // 처리 완료
  alert('회원가입 완료')
})