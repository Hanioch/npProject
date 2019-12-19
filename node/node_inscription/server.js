const connexion= require('./conf')
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
const server = require('http').createServer(app)
let status =false

//informer express que nous utilisons ses packages
app.use(session({
	secret: 'secret'
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//redirection vers la page connexion

//inscription
app.post('/signIn', function(request, response) {
	var username = request.body.username;
    var mail = request.body.mail;
    var password = request.body.password;
    console.log(username, mail, password, '44444444')
	if (username && mail ) {
        connexion.query(`SELECT * FROM user WHERE mail='${mail}'`, function(error, results) {
            if (results.length>0) {
                response.sendStatus(400);
                
            }
            else{
                console.log('inscription')
                connexion.query('INSERT INTO user (username, password, mail, statut) VALUES (?, ?, ?, 2)' ,
        [username, password, mail], function(error, res, fields) {
                response.sendStatus(200)
            })
        }
		});
	} else {
		response.sendStatus(400);
	}
});

    connexion.query(`SELECT * FROM user `, function(error, results) {
        console.log(results)
    });
//finInscription
//Connexion
app.post('/logIn', function(request, response) {
	var username = request.body.username;
    var password = request.body.password;
    console.log(request.body.password)
	if (username && password) {
        console.log('pour l instant cv ')

        connexion.query(`SELECT * FROM user WHERE username='${username}'`, function(error, results) {
            if (results === undefined) {
                console.log('rien ne va ')
                response.sendStatus(400);
            }
            else{
                if(results[0].password===password){
                    status = username
                    response.sendStatus(200)
                }else{
                    response.sendStatus(402);
                }
            }
        }
		);
	} else {
        console.log('tout vas  ')

		response.sendStatus(400);
	}
});
app.get('/status', function(request, response){
    if (status){
        response.json(status)
    }else{
        response.sendStatus(400)
    }
})
//deconnexion
app.get('/logout', (req, res) => {
    if(status){
    status=false;
    res.json(status)
    }
    else{
    res.sendStatus(400)
    }
    })

//afficher la  table user
    connexion.query(`SELECT * FROM user `, function(error, results) {
        console.log(results)
    });

server.listen(8000);
