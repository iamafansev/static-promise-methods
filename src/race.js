const race = (promises) => new Promise((resolve, reject) => {
  promises.forEach((promise) => {
    promise.then((result) => resolve(result)).catch((err) => reject(err));
  });
});

export default race;
