function workThree(index, name) {
  let local = {
    Number : index+1,
    name : name
  };

  return local;
};

let check = workThree(0, "alpha")
console.log(check)

