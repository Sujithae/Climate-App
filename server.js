const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.REACT_APP_API_KEY;

  try {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        key: apiKey,
        q: city,
        aqi: 'yes'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response ? error.response.data.error.message : 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});