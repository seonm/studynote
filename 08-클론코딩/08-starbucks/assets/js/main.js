/*
  @Filename : main.js
  @Author : 정선미(misoda1004@gmail.com)
  @Description : 
    hyndai.index.html
*/


document.querySelector('.lnb > li').addEventListener('mouseover',e=>{
  const current = e.currentTarget
  current.classList.add('active');
  if(current.classList.contains('active')){
    const height = current.querySelector('.lnb-detail').clientHeight;
    current.querySelector('.lnb-detail').style.height = height;
    console.log(height)
  }else{
    current.querySelector('.lnb-detail').style.height = '0';
  }
})
document.querySelector('.lnb > li').addEventListener('mouseout',e=>{
  e.currentTarget.classList.remove('active');
})
