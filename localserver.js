const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.send('Hello World ok it is okff');
});

app.get('/Home', (req, res) => {
  res.send('Now you are on home page');
});

app.get('/About', (req, res) => {
  var customized_inner = {
    name: 'car',
    prize: '10 lakh',
    is_car: true,
    is_bike: false
  }; 
  res.send(customized_inner);
});

app.get('/Help', (req, res) => {
  res.send('Now you are on Help page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
