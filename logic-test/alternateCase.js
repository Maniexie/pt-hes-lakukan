const alternateCase = (param) => {
  // cek type data
  if (typeof param !== "string") {
    return null;
  }

  let result = param
    .split("") // pecah ke array
    .map((char) => {
      //conditional string
      if (char === char.toLocaleLowerCase()) {
        return char.toUpperCase();
      } else if (char === char.toLocaleUpperCase()) {
        return char.toLowerCase();
      }
    })
    .join(""); // gabungkan kembali

  //lempar hasil
  return result;
};

console.log(alternateCase("Hayus Bro"));
console.log(alternateCase("GAYUS BRO"));
console.log(alternateCase("gayus bro"));
