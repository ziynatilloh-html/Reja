//Task-d
function compStrings(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Both inputs must be string";
  }

  if (str1.length !== str2.length) {
    return false;
  }
  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");

  console.log("first word:", sortStr1);
  console.log("second word:", sortStr2);
  return sortStr1 === sortStr2;
}
console.log(compStrings("zayn", "yanz"));

//reminder for my self
//  Kod tashkil topishi eng qo`llanilgan sayt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split bo`ldi!
//  if (str1.length !== str2.length) {return false;} bu qismi shunchaki agar bir hil uzunlikdagi so`zlar kiritlmasa undan keyingi jarayon ishga tuhsmasdan tohtatishiga yordam beradii!

//Task-c

// const moment = require("moment");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
//   qoldiq() {
//     const now = moment().format("HH:mm");
//     console.log(
//       `Hozir ${now}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
//     );
//   }

//   sotish(productName, productCount) {
//     const now = moment().format("HH:mm");
//     if (this[productName] >= productCount) {
//       this[productName] -= productCount;
//       console.log(`Hozir ${now}da ${productCount}ta ${productName} sotildi`);
//     } else {
//       console.log(`Hozir ${now}da ${productName} mavjud emas!`);
//     }
//   }
//   qabul(productName, productRecieved) {
//     const now = moment().format("HH:mm");
//     this.productName += productRecieved;
//     console.log(
//       `Hozir ${now}da ${productRecieved}ta ${productName} qabul qilindi`
//     );
//   }
// }

// const myShop = new Shop(8, 9, 2);
// // myShop.qoldiq();
// myShop.sotish("non", 3);
// myShop.qabul("lagmon", 6);
// myShop.qoldiq();
// Npm pakejlardan esa moment avval require qilinib keyin kod orasidan dokumentatsiya orqali moment ornatildi
// Code yozishda oldin o`tilgan darslik "class"lar mavzusi eng ko`p foydalanildi.

// TASK B

// console.log("So`zdagi qancha harf borligini sanaydigan funksiya ishga tushdi!");

// const list = ["salom", "bahor", "yoz", "bahodir ", "zayn"];

// async function countOfLetters(word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== " ") {
//       count++;
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve();
//         }, 400);
//       });
//     }
//   }
//   return count;
// }

// async function run() {
//   let result = await countOfLetters(list[0]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await countOfLetters(list[1]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await countOfLetters(list[2]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await countOfLetters(list[3]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await countOfLetters(list[4]);
//   console.log("Bu so`zdagi harflar soni:", result);
// }

// run();

// TASK A
// console.log(" Harflar sanash funskiyasi ishga tushdi1");

// const list = ["tushunarliku", "oshqovoq", "asfalt", "kirishimli", "erinchoq"];

// async function sōzdagiharf(harf, sōz) {
//   let count = 0;
//   for (let i of sōz)
//     if (i == harf) {
//       count++;
//     }
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(count);
//     }, 400);
//   });
//   return count;
// }

// async function run() {
//   let result = await sōzdagiharf("u", list[0]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await sōzdagiharf("o", list[1]);
//   console.log("BU so`zdagi harflar soni:", result);
//   result = await sōzdagiharf("a", list[2]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await sōzdagiharf("i", list[3]);
//   console.log("Bu so`zdagi harflar soni:", result);
//   result = await sōzdagiharf("q", list[4]);
//   console.log("Bu so`zdagi harflar soni:", result);
// }
// run();
