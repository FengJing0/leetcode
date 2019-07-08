// 696. 计数二进制子串

// export default str => {
//   let r = []
//   let match = str => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let regexp = new RegExp(`^(${j}${o})`)
//     if (regexp.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//
//   for (let i = 0, len = str.length - 1; i < len; i++) {
//     let sub = match(str.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }
//
//   return r.length
// }

export default str => {
  let n = 0
  let pre = 0
  let curr = 1
  for (let i = 0, len = str.length; i < len - 1; i++) {
    if (str[i] === str[i + 1]) {
      curr++
    } else {
      pre = curr
      curr = 1
    }
    if (pre >= curr) n++
  }
  return n
}
