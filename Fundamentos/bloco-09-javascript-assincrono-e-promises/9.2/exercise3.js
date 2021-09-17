const division = (number) => {
    let arr2 = [Math.round(number / 2), Math.round(number / 3), Math.round(number / 5), Math.round(number / 10)];
    return arr2;
}

const promise = new Promise((resolve, reject) => {
  let arr = [];
  for (let index = 0; index < 10; index++) {
    let n = Math.floor(Math.random() * 50 + 1);
    n *= n;
    arr.push(n);
    n = 0;
  }
  const arrSum = arr.reduce((acc, cur) => acc + cur);
  if (arrSum > 8000) reject(arrSum);
  const result = division(arrSum);
  resolve(result);
})
.then((arrSum) => arrSum)
.then((arrSum) => console.log(arrSum.reduce((acc, cur) => acc + cur), arrSum))
.catch((arrSum) => console.log(`${arrSum} É mais de oito mil! Esse promise deve estar quebrada!`));

// console.log(division(5000));