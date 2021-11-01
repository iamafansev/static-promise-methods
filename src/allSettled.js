import all from './all';

/*
  Обходим переданный список обещаний (в результате должны получить новый список).
  В каждой итерации повторяем:
  1. Добавляем собственные реакции на текущее обещание:
     a) Если обещание выполняется со статусом "fulfilled",
       то возвращаем полученное значение и актуальный статус.
     b) Если обещание выполняется со статусом "rejected",
       то, возвращаем полученную причину завершения и актуальный статус
  2. Дожидаемся вополнения всех обещаний и возвращаем обещание со списком значений.
*/

const allSettled = (promises) => {
  const mappedPromises = promises.map((promise) => promise
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({ status: 'rejected', reason: error })));

  return all(mappedPromises);
};

export default allSettled;
