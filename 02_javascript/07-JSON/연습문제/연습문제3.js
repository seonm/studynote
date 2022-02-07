covid19 = [
  {date: '0125', active: 426}, 
  {date: '0126', active: 343}, 
  {date: '0127', active: 547}, 
  {date: '0128', active: 490}, 
  {date: '0129', active: 460}, 
  {date: '0130', active: 443}, 
  {date: '0131', active: 338}, 
  {date: '0201', active: 299}
]
let sum = 0;
let avg = 0;

let max = covid19[0]['active']
let date = max.date

for(let i in covid19){
  //console.log(covid19[i]['active'])
  sum += covid19[i]['active']

  if(max < covid19[i]['active']){
    max = covid19[i]
  }

}
avg = sum / covid19.length
console.log('누적 확진자 수: '+ sum + '\n평균 확진자 수: '+ avg)
console.log('확진자가 가장 많이 나타난 날 : '+ max['date'])



