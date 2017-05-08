import Link from '../components/Link'

export function createId(items) {
  let largestID = 0;
  items.map(item => {
    if (largestID <= item.id) {
      largestID = item.id + 1;
    }
  })
  return largestID;
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
