var express = require('express');
var fs = require('fs');

//Globális változók
var port = 3333;
var staticDir = 'build'

// Létrehozzuk az express szerver példányt
var app = express();

//Statikus fájlok.
app.use(express.static(staticDir));

//Definiáljuk a  szever működését
app.get('/', function (req, res) {
    fs.readFile('./'+staticDir+'/index.html', 'utf8', function(err, data){
    res. send (data);
    });
});

//Felhazsnáló model
 function handleUsers (req, res) {
    fs.readFile('./users.json', 'utf8', function(err, data) {
        if (err) throw err;
       
       //var path = req.url.split( '/');
        var users = JSON.parse( data );
        var _user = {};
        
        
        //Ha nem katunk id-t.
        if ( !req.params.id) {
            _user = users;
        }else {  
        for ( var k in users) {
            if(req.params.id == users[k].id ) {
                _user = users[k];
                }
            }
        }
         res.send( JSON.stringify(_user) );
    });   
    
}


//Felhasználok beolvasása
app.get('/users/:id*?', function ( req, res) {
    console.log(req.url);
    handleUsers( req, res );
    
});

app.listen(port);

console.log("Server is rrunning on localhost:"+port );


