function search(str, sub) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === sub.charAt(0)) {
        for (var j = 1; j < sub.length; j++) {
          if (!(str.charAt(i + j) === sub.charAt(j))) {
            break;
          }
        }

        if (j === sub.length) {
          count = count + 1;
        }
      }
    }
    return count;
  }


  console.log(search("Garimamm is a programmer", "mm"));