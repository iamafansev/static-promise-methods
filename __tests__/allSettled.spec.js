import allSettled from '../src/allSettled';

describe('allSettled', () => {
  it('works with empty list', async () => {
    const actual = await allSettled([]);
    expect(actual).toEqual([]);
  });

  it('works with promises of different status', async () => {
    const p1 = Promise.resolve(3);
    const p2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const actual = await allSettled([p1, p2]);

    expect(actual).toEqual([
      { status: 'fulfilled', value: 3 },
      { status: 'rejected', reason: 'foo' },
    ]);
  });
});
