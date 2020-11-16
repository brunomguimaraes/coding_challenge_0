const ROW_HEIGHT = 47;

export default function getRowsLimit() {
  const viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const rowsToBeShown = Math.ceil(viewHeight / ROW_HEIGHT) + 1;
  return rowsToBeShown.toString();
}
