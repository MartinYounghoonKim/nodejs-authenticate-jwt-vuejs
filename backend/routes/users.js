const express = require('express');
const router = express.Router();

/**
 * @param { mysql Connection }
 */
const mysql = require('mysql');
//const env = app.get('env');
const mysqlConfig = require('../config/database.config');
const connection = mysql.createConnection(mysqlConfig);
connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
  let inquerySql = 'SELECT * FROM users';
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
