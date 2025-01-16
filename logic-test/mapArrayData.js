const productArray = (arr) => {
  // cek apakah array kosong atau tidak berbentuk array
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  // kalikan isi array
  const totalProduct = arr.reduce((product, sum) => product * sum, 1);

  // hasil dari total perkalian isi array dibagi sesuai input array
  const result = arr.map((num) => totalProduct / num);

  //kembalikan atau tampilkan
  return result;
};

console.log(productArray([123]));
console.log(productArray([11, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
console.log(productArray([16, 17, 4, 3, 5, 2]));
console.log(productArray("data asal" + "asdasd", 123, 55));
