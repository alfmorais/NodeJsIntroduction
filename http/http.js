const { createServer } = require("http");

let server = createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
        <h1>Hello World!<h2>
        <p>Primeira página web com NodeJS</p>
    `);
    response.end();
});
server.listen(8000);
console.log("listening! (port 8000)");
