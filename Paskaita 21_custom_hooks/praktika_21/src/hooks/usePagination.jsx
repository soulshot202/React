export function usePagination(arr, itemsPerPage) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i += itemsPerPage) {
    const item = arr.slice(i, i + itemsPerPage);
    resultArr.push(item);
  }

  return { resultArr };
}
