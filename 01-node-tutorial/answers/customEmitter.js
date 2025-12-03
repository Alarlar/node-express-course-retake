const EventEmitter = require("events");
const radio = new EventEmitter();

console.log("User send photo\n");

radio.on("Start", (filename) => {
  console.log(`Start downloading the ${filename}`);
});

radio.on("Progress", (percent) => {
  console.log(`Loading ${percent}`);
});

radio.on("Complete", (filename) => {
  console.log(`Completed ${filename} `);
  console.log("Yeah!!!");
});

radio.on("error", (err) => {
  console.log(`ERROR during loading: ${err}`);
});

setTimeout(() => radio.emit("Start", "Dog.jpeg"), 500);
setTimeout(() => radio.emit("Progress", 25), 1500);
setTimeout(() => radio.emit("Progress", 59), 2500);
setTimeout(() => radio.emit("Progress", 74), 3500);
setTimeout(() => radio.emit("Complete", 100), 4500);
