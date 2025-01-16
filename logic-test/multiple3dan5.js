const solution = (number) => {
  // cek apakah input = dengan angka || kurang dari 2 , jika tidak kembalikan 0
  if (typeof number !== "number" || number < 2) {
    return 0;
  }

  // inisiasi
  let sum = 0;

  // loop atau iterasi lalu tangkap angka yang habis di bagi 3 dan 5
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
      console.log(sum);
    }
  }
  console.log("===");

  // lempar angka
  return sum;
};

console.log("===");
console.log(solution(2));
console.log("===");
console.log(solution(10));
console.log("===");
console.log(solution(20));
