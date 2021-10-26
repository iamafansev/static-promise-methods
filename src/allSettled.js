import all from './all';

const allSettled = (promises) => {
  const mappedPromises = promises.map((promise) => promise
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({ status: 'rejected', reason: error })));

  return all(mappedPromises);
};

export default allSettled;
