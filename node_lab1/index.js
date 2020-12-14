import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
const port = process.env.PORT;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello WAD2!');
});

server.listen(port);

console.log(`Server running at ${port}`);