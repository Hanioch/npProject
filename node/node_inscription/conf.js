const mysql = require('mysql');

var connexion = mysql.createConnection({
	host     : 'localhost',
	user     : 'hanio',
	password : 'hanio',
    database : 'Panda_bricoleur',
    port     : '3306',
    insecureAuth : true
});

connexion.connect(function(err){
    if(err) throw err
    console.log('connected')
})

module.exports =connexion;