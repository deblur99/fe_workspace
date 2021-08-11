const url = require("url");
const { URL } = url; // 생성자 URL
const myURL = new URL("http://naver.com"); // URL 객체 생성

console.log("new URL() : ", myURL);
console.log("url.format() : ", url.format(myURL));
console.log("-----------------------------------");

const parsedURL = url.parse("http://naver.com");
console.log("url.parse() : ", parsedURL);
console.log("url.format() : ", url.format(parsedURL));
