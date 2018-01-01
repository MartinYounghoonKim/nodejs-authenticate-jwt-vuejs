const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('board');
    // let inquerySql = 'SELECT * FROM users';
    // connection.query(inquerySql, (err,result, fields)=>{
    //     if(err) {
    //         console.log(err);
    //         res.status(500).send("Error");
    //     } else {
    //         res.send(result);
    //     }
    // })
});

module.exports = router;
