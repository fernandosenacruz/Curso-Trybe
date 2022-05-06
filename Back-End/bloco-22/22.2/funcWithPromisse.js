function calcDiv(n1, n2) {
  const promise = new Promise((resolve, reject) => {
    if (n2 == 0) reject(new Error('pode não mané!'));
    const result = n1 / n2;

    resolve(result);
  });

  return promise;
}

calcDiv(10,2)
  .then((result) => console.log(result))
  .catch((error) => console.log('error: %s', error.message));