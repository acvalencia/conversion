const {mongoose} = require('./database')

const articleSchema = new mongoose.Schema({
  text:String,
});

const articleModel = mongoose.model('Article', articleSchema);

module.exports = articleModel
