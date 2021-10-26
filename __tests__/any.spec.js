import any from '../src/any';

describe('any', () => {
  it('any of the promises was fulfilled', async () => {
    const p1 = Promise.reject(new Error('First error'));
    const p2 = new Promise((resolve) => setTimeout(resolve, 700, 'second'));
    const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'third'));

    const actual = await any([p1, p2, p3]);
    expect(actual).toBe('third');
  });

  it('all promises were rejected', async () => {
    const p1 = Promise.reject(new Error('First error'));
    const p2 = new Promise((resolve, reject) => setTimeout(reject, 200, new Error('Second error')));
    const p3 = Promise.reject(new Error('Third error'));

    const expected = [new Error('First error'), new Error('Second error'), new Error('Third error')];
    return expect(any([p1, p2, p3])).rejects.toEqual(expected);
  });
});
