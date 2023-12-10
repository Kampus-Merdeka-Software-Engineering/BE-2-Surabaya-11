var con = require('./connection');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/html css/contact.html'));
});

app.post('/submitForm', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    con.connect(function(err){
        if(err) throw err;

        var sql = "INSERT INTO customers(name, email, message) VALUES ?";
        var values = [
            [name, email, message]
        ];

        con.query(sql, [values], function(err, result) {
            if(err) throw err;
            console.log("Number of records inserted: "+result.insertId);
        });
    });

    res.redirect('/html css/contact.html');
});

app.listen(7000 , function() {
    console.log("Server running at url http://localhost:7000");
});