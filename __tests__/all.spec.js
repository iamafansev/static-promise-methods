import all from '../src/all';

describe('all', () => {
  it('works with empty list', async () => {
    const actual = await all([]);
    expect(actual).toEqual([]);
  });

  it('all of the promises was fulfilled', async () => {
    const p1 = Promise.resolve(3);
    const p2 = 1337;
    const p3 = new Promise((resolve) => {
      setTimeout(resolve, 100, "foo");
    });

    const actual = await all([p1, p2, p3]);
    expect(actual).toEqual([3, 1337, 'foo']);
  });

  it('all promises were rejected', async () => {
    const p1 = new Promise((resolve) => {
      setTimeout(resolve, 300, "one");
    });
    const p2 = new Promise((resolve, reject) => {
      setTimeout(reject, 200, 'reject');
    });

    return expect(all([p1, p2])).rejects.toMatch('reject');
  });
});