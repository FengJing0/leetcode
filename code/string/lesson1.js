// 557

// export default str => {
//   let arr = str.split(' ')
//   return arr.map(item => item.split('').reverse().join('')).join(' ')
// }
export default str => str.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
