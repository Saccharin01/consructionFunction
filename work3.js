function workThree(index, name) {
  let local = {
    Number : index + 1,
    name : name
  };

  return local;
};

module.exports = workThree;
