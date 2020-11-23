export default function getRowsLimit(rowHeight: number) {
  const viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const rowsToBeShown = Math.ceil(viewHeight / rowHeight) + 1;
  return rowsToBeShown.toString();
}
