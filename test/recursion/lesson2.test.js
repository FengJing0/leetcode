import findSubstring from '../../code/recursion/lesson2'

test('findSubstring1', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})

test('findSubstring2', () => {
  expect(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toEqual([6, 9, 12])
})

test('findSubstring3', () => {
  expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])).toEqual([8])
})

test('findSubstring4', () => {
  expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})

test('findSubstring5', () => {
  expect(findSubstring('ababaab', ['ab', 'ba', 'ba'])).toEqual([1])
})
