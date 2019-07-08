function insertionSort (arrs, n) {
  let arr = [...arrs]
  for (let i = 1; i < n; i++) {
    let e = arr[i], j
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
  return arr
}

module.exports = {
  insertionSort
}