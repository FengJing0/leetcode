import sort from '../../code/sort/lesson6'

test('sort1', () => {
  expect(sort([1, 2, 0])).toBe(3)
})

test('sort2', () => {
  expect(sort([3, 4, -1, 1])).toBe(2)
})

test('sort3', () => {
  expect(sort([7, 8, 9, 11, 12])).toBe(1)
})

test('sort4', () => {
  expect(sort([0, 2, 2, 1, 1])).toBe(3)
})
