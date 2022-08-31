const reverse = (names) => {
    let temp;
    for (let i = 0, j = names.length - 1; i < j; i++, j--) {
      temp = names[j];
      names[j] = names[i];
      names[i] = temp;
    }
  }
  export {reverse};