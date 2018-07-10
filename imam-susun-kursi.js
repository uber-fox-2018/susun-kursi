(function susunKursi(kursi, baris) {
  const output = [];
  for(let i = 0; i < baris; i++) {
    output.push([]);
    for(let j = 0; j < output.length; j++) {
      for(let k = j; k < kursi.length; k+=baris) {
        if(i === j) output[i].push(kursi[k]);
      }
    }
    console.log(`Baris ${i}: [${output[i]}]`);
  }

}) (['a','b','c','d','e','f','g','h','i','j'], 3);