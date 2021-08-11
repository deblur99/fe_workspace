const { URL } = require("url");
const myURL = new URL(
  "https://lib.dankook.ac.kr/search/tot/result?st=KWRD&si=TOTAL&q=node.js&x=0&y=0"
);
console.log("searchParams : ", myURL.searchParams);
console.log("searchParams.getAll() : ", myURL.searchParams.getAll("st"));
console.log("searchParams.get() : ", myURL.searchParams.get("q"));
console.log("searchParams.has() : ", myURL.searchParams.has("si"));
console.log("searchParams.keys() : ", myURL.searchParams.keys());
console.log("searchParams.values() : ", myURL.searchParams.values());

myURL.searchParams.append("filter", "es3");
