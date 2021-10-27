import race from '../src/race';

describe('race', () => {
  it('a fulfilled promise completed faster', async () => {
    const p1 = new Promise((resolve, reject) => setTimeout(reject, 700, new Error('First error')));
    const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'first'));
    const p3 = new Promise((resolve) => setTimeout(resolve, 500, 'third'));

    return expect(race([p1, p2, p3])).resolves.toBe('first');
  });

  it('a rejected promise completed faster', async () => {
    const p1 = new Promise((resolve) => setTimeout(resolve, 700, 'second'));
    const p2 = Promise.reject(new Error('First error'));
    const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'third'));

    return expect(race([p1, p2, p3])).rejects.toThrow('First error');
  });
});
