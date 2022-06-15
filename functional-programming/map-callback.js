// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  let arr = this;
  for(let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i, this));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);