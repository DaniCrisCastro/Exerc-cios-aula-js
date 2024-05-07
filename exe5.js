function somar() {
    return [...arguments].reduce((sum, nr) => sum + nr, 0);
  }
  
  var arr = [1, 3, 7, 4, 5, 6];
  console.log(somar(...arr));