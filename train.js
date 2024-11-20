console.log(" Harflar sanash funskiyasi ishga tushdi1");

const list = ["tushunarliku", "oshqovoq", "asfalt", "kirishimli", "erinchoq"];

async function sōzdagiharf(harf, sōz) {
  let count = 0;
  for (let i of sōz)
    if (i == harf) {
      count++;
    }
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count);
    }, 400);
  });
  return count;
}

async function run() {
  let result = await sōzdagiharf("u", list[0]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await sōzdagiharf("o", list[1]);
  console.log("BU so`zdagi harflar soni:", result);
  result = await sōzdagiharf("a", list[2]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await sōzdagiharf("i", list[3]);
  console.log("Bu so`zdagi harflar soni:", result);
  result = await sōzdagiharf("q", list[4]);
  console.log("Bu so`zdagi harflar soni:", result);
}
run();
