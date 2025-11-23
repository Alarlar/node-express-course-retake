const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(
      "./temporary/fileB.txt",
      "This is Second line\n",
      { flag: "a" },
      (err) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
          writeFile(
            "./temporary/fileB.txt",
            "This is Third line\n",
            { flag: "a" },
            (err) => {
              console.log("at point 3");
              if (err) {
                console.log("This error happened: ", err);
              } else {
                console.log("All done!");
              }
            }
          );
        }
      }
    );
  }
});
console.log("at end");
