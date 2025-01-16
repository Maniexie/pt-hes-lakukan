const reverseWord = (string) => {
  // cek type data
  if (typeof string !== "string") {
    return null;
  }

  // pecah ke array (split) balikkan huruf(reverse) gabungkan (join)
  let arr = string
    .split(" ")
    .map((word) => {
      let reversed = word.split("").reverse().join("");
      console.log("reserved :", reversed);
      return adjustCapitalization(word, reversed);
    })
    .join(" ");

  // lempar data
  return arr;
};
// tangkap huruf di kata pertama dan ubah menjadi huruf besar
const adjustCapitalization = (original, reversed) => {
  if (original[0] === original[0].toUpperCase()) {
    return reversed[0].toUpperCase() + reversed.slice(1).toLowerCase();
  }
  return reversed.toLowerCase();
};

console.log(reverseWord("heLlo Mas bro"));
console.log(reverseWord("I am A Great human"));
