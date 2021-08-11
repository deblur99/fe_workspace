let http = require("http");
let fs = require("fs");
let url = require("url");

let app = http.createServer(function (request, response) {
  let _url = request.url; // 사용자가 전달하는 URL 주소
  let queryData = url.parse(_url, true).query; // 주소의 Query string -> url 전체에서 query string에 해당하는 부분만 가져와서 id 저장
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;

  if (pathname === "/") {
    fs.readFile(
      `data/${queryData.id}.txt`,
      "utf-8",
      function (err, description) {
        const templete = `<!DOCTYPE html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <h1><a href="/?id=index">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
    </html>  
    `;

        response.end(templete);
      }
    );
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

app.listen(3000);
