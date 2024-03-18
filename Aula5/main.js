//FIND()
let myArray = [10, 20, 10, 18, 3, 56, 76]
let myArrayn = ["oi", "liggia", "ana"]

let result = myArray.find(value => value > 18);

let resultN1 = myArrayn.find(value => value.includes('a')); // liggia
let resultN2 = myArrayn.map(value => value.includes('a')); //[ false, true, true ]
let resultN = myArrayn.filter(value => value.includes('a')); // [ 'liggia', 'ana' ]


// let result = myArray.find(myFunction18);

// function myFunction18(value) {
//     return value >18;
// }
console.log(resultN1)
console.log(resultN)

