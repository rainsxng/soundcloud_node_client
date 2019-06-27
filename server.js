const exspress = require('express');
const app = require('express')();

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(exspress.static('public'));

app.get('/', function (req, res){
    res.render('client');
});

app.listen(5000, function(){
    console.log('listening at 5000');
});