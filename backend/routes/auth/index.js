var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let inquerySql = 'SELECT * FROM board';
    console.log(inquerySql);
    // connection.query(inquerySql, (err,result, fields)=>{
    //     if(err) {
    //         console.log(err);
    //         res.status(500).send("Error");
    //     } else {
    //         res.send(result);
    //     }
    // })
    res.send('success')
});

module.exports = router;
