var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 



//处理学生登录逻辑
 function login(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var user=data.user;
        var psd=data.password;
        dbo.collection("users").findOne({user:user},function (err,result) {
            console.log(result);
            if (result==null){
                console.log("此学生不存在");
                callback("0");                 
          } else if(result.password !== psd){
            callback("-1"); 
            console.log("密码不正确");
        } else if (result.password === psd){
            callback("1"); 
            console.log("登录成功");
            db.close();
        }
     });
    });
 }
 

 //处理老师登录逻辑
 function login2(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var tuser=data.tuser;
        var tpsd=data.tpassword;
        dbo.collection("tusers").findOne({tuser:tuser},function (err,result) {
            console.log(result);
            if (result==null){
                console.log("此老师不存在");
                callback("0");                 
          } else if(result.tpassword !== tpsd){
            callback("-1"); 
            console.log("密码不正确");
        } else if (result.tpassword === tpsd){
            callback("1"); 
            console.log("登录成功");
            db.close();
        }
     });
    });
 }
 
 








// 注册一个学生信息
function saveuser(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        dbo.collection("users").insertOne(data, function(err, res) {
            if (err){
                console.log("插入学生失败了~");
                callback("-1"); 
            };
            callback("1"); 
            console.log("插入用户成功");
            db.close();
        });
    });
}



// 注册一个老师信息
function saveuser2(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        dbo.collection("tusers").insertOne(data, function(err, res) {
            if (err){
                console.log("插入用户失败了~");
                callback("-1"); 
            };
            callback("1"); 
            console.log("插入用户成功");
            db.close();
        });
    });
}




exports.saveuser2 = saveuser2;// 导出
exports.saveuser = saveuser;// 导出
exports.login = login;// 导出
exports.login2 = login2;// 导出



