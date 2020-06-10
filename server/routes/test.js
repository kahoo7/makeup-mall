var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var models = require('./db')

var pool = mysql.createPool(models.mysql);

/* GET test page. */
router.get('/', function(req, res, next) {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connection success');
    const sql = `SELECT * FROM user`;
    connection.query(sql, (err, results, fields) => {
      res.send(results)
      connection.release();
    });
  });
})



router.post('/', function(req, res, next) {

})

// connection.end()
module.exports = router;
