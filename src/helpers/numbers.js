export const formatNumber = (number = '') => {
  return number.toString().replace(/./g, (c, i, a) => {
    return ((a.length - i) % 3 === 0) ? ' ' + c : c;
  });
};
