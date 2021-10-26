import any from '../src/any';

describe('any', () => {
  it('any of the promises was fulfilled', async () => {
    const p1 = Promise.reject('one');
    const p2 = new Promise((resolve) => setTimeout(resolve, 700, 'two'));
    const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'three'));

    const actual = await any([p1, p2, p3]);
    expect(actual).toBe('three');
  });

  it('all promises were rejected', async () => {
    const p1 = Promise.reject('one');
    const p2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'two'));
    const p3 = Promise.reject('three');

    expect(any([p1, p2, p3])).rejects.toEqual(['one', 'two', 'three']);
  });
})
