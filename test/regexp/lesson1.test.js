import subLoopStr from '../../code/regexp/lesson1'

test('subLoopStr:1', () => {
  expect(subLoopStr('abcabc')).toBe(true)
})

test('subLoopStr:2', () => {
  expect(subLoopStr('abcabcd')).toBe(false)
})

test('subLoopStr:3', () => {
  expect(subLoopStr('abcabcabcabc')).toBe(true)
})

test('subLoopStr:4', () => {
  expect(subLoopStr('ababab')).toBe(true)
})
