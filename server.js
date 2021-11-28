require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

app.use(helmet());
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

module.exports = server;
