var express = require('express');
var url  = require('url');

var app = express();
app.set('view engine','ejs')
app.use('/assets',express.static('assets'))
app.listen(3000);
app.get('/lease.html',function(req, res){
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query);
   res.render('index',query);
})
