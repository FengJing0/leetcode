import sort from '../../code/sort/lesson5'

test('sort1', () => {
  expect(sort([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})

test('sort2', () => {
  expect(sort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})

test('sort3', () => {
  expect(sort([7, 8, 9, 11, 12])).toBe(1)
})
