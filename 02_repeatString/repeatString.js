const repeatString = function (string, num) {
  let copy = string;
  if (num === 0) {
    return "";
  } else if (num === -1) {
    return "ERROR";
  } else if (string === "") {
    return "";
  } else {
    for (let i = 1; i < num; i++) {
      string += copy;
    }
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
