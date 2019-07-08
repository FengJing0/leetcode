// 93

// export default str => {
//   let result = []
//   let restoreIpAddresses = (str, index, p) => {
//     if (str.length > 3 * index || s.length < index) return
//     for (let i = 0, sub; i <= 3; i++) {
//       if (str.substr(0, i) > 255 || str.substr(0, i).length > 1 && str.substr(0, i)[0] === '0') continue
//
//     }
//     // return
//   }
//   restoreIpAddresses(str, 4, [])
//
//   return result
// }

var restoreIpAddresses = function (s) {
  let res = []
  backTrack(s, 4, [])
  return res

  function backTrack (s, index, p) {
    if (s.length > index * 3 || s.length < index) return
    if (index === 1 && Number(s) <= 255) {
      if (s.length > 1 && s[0] === '0') {
        return
      }

      p.push(s)
      res.push(p.join('.'))
      p.pop()
      return
    }
    for (let i = 1; i <= 3 && index > 1; i++) {
      if (s.slice(0, i) > 255 || (s.slice(0, i).length > 1 && s.slice(0, i)[0] === '0')) continue
      p.push(s.slice(0, i))
      backTrack(s.slice(i), index - 1, p)
      p.pop()
    }
  }
}

export default restoreIpAddresses
