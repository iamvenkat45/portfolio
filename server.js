const http = require('http');

const app = require('./backend/app');

const server = http.createServer(app);
server.listen(9000, ()=> {
  console.log('App running on port 9000');
});
