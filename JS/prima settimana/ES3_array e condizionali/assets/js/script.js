////1
var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
  console.log("il numero " + numero2 + " è il più grande");
} else {
  console.log("il numero " + numero1 + " è il maggiore");
}

////2
var numero3 = 7;

if (numero3 == 5) {
  console.log("is equal");
} else {
  console.log("not equal");
}

////3
if (5 % 5 == 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile");
}

////4
var numero4 = 8;
var numero5 = 12;

if (numero4 === 8 || numero5 === 8) {
  console.log("almeno un numero è uguale a 8");
} else if (
  numero4 + numero5 === 8 ||
  numero4 - numero5 === 8 ||
  numero5 - numero4 === 8
) {
  console.log("la somma dei due numeri è uguale a 8");
} else {
  console.log("nessuno dei due numeri è uguale a 8");
}

////5
var totalShoppingCart = 60;
var spedizione = 10;
function checkout() {
  if (totalShoppingCart > 50) {
    return totalShoppingCart;
  } else {
    return totalShoppingCart + spedizione;
  }
}
console.log("Il saldo totale è di " + checkout() + "€");

////6
function blackFriday() {
  let sconto = (totalShoppingCart / 10) * 2;
  if (totalShoppingCart - sconto > 50) {
    return totalShoppingCart - sconto;
  } else {
    return totalShoppingCart - sconto + spedizione;
  }
}
console.log("Il saldo totale è di " + blackFriday() + "€");

////7
var variabile1 = 3;
var variabile2 = 1;
var variabile3 = 2;

if (
  variabile1 < variabile2 &&
  variabile1 < variabile3 &&
  variabile2 < variabile3
) {
  console.log(variabile3, variabile2, variabile1); //ok
} else if (
  variabile2 < variabile1 &&
  variabile2 < variabile3 &&
  variabile1 < variabile3
) {
  console.log(variabile3, variabile1, variabile2); //ok
} else if (
  variabile3 < variabile1 &&
  variabile3 < variabile2 &&
  variabile1 < variabile2
) {
  console.log(variabile2, variabile1, variabile3); //ok
} else if (
  variabile3 < variabile2 &&
  variabile3 < variabile1 &&
  variabile2 < variabile1
) {
  console.log(variabile1, variabile2, variabile3); //ok
} else if (
  variabile1 < variabile2 &&
  variabile1 < variabile3 &&
  variabile3 < variabile2
) {
  console.log(variabile2, variabile3, variabile1); //ok
} else {
  console.log(variabile1, variabile3, variabile2); //ok
}

////8
var value = "7";
if (typeof value == typeof 5) {
  console.log("il valore fornito è un numero");
} else {
  console.log("il valore fornito non è un numero");
}

////9
var pariDispari = 7;
if (pariDispari % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

////10
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

////11
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

////12
delete me.lastName;
console.log(me);

////13
me.skills.pop();
console.log(me);

////14
let array=[];
for(let i = 1; i <= 10; i++){
    array.push(i)
}
console.log(array);

////15
array[9] = 100;
console.log(array);
