const express = require('express');
const cors = require('cors');

const app = express();

const customers = [
  {id: 1, firstName: 'John', comment: 'hola'},
  {id: 2, firstName: 'Brad', comment: 'que hay'},
  {id: 3, firstName: 'Mary', comment: 'bye , bye'},
];

app.get('/api/comments', cors(), (req, res) => {
  res.json(customers);
});

app.post('/api/comments', cors(), (req, res) => {

  res.json(req.params);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);