require('dotenv').config();

const http = require('http');

const app = require('./src/app/app');

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

console.log(`PORT: ${PORT}`);

server.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`);
})