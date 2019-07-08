export default arr => {
  let result = []
  for (let i = 0, a = 0, b = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[a] = arr[i]
      a += 2
    } else {
      result[b] = arr[i]
      b += 2
    }
  }
  return result
}
