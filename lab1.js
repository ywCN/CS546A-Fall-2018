const questionOne = function questionOne(arr) {
  let accum = 0;
  for (const num of arr) {
    accum += num * num;
  }
  return accum;
};

const questionTwo = function questionTwo(num) {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[num];
};

const questionThree = function questionThree(text) {
  // Implement question 3 here
};

const questionFour = function questionFour(num) {
  // Implement question 4 here
};

module.exports = {
  firstName: 'YOUHAO',
  lastName: 'WANG',
  studentId: '10423006',
  questionOne,
  questionTwo,
  questionThree,
  questionFour
};
