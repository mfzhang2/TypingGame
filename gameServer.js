var app = require('express')();
var http = require('http').Server(app);
var fs = require('fs');
var bodyParser = require('body-parser');

//use body parser to read POST
app.use(bodyParser.urlencoded({extended: false}));


http.listen(3000, function(){
    
  console.log('listening on *:3000');
});

///////////////////////////////////////////////////////////////////
//////////////////////////Image handler//////////////////////////////////
app.get('/hand1.png', function(req, res){    
    res.sendFile(__dirname + '/hand1.png');
});
app.get('/hand2.gif', function(req, res){     
    res.sendFile(__dirname + '/hand2.gif');
});
/////////////////////////////////////////////////////////////////
//////////////////Roots///////////////////////////////////////////
app.get('/', function(req, res){     
  console.log("root");
    res.sendFile(__dirname + '/root.html');
});
///////////////////////////////////////////////////////////////
///////////////////CSS handler///////////////////////////////////
app.get('/game.css', function(req, res){     
 
    res.sendFile(__dirname + '/game.css');
});
////////////////////////////////////////////////////////////////
//////////////////////////////get UserName//////////////////////
app.post('/start', function(req, res){   
    console.log(req.body);
    var rawJSON = fs.readFileSync("userNameDataBase.json");
    var parsedJSON = JSON.parse(rawJSON);
    parsedJSON.userNameData.push({user: req.body.user, score: 0});
    fs.writeFileSync('userNameDataBase.json', JSON.stringify(parsedJSON, null, '\t'));
   
    
    res.sendFile(__dirname + '/start.html');
});