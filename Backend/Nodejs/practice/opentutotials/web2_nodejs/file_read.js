const fs = require("fs"); // 파일 시스템을 다루는 모듈 가져오기
fs.readFile("sample.txt", "utf-8", function (err, data) {
  console.log(data);
});
