import sort from '../../code/sort/lesson3'

test('sort:input2', () => {
  expect(sort([3, 6, 9, 1])).toBe(3)
})

test('sort:input3', () => {
  expect(sort([10])).toBe(0)
})

test('sort:input4', () => {
  expect(sort([1, 3, 100])).toBe(97)
})
