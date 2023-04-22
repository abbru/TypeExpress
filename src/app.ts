import express from 'express';

const app = express();

app.get('/', function(req, res) {
  res.send('Hola Juan Carlo, Que haces chupa pija?');
});

export default app;