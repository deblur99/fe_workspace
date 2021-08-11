const fs = require("fs").promises;

fs.readFile("readme4.txt", "utf-8") // fs문 자체가 promise 구문 역할을 함
  .then(data => {
    console.log(data);
    console.log(data.toString());
  })

  .catch(err => {
    console.error(err);
  });

fs.writeFile("writeme.txt", "글 입력됨", "utf-8")
  .then(() => {
    return fs.readFile("writeme.txt", "utf-8");
  })

  .then(data => {
    console.log(data.toString());
  })

  .catch(err => {
    console.error(err);
  });
