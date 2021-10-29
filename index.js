const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const Apikey = '8cf480f37ce3e43f3178411d9c71e5df';
const BaseURL =`http://api.scraperapi.com?api_key=${Apikey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Scraper API');

});

//GET Product Details

app.get('/products/:ProductId', async(req, res) => {
  const { ProductId } = req.params;
  try {
    const response = await request(`${BaseURL}&url=https://www.amazon.com/dp/${ProductId}`);

    res.json(JSON.parseresponse);
  }  catch(error) {
    res.json(error)
  }
});
//GET Product Reviews

app.get('/products/:ProductId', async(req, res) => {
  const { ProductId } = req.params;
  try {
    const response = await request(`${BaseURL}&url=https://www.amazon.com/reviews/${ProductId}`);

    res.json(JSON.parseresponse);
  }  catch(error) {
    res.json(error)
  }
});
//GET Product Offers

app.get('/products/:ProductId', async(req, res) => {
  const { ProductId } = req.params;
  try {
    const response = await request(`${BaseURL}&url=https://www.amazon.com//gp/offers/${ProductId}`);

    res.json(JSON.parseresponse);
  }  catch(error) {
    res.json(error)
  }
});
app.listen (PORT, () => console.log('Server running on port ${PORT}') );
