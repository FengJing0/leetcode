// 914

export default arr => {
  let dst = {}
  if (arr.length <= 1) {
    return false
  }

  let getResult = (a, b) => {    //定义一个寻找公约数的方法
    if (b === 0) return a
    return getResult(b, a % b)
  }

  arr.forEach(item => {
    if (!dst[item]) {
      dst[item] = 1
    } else {
      dst[item]++
    }
  })
  let values = Object.values(dst).sort((a, b) => a - b)
  let min = values[0]
  if (min <= 1) {
    return false
  }

  return !values.some((item, index) => {
    if (index > 0) return getResult(item, min) === 1
  })
}

