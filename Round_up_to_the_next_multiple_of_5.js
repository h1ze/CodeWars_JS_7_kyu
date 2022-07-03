// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

function roundToNext5(n) {
  for (let i = n; ; i++) {
    if (i % 5 === 0) {
      return i;
    }
  }
}

function roundToNext52(n) {
  return Math.ceil(n / 5) * 5;
}
