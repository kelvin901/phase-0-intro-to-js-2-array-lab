// // let cats = ["Milo", "Otis", "Garfield"];

// // function nondestructivelyAppendCat(name) {
// //   return [...cats, name];
// // }

// // let newCats = nondestructivelyAppendCat("Ralph");
// // console.log(cats);
// // console.log(newCats);

// // let cats = ["Milo", "Otis", "Garfield"];

// // function nondestructivelyRemoveLastCat() {
// //   return cats.slice(0, -1);
// // }

// let newCats = nondestructivelyRemoveLastCat();
// console.log(newCats); // output: ["Milo", "Otis"]
// console.log(cats); // output: ["Milo", "Otis", "Garfield"]

let cats = ["Milo", "Otis", "Garfield"];

function nondestructivelyRemoveFirstCat() {
  return cats.slice(1);
}

let newCats = nondestructivelyRemoveFirstCat();
console.log(newCats); // output: ["Otis", "Garfield"]
console.log(cats); // output: ["Milo", "Otis", "Garfield"]

