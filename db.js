
//创建数据库，插入集合
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/xscms';
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("xscms");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建site集合!");
         });
    dbase.createCollection('users', function (err, res) {
        if (err) throw err;
        console.log("创建users集合!");
       });
       dbase.createCollection('tusers', function (err, res) {
        if (err) throw err;
        console.log("创建tusers集合!");
        db.close();
    });
});

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xscms");
    var myobj = { user: "赵可硕", tuser: "赵四" , book:"计算机网络", time:"2,4,6上午第2节"};
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xscms");
    var myobj = { user: "赵可硕" ,password :"123" ,age: "20", sex: "男",place:"洛阳",zy:"物联网工程"};
    dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xscms");
    var myobj = { tuser: "赵四" ,tpassword :"123" ,tage: "40", tsex: "男",tplace:"洛阳" ,txy:"信息工程学院"};
    dbo.collection("tusers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});






 







