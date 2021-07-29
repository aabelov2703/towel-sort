
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined || matrix.length === 0 ? [] : matrix.reduce((res, x, currentIndex) => res.concat(x.sort((a, b) => currentIndex % 2 === 0 ? a - b: b - a)));
}
