const os = require("os");

const user = os.userInfo(); // Current info about user
console.log(user);

const currentOS = {
  brain: os.cpus(),
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
