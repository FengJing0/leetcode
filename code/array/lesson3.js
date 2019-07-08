// 605

export default (arr, n) => {
  let max = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === 0) {
      if (i === 0 && arr[1] === 0) {
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        max++
        i++
      } else if (i === len - 1 && arr[i - 1] === 0) {
        max++
      } else if (i === 0 && len === 1 && n === 1) {
        max++
      }
    }
    if (max >= n) {
      break
    }
  }
  return max >= n
}
