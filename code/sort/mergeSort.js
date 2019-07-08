function __mergeSort (arr, l, r) {
  if (l >= r) return

  const mid = Math.floor((l + r) / 2)
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  if (arr[mid] > arr[mid + 1])
    __merge(arr, l, mid, r)
}

function __merge (arr, l, mid, r) {
  let aux = []
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }
  // console.log(l)
  let i = l, j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}

function mergeSort (arr, n) {
  __mergeSort(arr, 0, n - 1)

  return arr
}

function mergeSortBU (arrs, n) {
  let arr = [...arrs]
  for (let sz = 1; sz <= n; sz += sz) {
    for (let i = 0; i < n; i += 2 * sz) {
      __merge(arr, i, i + sz - 1, Math.min(i + sz * 2 - 1, n - 1))
    }
  }
  return arr
}

module.exports = {
  mergeSort,
  mergeSortBU
}