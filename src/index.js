module.exports = function check(str, bracketsConfig) {
  let check = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    check = check.concat(bracketsConfig[i]);
  }

  let toClose = [];
  for (let j = 0; j < str.length; j++) {
    let last = toClose[toClose.length - 1];
    if (check.indexOf(str[j]) % 2 == 0 && str[j] == check[check.indexOf(str[j]) + 1]) {
      if (last !== str[j]) {
        toClose.push(str[j]);
      } else if (last == str[j]) {
        toClose.pop();
      }
    } else if (check.indexOf(str[j]) % 2 == 0) {
      toClose.push(str[j]);
    }
    if (check.indexOf(str[j]) % 2 !== 0) {
      if (check.indexOf(last) == check.indexOf(str[j]) - 1) {
        toClose.pop()
      } else {
        return false
      }
    }
  }
  if (toClose.length == 0) return true;
  else return false;
}