class MakeCoffee {
  constructor(bean, water, sugar, milk) {
    this.bean = bean;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
}


let test = new MakeCoffee("대전", "300ml", false, false);
console.log(test)