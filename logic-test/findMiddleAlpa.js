const findMidAlpa = (start, end) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // init alphabet

  // tangkap index awal dan akhir
  const startIndex = alphabet.indexOf(start);
  const endIndex = alphabet.indexOf(end);

  // cek apakah index awal dan akhir valid jika tidak kembalikan null
  if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    return null;
  }

  // mencari nilai tengah
  const middleIndex = (startIndex + endIndex) / 2;

  console.log("middleIndex : " + middleIndex);
  // cek apakah middleIndex integer , jika iya temukan alphabet untuk nilai tengah
  if (Number.isInteger(middleIndex)) {
    return alphabet[middleIndex];
  } else {
    // jika tidak tampilkan 2 huruf tengah
    return alphabet[Math.floor(middleIndex)] + alphabet[Math.ceil(middleIndex)];
  }
};

console.log(findMidAlpa("Q", "U"));
console.log(findMidAlpa("R", "U"));
console.log(findMidAlpa("T", "Z"));
console.log(findMidAlpa("Q", "Z"));
