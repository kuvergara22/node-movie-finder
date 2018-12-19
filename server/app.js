

var express=require('express');
var morgan = require('morgan');
var app = express();
var axios = require('axios');
var movieData = {};
var movieUrl = 'http://www.omdbapi.com';
var apiKey = '&apikey=8730e0e';

app.use(morgan('dev'));

app.get('/', function(req, res) {
    var urlOmdb = movieUrl + req.url + apiKey;

    if ( movieData[req.url] === undefined ) { 
axios.get(urlOmdb)

.then( (axiosres) => {

movieData[req.url] = axiosres.data;

    
res.json(movieData[req.url]);            

 
})      
.catch( (error) => {

})

} else {
res.json(movieData[req.url]);

}
})  

module.exports = app;