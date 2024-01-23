const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 5000;
const dataFilePath = '/app/data/example.txt';

app.get('/', async (req, res) => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    res.send(`Data from volume: ${data}`);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/write', async (req, res) => {
  try {
    await fs.writeFile(dataFilePath, 'Hello from Express.js!');
    res.send('Data written to volume.');
  } catch (error) {
    console.error('Error writing data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
