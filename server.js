const { Client } = require('@elastic/elasticsearch');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('D:/NEWS ADV/public')); // serve static files from the public directory

const es = new Client({ node: 'http://localhost:9200' });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './NEWS ADV/public/index.html'));
});

app.get('/index.html', async (req, res) => {
  const query = req.query.q;
  
  const { body } = await es.search({
    index: 'index.html', // replace with your actual index name
    body: {
      query: {
        match: {
          title: query
        }
      }
    }
  });
  
  const hits = body.hits.hits.map(hit => ({
    title: hit._source.title,
    author: hit._source.author
  }));
  
  res.json(hits);
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
