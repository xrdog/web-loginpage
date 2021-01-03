let express = require('express');
let app = express();
 
let bodyParser = require('body-parser');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cy200412.',
  database : 'test'
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
  
app.get('/login', function (req, res) {
 
    // 输出 JSON 格式
    console.log(req.query);
    res.end();
 })

var server = app.listen(8081, function () {
  console.log("应用实例，访问地址为 http://127.0.0.1:8081/index");
})