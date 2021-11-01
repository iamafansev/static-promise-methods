const ERROR_MESSAGE = 'All promises were rejected';

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
          const aggregateError = new AggregateError(rejectedPromises, ERROR_MESSAGE);
          reject(aggregateError);
        }
      }));
  });
};

export default any;
