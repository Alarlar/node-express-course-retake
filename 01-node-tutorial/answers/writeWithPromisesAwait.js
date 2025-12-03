// Асинхронные операции
const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    // Ожидание, говорит, подождем пока закончится эта активность, до того как перейти на другую
    // Await регулятор, гаишник, не дает потоку катиться безпрерывно, организовывая логичгый порядок

    await writeFile("./temporary/temp.txt", "First line\n");
    await writeFile("./temporary/temp.txt", "Second line\n", { flag: "a" });
    await writeFile("./temporary/temp.txt", "Third line\n", { flag: "a" });
    console.log("Finished writing to temp.txt:\n");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
}

async function reader() {
  try {
    const data = await readFile("./temporary/temp.txt", "utf8"); // Здесь комп читает содержимое файла с помощью помощника Await, чтоб соблюсти порядок
    console.log("File content:\n", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

// Это третья async функция, чтоб соблюсти порядок - сначала комплюктер запишет символы в файл, затем прочтет их - и никак иначе.
// Обертыватель, который как раз и регулирует наши 2 async функции, без него они могли стартовать одновременно, создав коллапс

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
