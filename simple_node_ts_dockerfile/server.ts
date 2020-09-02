import express from 'express'

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(process.env.NODE_ENV)
console.log(`Running on http://${HOST}:${PORT}`);