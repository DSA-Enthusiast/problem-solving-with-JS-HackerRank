const fruites = "🍅🍇🍈🍉🍊🍌🍍🍑🍒🍓🍋🍐🥧🍎🍏🥑🥝🥭";


var emojiStringToArray = function (str) {
  split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
  arr = [];
  for (var i = 0; i < split.length; i++) {
    char = split[i]
    if (char !== "") {
      console.log(char)
    }
  }
  return arr;
};

emojiStringToArray(fruites);