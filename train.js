// TASK B

console.log("So`zdagi qancha harf borligini sanaydigan funksiya ishga tushdi!");

const list = ["salom", "bahor", "yoz", "bahodir ", "zayn"];

async function countOfLetters(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      count++;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 400);
      });
    }
  }
  return count;
}

async function run() {
  let result = await countOfLetters(list[0]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await countOfLetters(list[1]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await countOfLetters(list[2]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await countOfLetters(list[3]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await countOfLetters(list[4]);
  console.log("Bu so`zdagi harflar soni:", result);
}

run();

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
