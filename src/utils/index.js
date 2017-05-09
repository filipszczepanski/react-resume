export function createId(items) {
  let largestID = 0;
  for (const item of items) {
    if (largestID <= item.id) {
      largestID = item.id + 1;
    }
  }
  return largestID;
}

export function getIndexById(arr, id) {
  for ( const index in arr) {
    const item = arr[index];
    if (item.id === id) {
      return index;
    }
  }
}

export function move(arr, old_index, new_index) {
    if (arr.length <= new_index) {
        return arr;
    }
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
   return arr;
}
