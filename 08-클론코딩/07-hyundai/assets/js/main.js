/*
  @Filename : main.js
  @Author : 정선미(misoda1004@gmail.com)
  @Description : 
    hyndai.index.html
*/

// 회사소개 마우스 hover시 event
document.querySelector('#lnbHover').addEventListener('mouseover',e=>{
  stop();
  document.querySelector('.lnb-2dep').classList.add('active');
})

// @Para (element) : 제거할 요소
// @Description : btnClose 클릭시 element 미노출 처리
function close(element){
  element = document.querySelector(element);
  //console.log(element)
  element.querySelector('#btnClose').addEventListener('click',e=>{
    element.classList.remove('active');
    const body = document.querySelector('body')
    body.classList.contains('modal')?body.classList.remove('modal'):false;
  })
}
close('.lnb-2dep');
close('.search-modal');


// @Description : 검색아이콘 클릭시 검색폼 활성화 및 바디 모달효과 
document.querySelector('.search-i').addEventListener('click',e=>{
  stop();
  document.querySelector('.search-modal').classList.toggle('active');
  document.querySelector('body').classList.toggle('modal');
})


// @Description : input에 입력발생시 reset버튼 활성화
document.querySelector('#searchInput').addEventListener('keyup',e=>{
  const close = e.currentTarget.nextElementSibling;
  close.classList.add('active');
})


// @Description : ul로 만든 slelectbox
function selectLan(){
  stop();
  document.querySelector('.gnb .lan').addEventListener('click',e=>{
    
    e.currentTarget.classList.toggle('active');
  
    document.querySelectorAll('.selectbox li').forEach((v, i)=>{
      v.addEventListener('click',e => {
        const parent = e.currentTarget.parentElement;
        Array.from(parent.children).forEach((v,i)=>{
          v.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected')
        
      })
    })
    
  })
}
selectLan();

// @Description : header 이벤트 중복 제거(초기화)
function stop(){
  document.querySelector('.gnb .lan').classList.remove('active')
  document.querySelector('.lnb-2dep').classList.remove('active')
  document.querySelector('.search-modal').classList.remove('active')
  document.querySelector('body').classList.remove('modal');
}




