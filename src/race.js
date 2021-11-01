/*
  Обходим переданный список обещаний.
  В каждой итерации повторяем:
  1. Навешиваем собственные реакции на текущее обещание:
     a) Если обещание выполняется со статусом "fulfilled",
       то завершаем выполнение обещания со полученным значением.
     b) Если обещание выполняется со статусом "rejected",
       то завершаем выполнение обещания с полученной причиной.
*/

const race = (promises) => new Promise((resolve, reject) => {
  promises.forEach((promise) => {
    promise.then((result) => resolve(result)).catch((err) => reject(err));
  });
});

export default race;
