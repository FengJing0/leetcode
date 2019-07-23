import maximalRectangle from '../../code/stack/lesson2'

test('maximalRectangle1', () => {
  expect(maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])).toBe(6)
})

test('maximalRectangle2', () => {
  expect(maximalRectangle([['1', '1', '1', '1'], ['1', '1', '1', '1'], ['1', '1', '1', '1']])).toBe(12)
})
