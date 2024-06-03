function HyeonRamen(ramenName,waterFill,ingredient){
  if(ramenName !== "진라면"){
    console.error(`진라면이 아닙니다!`)
  } else {
    let local = {
      ramenName : ramenName,
      waterFill : waterFill,
      ingredient : ingredient
    }
    return local
  }
};
let test1 = HyeonRamen("진라면", "300ml", "고추장")

console.log(test1)