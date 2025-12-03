const { createReadStream } = require("fs");
// поток для чтения большого файла кусочками
const stream = createReadStream("../content/big.txt", {
  highWaterMark: 100, // сколько символов максимум в одном кусочке
  encoding: "utf8", // чтобы кусочки были текстом, а не двоичными данными
});
// счётчик кусочков
let chunkCounter = 0;

stream.on("data", (chunk) => {
  chunkCounter = chunkCounter + 1;
  console.log(`Chunk #${chunkCounter} (${chunk.length} chars):\n`, chunk);
});

stream.on("end", () => {
  console.log(`\n The file has been read completely`);
  console.log(`Total number of chanks received: \n${chunkCounter}`);
});

stream.on("error", (err) => {
  console.error("Error reading stream:", err.message);
});
