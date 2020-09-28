const bcrypt = require('bcrypt')
// 1-CREATION DES DEPENDANCES DE MODULES
var mysql = require('mysql');

// 2 - CONNECTION A LA BASE DE DONNEES
const dbConnexion = mysql.createConnection({
    host:"localhost",
    database: "movies",
    user: "root",
    password: "",
    port: 3306,
    strict: false
});


// 3- VERIFICATION DE LA CONNEXION A LA BASE
dbConnexion.connect((err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Connexion à la base réussie");
    }
});

// LISTE DES VARIABLES QUI VONT ETRE EXPORTEES
// NOM DE L'EXPORT : VARIABLES EXPORTEES
module.exports = dbConnexion