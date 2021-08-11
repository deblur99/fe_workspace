let i = 0;

setInterval(function () {
  if (i === 5) {
    console.log("종료");
    process.exit(); // 프로그램 종료
  } else {
    console.log(i);
    i++;
  }
}, 1000);

const os = require("os");
