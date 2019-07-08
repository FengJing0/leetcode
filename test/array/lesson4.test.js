import grayCode from '../../code/array/lesson4'

test('grayCode:1', () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2])
})

test('grayCode:0', () => {
  expect(grayCode(0)).toEqual([0])
})
