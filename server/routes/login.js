var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var models = require('./db');
var $sql = require('./sqlMap');

var pool = mysql.createPool(models.mysql);

var jsonWrite = (res, ret) => {
  if(typeof ret === `undefined`) {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

/* GET login page. */
router.get('/', function(req, res, next) {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('Database get conncetion.');
    const results = 'Get Database';
    res.send(results);
    connection.release();
  })
})


router.post('/', function(req, res, next) {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    // console.log('Database post connection');
    // const results = 'Post Database';
    // res.send(results);

    const sql = $sql.user.login;
    const params = req.body;
    connection.query(sql, [params.uname, params.password],
      (err, result) => {
        if(err) {
          console.log(err);
        }
        if(result) {
          // jsonWrite(res, result);
          for(let i = 0;i < result.length;i++) {
            // console.log('请求回来！', result[i]);
            // console.log('请求结果!', typeof result[i],result[i].password);
            let loginFlag = false;
            if(result[i].password == params.password) {
              loginFlag = true;
              res.send(loginFlag);
            } else {
              res.send(loginFlag);
            }
            
          }
        }
      }) 
    connection.release();
  })
})

module.exports = router;