// export default (arr, k) => {
//   arr.sort((a, b) => a - b)
//   return arr[arr.length - 1 - k]
// }

export default (arr, k) => {
  let len = arr.length
  let i = len
  while (len - i < k) {
    for (let j = 0, tmp; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    i--
  }
  return arr[len - k]
}
