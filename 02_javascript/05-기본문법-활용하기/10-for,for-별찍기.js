// 별찍기 7줄짜리 가로 8개
/*
    i가 0일때 1회 수행 'j < 1'
    i가 1일때 2회 수행 'j < 2'
    i가 2일때 3회 수행 'j < 3'
    i가 3일때 4회 수행 'j < 4'
    i가 n일때 i+1회 수행 'j < i+1'
 */

for(let i = 0; i < 7; i++){// 행을 담당하는 바깥 반복문 0~6 총 7개 행

    let star = '';

    for(let j = 0; j < i+1; j++){// 열을 담당하는 안쪽 반복문
        star += '*'
        
    }

    console.log(star)
    
}

