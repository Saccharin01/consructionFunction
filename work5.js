const songRamen = {
  ramenName : "진라면 순한맛",
  class : "볶음면",
  order : [
  "물 300ml", 
  "끓이면서 고추장 반 스푼, 설탕 반 스푼", 
  "후레이크 다 넣기", "스프는 1/2 ~1/3넣기", 
  "물 끓면 면 넣고, 물 다 없어질때까지 졸이기", 
  "체다치즈 한 장 올리기"
],
  bowl: "끓인 냄비 그대로 먹는 편",
  after : ["그냥", "물 한잔"]
}


class ramen {
  constructor(name, brand){
    this.name = name;
    this.brand = brand;
  }

  getName(){
    return this.name
  }

  getBrand(){
    return this.brand
  }
}

class jinramen extends ramen{
  constructor(name, brand)
  {
    super(name,brand)
  }
}