// let randomNumber=Math.floor(Math.random() * 11);
// console.log(randomNumber);

// function getRandomNumber(){
//   return Math.floor(Math.random() * 11.0);
// }
// console.log(getRandomNumber());

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(getRandomNumber(0,10));
