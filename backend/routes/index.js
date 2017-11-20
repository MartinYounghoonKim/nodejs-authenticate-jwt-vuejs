var express = require('express');
var router = express.Router();

/**
 * @param { mysql Connection }
 * https://github.com/ericf/express-handlebars
 */
const mysql = require('mysql');
//const env = app.get('env');
const mysqlConfig = require('../config/database.config');
const connection = mysql.createConnection(mysqlConfig);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  let inquerySql = 'SELECT * FROM lazyside_admin';
  connection.query(inquerySql, (err,result, fields)=>{
      if(err) {
          console.log(err);
          res.status(500).send("Error");
      } else {
          res.send(result);
      }
  })
});

module.exports = router;
