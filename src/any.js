const any = (promises) => {
  let rejectedCount = 0;
  const rejectedPromises = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => promise
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        rejectedPromises[index] = error;
        rejectedCount += 1;

        if (rejectedCount === promises.length) {
          reject(rejectedPromises);
        }
      })
    );
  }); 
};

export default any;
