// console.log(__dirname);
// console.log(global);

const personOne = {
  fName: "Jeff",
  age: 32,
  likes: "Doggos",
  //   isCool: true,
};

const {
  fName,
  lName = "Wooferson",
  age,
  isCool: likesPeople = false,
} = personOne;

console.log(fName);
console.log(lName);
console.log(age);
console.log(likesPeople);
