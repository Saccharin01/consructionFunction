class MakeCoffee {
  constructor(bean, water, sugar, milk) {
    this.bean = bean;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
  set bean(value){
    if(typeof(value)==='string'){
      this._bean = value;
      // ? 언더바 (`_`)의 의미는 세팅값을 통과한 무언가 라는 관례적 표현
    } else {
      console.error(`bean은 문자열이여야 합니다.`);
    }
  }
  get bean(){
    return this._bean + "산";
  }

  set water(value){
    if(typeof(value)==='number'){
      this._water = value;
    } else {
      console.error(`water은 숫자여야 합니다.`)
    }

  }
  get water() {
    return this._water +"ml"
  }


  set sugar(value){
    if(typeof(value) === 'boolean'){
      this._sugar = value
    } else {
      console.error(`sugar은 불리언 타입이여야 합니다.`)
    }
  }

  get sugar(){
    if(this._sugar === true){
      return "단 맛"
    } else {
      return "쓴 맛"
    }
  }
  set milk(value){
    if(typeof(value) === `boolean`){
      this._milk = value
    } else {
      console.error(`Milk는 불리언 타입이여야 합니다.`)
    }
  }
  get milk(){
    if(this._milk === true){
      return "우유 첨가"
    } else {
      return "우유 미첨가"
    }
  }

}


let test = new MakeCoffee("대전", 300, true, false);
console.log(test)

console.log(test.bean)
console.log(test.water)
console.log(test.sugar)
console.log(test.milk)