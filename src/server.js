import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  return res.end('Hello World');
});

server.listen(3333);
