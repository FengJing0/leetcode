// 459

export default str => /^([a-z]+)\1+$/.test(str)

// export default s => {
//   let res = false
//   for (let i = 1; i <= s.length / 2; i++) {
//     if (s.length % i !== 0) continue
//     let tmp = s.substring(0, i)
//     res = true
//     for (let j = i; j < s.length; j=j+i) {
//       if (tmp !== s.substring(j, j + i)) {
//         res = false
//         break
//       }
//     }
//     if (res) break
//   }
//   return res
// }
