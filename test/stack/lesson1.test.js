import calPoints from '../../code/stack/lesson1'

test('calPoints1', () => {
  expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30)
})

test('calPoints2', () => {
  expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
