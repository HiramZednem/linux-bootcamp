let i = 0;
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function main() {
  while (true) {
    console.log('hello' + i);
    i++;
    await delay();
  }
}

main();
