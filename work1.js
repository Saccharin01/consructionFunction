/**
 * ? 이 파일은 기본 함수 연습 파일입니다.
 * ? 목적은 함수를 조금 더 이해하려고 합니다.
 * ? 매개변수가 객체인 경우가 아래에 작성 될 예정입니다.
 */
function workOne(a, b){
  /** 
   * * logic comment 
   * *매개변수 두 개를 받은 다음, 리턴은 객체
   * * 매개변수 a, b가 객체의 key, value가 되었으면 좋겠다
   * * Condition : 매개변수가 모두 "문자열"이여야 함ㅁ
   * */
  if(typeof(a)==="string"){
    if(typeof(b)==="string"){
      let localVariable = {
      };
      localVariable[a] = a;
      localVariable[b] = b;
    
      return localVariable;
    }
    else{
      console.error("B Argument Type is not String")
    }
  }else{
    console.error("A Argument Type is not String")
  }
} 
console.log(workOne("1", 2))
workOne()