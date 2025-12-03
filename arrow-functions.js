// function fToC(valeurF) {
//   if (isNaN(valeurF)) {
//     return "Il faut un nombre";
//   } else {
//     const c = ((valeurF - 32) * 5) / 9;
//     return c;
//   }
// }
 
const fToC = (valeurF) => {
  if (isNaN(valeurF)) {
    return "Il faut un nombre";
  } else {
    const c = ((valeurF - 32) * 5) / 9;
    return c;
  }
};
 
// Fonction asynchrone
setTimeout( () => console.log(fToC(98.6)) , 5000 )
 
// console.log(fToC(98.6));
 
 
// const superficie = (l, h) => {
//   return l * h;
// };
 
const superficie = (l, h) =>  l * h;
 
const volume = (l, L) => {
  console.log(l);
  console.log(L);
 
  return l ** 2 * L;
};
 
console.log(2 ** 2);
console.log(3 ** 2);
console.log(4 ** 2);
 
console.log(volume(20, 30));