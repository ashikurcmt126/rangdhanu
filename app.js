//======================Module Dependencies===============>
const express = require('express');
const app = express();

var http = require('http')
var path = require('path');

//=====================LOAD ROUTE================>
var routes = require('./routes');



//=====================ENVIRONMENT SET================>
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//====================Route link===================>
app.get('/', routes.index);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });


