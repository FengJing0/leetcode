// 164

export default arr => {
  if (arr.length < 2) return 0

  arr.sort((a, b) => a - b)

  let max = 0

  for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
    tmp = arr[i + 1] - arr[i]
    if (tmp > max) {
      max = tmp
    }
  }

  return max
}

// export default arr => {
//   let max = 0
//   if (arr.length < 2) return 0
//   if (arr.length === 2) return Math.abs(arr[0] - arr[1])
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0, tmp; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         tmp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = tmp
//       }
//     }
//     if (i < arr.length - 1) {
//       let tmp = arr[i + 1] - arr[i]
//       if (tmp > max) {
//         max = tmp
//       }
//     }
//   }
//   return max
// }
