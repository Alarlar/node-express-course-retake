const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "First line\n")
  .then(() => {
    console.log("First line");
    return writeFile("./temporary/temp.txt", "Second line\n", { flag: "a" });
  })
  .then(() => {
    console.log("Second line");
    return writeFile("./temporary/temp.txt", "Third line\n", { flag: "a" });
  })
  .then(() => {
    console.log("Third line.");
    return readFile("./temporary/temp.txt", "utf8");
  })
  .then((data) => {
    console.log("Contents of temp.txt:");
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
