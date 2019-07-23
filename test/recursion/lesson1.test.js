import restoreIpAddresses from '../../code/recursion/lesson1'

test('restoreIpAddresses1', () => {
  expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
})
