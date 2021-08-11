const fs = require("fs");

console.log("Run started");

fs.readFile("readme2.txt", "utf-8", (err, data) => {
  if (err) {
    return err;
  }

  console.log(`number 1\n`, data.toString());
});

fs.readFile("readme2.txt", "utf-8", (err, data) => {
  if (err) {
    return err;
  }

  console.log(`number 2\n`, data.toString());
});

fs.readFile("readme2.txt", "utf-8", (err, data) => {
  if (err) {
    return err;
  }

  console.log(`number 3\n`, data.toString());
});

console.log("Run terminated");

/*
let i = 0;

do {
  fs.readFile("readme2.txt", "utf-8", (err, data) => {
    if (err) {
      return err;
    }

    console.log(`number ${i + 1}\n`, data.toString());
  });

  i++;
} while (i < 3);
*/
