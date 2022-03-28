const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const customers = [];

function validateIfCustomerExists(req, res, next) {
  const { cpf } = req.headers;
  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return res.status(400).json({ error: 'Customer does not exist' });
  }

  req.customer = customer;

  return next();
}

//getBalance
//recebe o vetor de extratos do usuário
//percorre ele e soma seus valores, caso for credito soma, caso for debito subtrai
// retornando assim no final o saldo do usuário.
// o zero final é para que comece em 0 a soma.
function getBalance(statements) {
  const balance = statements.reduce((acc, statement) => {
    return statement.type === 'credit' ? acc + statement.amount : acc - statement.amount;
  }, 0);

  return balance;
}
//list
app.get('/account', (req, res) => {
  return res.status(200).send(customers);
});

//account register
//name - cpf - id - statement
app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const validateCPF = customers.some((customer) => customer.cpf === cpf);
  if (validateCPF) {
    return res.status(400).send({ error: 'CPF already exists' });
  }

  const account = {
    id: uuidv4(),
    cpf,
    name,
    statement: [],
  };

  customers.push(account);

  return res.status(201).json(account);
});

app.use(validateIfCustomerExists);

app.get('/statements', (req, res) => {
  const { customer } = req;

  console.log(customer.statement);

  return res.status(200).json(customer.statement);
});

app.post('/deposit', (req, res) => {
  const { customer } = req;
  const { description, amount } = req.body;

  customer.statement.push({
    description: description,
    amount: amount,
    type: 'credit',
    created_at: new Date(),
  });

  return res.status(201).json({ message: 'Deposit was successful' });
});

app.post('/withdraw', (req, res) => {
  const { customer } = req;
  const { amount } = req.body;

  const balance = getBalance(customer.statement);
  if (balance <= amount) {
    return res.status(400).send({ error: 'Insufficient funds' });
  }

  customer.statement.push({
    description: 'Withdraw',
    amount: amount,
    type: 'debit',
    created_at: new Date(),
  });

  return res.status(201).json({ message: 'Withdraw was successful' });
});

app.get('/statements/date', (req, res) => {
  const { date } = req.query;
  const formatDate = new Date(date + ' 00:00');
  const { customer } = req;

  const statements = customer.statement.filter((item) => item.created_at.toDateString() === formatDate.toDateString());

  return res.status(200).json(statements);
});

app.put('/account', (req, res) => {
  const { customer } = req;
  const { name } = req.body;

  customer.name = name;

  return res.status(201).json({ message: 'Account updated successfully' });
});

app.delete('/account', (req, res) => {
  const { customer } = req;

  const index = customers.indexOf(customer);
  customers.splice(index, 1);

  if (index === -1) {
    return res.status(400).send({ error: 'Customer does not exist' });
  }

  return res.status(204).json({ customers });
});

app.get('/balance', (req, res) => {
  const { customer } = req;

  const balance = getBalance(customer.statement);

  return res.status(200).json({ balance });
});

app.listen(3333);
