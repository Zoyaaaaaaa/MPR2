const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express(); // Initialize Express app

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '78bc0554aamsh6ca09eee3c0735cp1f3903jsna2c37ae8a898',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

app.get('/jobs', (req, res) => {
  axios.request(options)
    .then(response => {
      const jobs = response.data;
      console.log(jobs);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching jobs');
    });
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
