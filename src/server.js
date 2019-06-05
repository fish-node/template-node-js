const http = require("http");

module.exports = http.createServer((req, res) => {
    res.write("hello world");
    res.end();
});
