// function myGame(n){
//   let num = 0;

//   const str = '369'
  
//   for(let i = 1; i <= n; i++){
//     let clap = '짝'
//     let str = i + '';
    
//     for(let j of str){
//      if(i == 3||i == 6||i == 9){
//       console.log(clap + str)
//       num++
//     }
//     }
//   }
//   console.log(`박수를 총 ${num}번 쳤습니다.`)
// }
// myGame(35)
function myGame(n){

  // 한숫자당 자릿수 계산
  let numChair = 0  
  for(let i = 1; i <=n; i++){
    i = i + '';
    //console.log(str,i)
    for(let j of i){
      if (i == 3 || i == 6 || i == 9 ){
        console.log('clap')
        numChair++
      }
      if(numChair == 0){
        console.log(i)
      }else{
        console.log(i.length)
      }
    }
    console.log('--')
    
  }
}

myGame(35)