// mk
function __partition (arr, l, r) {
  let v = arr[l]

  let j = l
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
      j++
    }
  }
  [arr[l], arr[j]] = [arr[j], arr[l]]

  return j

}


function __quickSort (arr, l, r) {
  if (l >= r) return

  const p = __partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

function quickSort1 (arr, n) {
  __quickSort(arr, 0, n - 1)

  return arr
}



// xm
function quick (array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}
function quickSort2 (array,n) {
  return quick(array, 0, n - 1);
}
function partition (array, left, right) {
  // 用index取中间值而非splice
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (compare(array[i], pivot) === -1) {
      i++;
    }
    while (compare(array[j], pivot) === 1) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap (array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}
  
// 比较函数
function compare (a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}


// ryf
function quickSort3 (arr) {

  if (arr.length <= 1) { return arr; }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] < pivot) {

      left.push(arr[i]);

    } else {

      right.push(arr[i]);

    }

  }

  return quickSort3(left).concat([pivot], quickSort3(right));

}
module.exports = {
  quickSort1,
  quickSort2,
  quickSort3
}