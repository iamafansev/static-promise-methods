const all = (promises) => {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  let completedCount = 0;
  const results = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise) // если значение не промис
        .then((result) => {
          results[index] = result;
          completedCount += 1;

          if (completedCount === promises.length) {
            resolve(results)
          }
        })
        .catch(reject)
    });
  });
};

export default all;
