const wordSearch = (letters, word) => {
    if (letters.length === 0 || word.length === 0) {
      return false;
    }
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const i of horizontalJoin) {
      if (i.includes(word)) {
        return true;
      }
    }
  
    for (let i = 0; i < letters[0].length; i++) {
      const verticalJoin = letters.map(row => row[i]).join('');
      if (verticalJoin.includes(word)) {
        return true;
      }
    }
  
    return false;
  };  

module.exports = wordSearch