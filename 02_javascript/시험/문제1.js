const ssn = '9203211';
const ssnGender = ssn.substring(6,7);
const ssnYear = parseInt(ssn.substring(0,2));

const year = ssnGender == 1 || ssnGender == 2 ? ssnYear + 1900 : ssnYear + 2000;
const age = new Date().getFullYear() - year + 1;
const gender = ssnGender == 1 || ssnGender == 3 ? '남자' : '여자';
console.log(`당신은 ${age}세 ${gender}입니다.`)