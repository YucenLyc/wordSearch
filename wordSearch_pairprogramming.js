const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  const transArr = letters[0].map((column, index) => letters.map(rows => rows[index]));

  const verticalJoin = transArr.map(ls => ls.join(''));

  console.log("horizontalJoin: ", horizontalJoin); 

  console.log("verticalJoin: ", verticalJoin);

  let isFound = false;

  for (l of horizontalJoin) {
      console.log("l.includes(word): ", l.includes(word));
      if (l.includes(word)) isFound = true;
  }
  if (isFound === true) return isFound;
  for (l of verticalJoin) {
      if (l.includes(word)) isFound = true;
  }
  return isFound;
}

//pair programming: done by Mingfeng Li, Yucen Liu 

module.exports = wordSearch;