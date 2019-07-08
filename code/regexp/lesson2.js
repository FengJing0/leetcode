// 10
// export default (str, mode) => {
//   if (mode === '.' && str.length === 1) {
//     return true
//   } else if (mode === '.' && str.length !== 1) {
//     return false
//   }
//
//   let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
//   let cur = 0
//   let strLen = str.length
//
//   for (let i = 0, len = modeArr.length, m; i < len; i++) {
//     m = modeArr[i].split('')
//     if (m[1] && m[1] === '*') {
//       if (m[0] === '.') {
//         cur = strLen
//         continue
//       } else {
//         while (str[cur] === m[0]) {
//           cur++
//         }
//       }
//     } else {
//       if (m[0] === '.' && m.length === 1 && i === len - 1) {
//         cur++
//         break
//       }
//       for (let j = 0, jl = m.length; j < jl; j++) {
//         if (m[j] !== str[cur]) {
//           return false
//         } else {
//           cur++
//         }
//       }
//     }
//   }
//
//   return cur === strLen
// }

// export default (str, mode) => {
//   let cur = 0
//   let strLen = str.length
//
//   for (let i = 0, len = mode.length; i < len; i++) {
//     if (mode[i] === '.') {
//       if (mode[i + 1] && mode[i + 1] === '*') {
//         let last = mode[i + 2]
//         if (last) {
//           cur = str.indexOf(last, cur)
//           i += 2
//         } else {
//           const item = str[cur]
//           while (str[cur] === item) {
//             cur++
//           }
//         }
//       } else {
//         cur++
//       }
//     } else {
//       if (mode[i + 1] === '*') {
//         if (str[cur] === mode[i]) {
//           while (str[cur] === mode[i]) {
//             cur++
//           }
//           i++
//           if (mode[i + 1]) {
//             i++
//           }
//         } else {
//           i += 2
//         }
//       } else {
//         if (str[cur] === mode[i]) {
//           cur++
//         } else {
//           return false
//         }
//       }
//     }
//   }
//
//   return cur === strLen
// }

export default (str, mode) => {
  let cur = 0
  let strLen = str.length
  if (mode === '.*') return true
  if (mode === '') return false
  let modeArr = mode.match(/[a-z]+(?=([a-z.](\*|$))|\.[a-z]|$)|([a-z]\*)|(\.\*?)/g)

  for (let i = 0, len = modeArr.length; i < len; i++) {
    let item = modeArr[i]
    if (item === '.') {
      cur++
    } else if (item === '.*') {
      if (i === len - 1) {
        return true
      } else {
        cur = str.indexOf(modeArr[i + 1][0], cur)
      }
    } else if (/^[a-z]+$/g.test(item)) {
      for (let j = 0, jl = item.length; j < jl; j++) {
        if (str[cur] !== item[j]) return false
        cur++
      }
    } else if (/^[a-z]\*$/g.test(item)) {
      if (str[cur] === item[0]) {
        while (str[cur] === item[0]) {
          cur++
        }
        if (i !== len - 1) {
          let res = false
          let subItem = item[0]
          for (let j = i, index; j < len; j++) {
            index = modeArr[j].indexOf(subItem)
            if (index !== -1) res = true
          }
        }
        // if (modeArr[i + 1] && modeArr[i + 1][0] === item[0]) {
        //   cur--
        // }
      }
    }
  }

  return cur === strLen
}
