const url = require("url");
const querystring = require("querystring");

const parsedURL = url.parse(
  "https://lib.dankook.ac.kr/search/tot/result?st=KWRD&si=TOTAL&q=node.js&x=0&y=0"
);
const query = querystring.parse(parsedURL.query);

console.log("querystring.parse() : ", query);
console.log("querystring.stringify() : ", querystring.stringify(query));
