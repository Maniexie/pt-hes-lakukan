const maxRedigit = (num) => {
  //cek input
  if (typeof num !== "number" || num < 100 || num > 999) {
    return null;
  }

  //pecah ke array of string
  let digits = num.toString().split("");
  console.log("digits " + digits);

  // sorting
  let sorted = digits.sort((a, b) => b - a);
  console.log("sorted " + sorted);

  //gabungkan
  let joinDigits = parseInt(sorted.join(""));
  console.log("joinDigits " + joinDigits);

  // kembalikan atau tampilkan
  return Number(joinDigits);
};

console.log("output : " + maxRedigit(123));
console.log("");
console.log("output : " + maxRedigit(231));
console.log("");
console.log("output : " + maxRedigit(321));
console.log("");
console.log("output : " + maxRedigit(-1));
console.log("");
console.log("output : " + maxRedigit(0));
console.log("");
console.log("output : " + maxRedigit(99));
console.log("");
console.log("output : " + maxRedigit(1000));
