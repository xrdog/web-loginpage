let express = require('express');
let app = express();
 
let bodyParser = require('body-parser');

var mysql      = require('mysql');
const { query } = require('express');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'xrdoglogin'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));
 
app.get('/index.html', function (req, res) {
  console.log('dirname',__dirname);
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/loginsuccess', function (req, res) {
  console.log('dirname',__dirname);
   res.sendFile( __dirname + "/" + "loginsuccess.html" );
})

app.get('/login', function (req, res) {
 
    // 输出 JSON 格式
    let querysql='select passwd from userinfo where username="'+req.query.username+'"';
    console.log(querysql);
    connection.query(querysql,function(err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
      }
      else{
            if (result.length) {
              console.log('--------------------------SELECT----------------------------');
              sqlpasswd=result[0].passwd;
              console.log(req.query);
              console.log(sqlpasswd);//拿到指定用户名的密码
              console.log(req.query.userpasswd);//待比较的密码
              console.log('------------------------------------------------------------\n\n');
              if (sqlpasswd == req.query.userpasswd) {
                res.end("登录成功");
              } //密码正确
              else {
                res.end("密码错误")
              } 
            }
            else {
              //用户不存在
              res.end("用户不存在");
            }
      }
    });
    
 })

 app.get('/register', function (req, res) {
 
  // 输出 JSON 格式
  let querysql='select passwd from userinfo where username="'+req.query.username+'"';
  console.log(querysql);
  connection.query(querysql,function(err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
    }
    else{
          if (result.length) {
            console.log('--------------------------SELECT----------------------------');
            sqlpasswd=result[0].passwd;
            console.log(req.query);
            console.log(sqlpasswd);//拿到指定用户名的密码
            console.log(req.query.userpasswd);//待比较的密码
            console.log('------------------------------------------------------------\n\n');
            res.end("用户已存在，暂不支持重复注册与修改");
          }
          else {
            //用户不存在
            let insertsql=`INSERT INTO userinfo (username,passwd) values ("${req.query.username}","${req.query.userpasswd}")`;
            console.log('insertsql:',insertsql);
            connection.query(insertsql,function(err,data){
              if(err){
                  console.log('插入数据失败')
                  res.end("注册失败");
              } else {
                  console.log('插入数据成功');
                  res.end("注册成功");
              }
            }
          );
        }
    }
  });
  
})
var server = app.listen(8081, function () {
  console.log("应用实例，访问地址为 http://127.0.0.1:8081/index");
})