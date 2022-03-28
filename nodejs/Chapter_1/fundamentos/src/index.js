const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {
  const queryParams = req.query;
  res.json(['Curso 1', 'Curso 2', 'Curso 3']);
  console.log(queryParams);
});

app.post('/courses', (req, res) => {
  const bodyParams = req.body;
  res.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
  console.log(bodyParams);
});

app.put('/courses/:id', (req, res) => {
  const routeParams = req.params;
  res.json(['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4']);
  console.log(routeParams);
});

app.patch('/courses/:id', (req, res) => {
  res.json(['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4']);
});

app.delete('/courses/:id', (req, res) => {
  res.json(['Curso 6', 'Curso 3', 'Curso 4']);
});

app.listen(3333);
