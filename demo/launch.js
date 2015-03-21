var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/src', express.static(__dirname + '/../src'));

app.get('/', function(req, res){
    res.render('index');
})

var PORT = 2000;
app.listen(PORT, function () {
    console.log("launched demo on port " + PORT);
});