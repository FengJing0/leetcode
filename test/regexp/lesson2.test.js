import regModeStr from '../../code/regexp/lesson2'

test('regModeStr', () => {
  expect(regModeStr('aaa', 'caa*')).toBe(false)
})

test('regModeStr2', () => {
  expect(regModeStr('a', 'a.')).toBe(false)
})

test('regModeStr3', () => {
  expect(regModeStr('mississippi', 'mis*is*ip*.')).toBe(true)
})

test('regModeStr4', () => {
  expect(regModeStr('ab', '.*c')).toBe(false)
})

test('regModeStr5', () => {
  expect(regModeStr('aaa', 'a.a')).toBe(true)
})

test('regModeStr6', () => {
  expect(regModeStr('aaa', 'a*a')).toBe(true)
})

test('regModeStr7', () => {
  expect(regModeStr('abc', '.*')).toBe(true)
})

test('regModeStr8', () => {
  expect(regModeStr('aaa', 'ab*a*c*a')).toBe(true)
})
