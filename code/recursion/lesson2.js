// 30

// export default (s, word) => {
//   let result = []
//   let indexList = []
//   let arr = []
//   let getSub = (word) => {
//     if (!word.length) {
//       return
//     }
//     for (let i = 0, len = word.length; i < len; i++) {
//       let words = [].concat(word)
//       arr.push(words[i])
//       words.splice(i, 1)
//       if (!words.length) {
//         result.push([...arr])
//       }
//       getSub(words)
//       arr.pop()
//     }
//   }
//
//   getSub(word)
//   // console.log(result)
//   result.forEach(i => {
//     let index = s.indexOf(i.join(''))
//     if (index !== -1) indexList.push(index)
//   })
//   return indexList
// }

// export default (s, words) => {
//   let result = []
//   if (!words.length || !s) return result
//
//   let find = (str, words) => {
//     let result = true
//     let word = [].concat(words)
//     for (let i = 0, index, len = word.length; i < len; i++) {
//       index = str.indexOf(word[i])
//       if (index === -1) {
//         return false
//       }
//       if (index === 0) {
//         let w = word.splice(i, 1)[0]
//         result = find(str.slice(w.length), word)
//         break
//       }
//       result = false
//     }
//     return result
//   }
//
//   for (let i = 0, len = s.length, wl = words.join('').length, sub; i <= len - wl; i++) {
//     sub = s.substr(i, wl)
//     if (find(sub, words)) {
//       result.push(i)
//     }
//   }
//
//   return result
// }

export default (s, words) => {
  let result = []
  if (!words.length || !s) return result
  let len = s.length
  let wl = words.join('').length

  let obj = {}
  words.forEach(i => {
    obj[i] = obj[i] ? obj[i] + 1 : 1
  })

  function check (str) {
    let res = true
    let count = 0
    for (let j = 0, reg; j < words.length; j++) {
      reg = new RegExp(words[j], 'g')
      let sl = str.match(reg)
      if (!sl || obj[words[j]] !== sl.length) {
        res = false
        break
      }
      count += sl.length
    }
    if (count > str.length) res = false
    return res
  }

  for (let i = 0, sub; i <= len - wl; i++) {
    sub = s.substr(i, wl)
    if (check(sub)) {
      result.push(i)
    }
  }

  return result
}
