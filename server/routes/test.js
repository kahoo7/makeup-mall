var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'database',
  port: '3306'
});


/* GET createdb page. */
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

// router.get('/', function(req, res, next) {
//   pool.getConnection((err, connection) => {
//     if(err) throw err;
//     res.send(
//       `
//       <input type="text" name="uname"/>
//       <input type="password" name="password"/>
//       <a href="">提交</a>
//       `
//       );
//     connection.release();
//   })
// })


// router.get('/', (req, res, next) => {
//   pool.getConnection((err, connection) => {
//     if(err) throw err;
//     res.json({
//       name: 'sz',
//       age: 12
//     })
//     connection.release();
//   })
// })


router.post('/', function(req, res, next) {

})

// connection.end()
module.exports = router;
