// 분류 규격 라면볶음면{

//   재료들(라면종류, 라면물, 추가재료) {
//     라면종류: 라면종류;
//     라면물: 라면물;
//     추가재료: 추가재료;

//   }
// }

class HyeonRamen {
  constructor(ramenName, waterFill, ingredient) {
    this.ramenName = ramenName,
    this.waterFill = waterFill,
    this.ingredient = ingredient
  }

  set ramenName(ramenName) {
    if(ramenName !== "진라면"){
      console.error(`진 라면이 아닌데요?`);
    };
  }
}

let test = new HyeonRamen("진라면", "300ml", "체다치즈, 고추장, 설탕");

console.log(test)