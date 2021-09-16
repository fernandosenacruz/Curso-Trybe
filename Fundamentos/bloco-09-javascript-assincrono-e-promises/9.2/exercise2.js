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
  resolve(arrSum);
})
  .then((arrSum) => console.log(`Promise resolvida: ${arrSum}`))
  .catch((arrSum) => console.log(`Promise rejeitada: ${arrSum}`));