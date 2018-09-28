let http = require('http');
let fs = require('fs');
let express = require('express');
let app = express();
//要使用ejs页面模板时，只要安装ejs模块就行，不需要用require引入
app.set('view engine', 'ejs');
let titles = [];

app.set('view engine', 'ejs');
fs.readFile('./data/titles.json', function(err, data){
    if(err) {
        res.end('读取文件发生错误');
    }else{
        //titles是十六进制的
        titles[0] = JSON.parse(data.toString());
        //用JSON.parse把它变为对象
    }
})
app.get('/', function(req, res){
    console.log(titles[0])
    res.render('index', {lists: titles});
});
app.listen(8888);
console.log('服务器已启动');