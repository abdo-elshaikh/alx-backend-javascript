const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  if (!isNaN(req.params.id)) {
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  if (req.body.userName) {
    res.send(`Welcome ${req.body.userName}`);
  } else {
    res.send('Please provide a username');
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
