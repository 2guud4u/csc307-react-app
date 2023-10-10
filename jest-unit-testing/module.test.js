import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});
test('Testing match -- failure', () => {
  const expected = false;
  const got = mut.containsNumbers("j");
  expect(got).toBe(expected);
});
test('Testing match -- success', () => {
  const expected = true;
  const got = mut.containsNumbers("jeahfeaod2");
  expect(got).toBe(expected);
});
test('Testing match -- failure', () => {
  const expected = false;
  const got = mut.containsNumbers(" ");
  expect(got).toBe(expected);
});
test('Testing match -- success', () => {
  const expected = true;
  const got = mut.containsNumbers(0);
  expect(got).toBe(expected);
});
