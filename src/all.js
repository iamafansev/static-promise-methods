/*
  Если переданный список пуст, то возвращаем обещание со значением []
  Создаем новое обещание, которое и возвращаем
  Обходим переданный список обещаний.
  В каждой итерации повторяем:
  1. Если значение не является обещанием, то приводим к обещанию
  2. Добавляем собственные реакции на текущее обещание:
    a) Если обещание выполняется со статусом "fulfilled",
       то сохраняем значение в результирующий список.
       Если все значения из обещаний получены, то завершаем обещание со статусом "fulfilled"
       со значением результирующего списка.
    b) Если обещание выполняется со статусом "rejected",
       то завершаем обещание со статусом "rejected" со значением полученной ошибки
*/

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
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

export default all;
