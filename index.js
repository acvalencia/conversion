const express = require('express');
const { connection } = require('./db/database');
const articleModel = require('./db/article');

const app = express();
const port = 4000;

// Mongoose
connection();

// Settings
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const articles = await articleModel.find()
  res.render('index', {articles})
});

app.post('/text', async (req, res) => {
  const article = new articleModel({
    text: req.body.text
  });
  const result = await article.save();
  res.contentType('application/json')
  res.status(200).json(result)
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
