const   express = require("express"),		
        app     = express(),						
        server  = require('http').createServer(app),
        io		= require('socket.io')(server),
        port	= process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {});
});

app.listen(port, function(){
    console.log("LISTENING " + port);
});

module.exports.getApp = app;