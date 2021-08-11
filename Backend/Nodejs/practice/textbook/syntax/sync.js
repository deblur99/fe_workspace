const fs = require("fs"); // const는 재선언 및 재할당 불가

let i = 0; // let은 재선언 불가

console.log("동기 읽기 시작");

fs.readFile("readme2.txt", "utf-8", (err, data) => {
  if (err) {
    return err;
  }
  console.log("비동기 읽기 : ", data.toString());
});

// 비동기 읽기와 달리, 동기 읽기는 함수를 순서대로 처리한다.
let data = fs.readFileSync("readme2.txt", "utf-8");
console.log(`${++i}번\n`, data.toString());

data = fs.readFileSync("readme2.txt", "utf-8");
console.log(`${++i}번\n`, data.toString());

data = fs.readFileSync("readme2.txt", "utf-8");
console.log(`${++i}번\n`, data.toString());

console.log("동기 읽기 끝");
