// 이중반복문
// 바깥의 반복문(부모)이 1회 수행할 때마다 안쪽의 반복문(자식)이 매번 처음부터 새로 시작하는 이중 반복문구조
// 두 반복문간의 조건값이 서로 달라야한다. // 부모 i , 자식 j

for(let i=0; i<3; i++){ // 0~3

    console.group('i에 대한 반복 수행 시작 > i = %d',i);

    for(let j=0; j<5; j++){ // 0~4 
        console.log('i = %d, j = %d', i, j);
    }

    console.groupEnd();
}