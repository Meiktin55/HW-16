// ex-1 //
let num = prompt("прошу введите число");
num = 10 ? console.log("верно") : console.log("неверно");

// ex-2 //
let tim = prompt("прошу введите номер квартиры");
if (tim <= 20) {
  console.log("подьезд 1");
} else if (tim <= 48) {
  console.log("подьезд 2");
} else if (tim <= 90) {
  console.log("подьезд 3");
} else {
  console.log("номер такой квартиры не найден");
}

// ex-3 //
let flor = prompt("введите число от 0 до 5");
if (flor >= 0 && flor <= 5) {
  console.log("верно");
} else {
  console.log("неверно");
}

// ex -4,5 //
let ver = prompt("данное время");
const userName = "samira";
if (ver >= 6 && ver <= 12) {
  console.log("доброе утро," + userName);
} else if (ver >= 13 && ver <= 17) {
  console.log("добрый день! " + userName);
} else {
  console.log("добрый вечер!" + userName);
}

// ex-6 //
let imin = prompt("введите свой возраст, вам предусмотрена скидка");
if (imin <= 6 || imin >= 65) {
  console.log("скидка");
} else {
  console.log("скидки нет");
}

// ex-7 //
let game1 = prompt("игрок-1: введите камень, ножницы или бумага");
let game2 = prompt("игрок-2:введите: камень, ножницы или бумага");
if (game1 == "камень" && game2 == "камень") {
  console.log("победила дружба!");
} else if (game1 == "ножницы" && game2 == "ножницы") {
  console.log("победила дружба!");
} else if (game1 == "камень" && game2 == "ножницы") {
  console.log("победил 1 игрок");
} else if (game1 == "бумага" && game2 == "ножницы") {
  console.log("победил 2 игрок");
} else if (game1 == "ножницы" && game2 == "бумага") {
  console.log("победил 1 игрок");
} else if (game1 == "бумага" && game2 == "бумага") {
  console.log("победила дружба!")
}

// ex-8 //
const home = 7;
if (home % 2 ===0) {
  console.log("число чётное");
} else {
  console.log("число нечётное");
}

// ex-9 //
let virt = 5;
virt == 5 ? console.log("Five") : console.log("not Five");