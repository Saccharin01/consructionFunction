function old(a, b) {
  this.first = a;
  this.second = b;
}
let test = new old(1,2);
console.log(test);

class newOld {
  constructor(a, b){
    this.first = a;
    this.second = b;
  }
}

let newTest = new newOld(1,2)
console.log(newTest)


/**
 * ? 기능적으로 두 함수는 같으나, 위의 것은 함수라는 뉘양스를
 * ? 아래의 것은 규격이라는 뉘양스를 풍긴다
 * * 이 점이 함수의 리턴값과 생성자 함수의 차이점이다.
 */