/**
 * ? S: subject 주어
 * ? O: object 목적어
 * ? V: verb 동사
 * 
 * todo KDT 멤버들 객체 만들기
 */

const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const makeMember = require(`./work3.js`)
console.log(makeMember(1,`tryCatch`))

let arrayMembers = [];
// for(let i = 0; i < names.length; i++){
//   let member = makeMember(i, names[i]);
//   arrayMembers.push(member);
// };

// console.log(arrayMembers);

names.forEach((name, index)=>{
  arrayMembers.push(makeMember(index, name))
})
//! 이거 앞 뒤 왜 바뀜???

console.log(arrayMembers)
