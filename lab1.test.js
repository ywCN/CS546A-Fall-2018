const lab1 = require('./lab1');

console.log(lab1.questionOne([1, 2, 3]));
// should output 14
console.log(lab1.questionOne([0, 0, 0, 1]));
// should output 1
console.log(lab1.questionOne([-1, 0, 1, -7]));
// should output 51
console.log(lab1.questionOne([100, 1000, 10000, 100000]));
// should output 10101010000
console.log(lab1.questionOne([-2, 22]));
// should output 488

console.log(lab1.questionTwo(7));
// should output 13

console.log(
  lab1.questionThree(
    "Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere."
  )
);
// should output 196

console.log(lab1.questionFour(10));
// should output 3628800
