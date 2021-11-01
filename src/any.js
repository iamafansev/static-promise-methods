/*
  Создаем новое обещание, которое и возвращаем
  Обходим переданный список обещаний.
  В каждой итерации повторяем:
  1. Добавляем собственные реакции на текущее обещание:
    a) Если обещание выполняется со статусом "fulfilled",
       то завершаем обещание со статусом "fulfilled" и полученным значением.
    b) Если обещание выполняется со статусом "rejected",
       то сохраняем причину в результирующий список ошибок.
       Если все обещание были завершены ошибкой,
       то завершаем обещание со статусом "rejected" со значением результирующего списка ошибок.
*/

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
