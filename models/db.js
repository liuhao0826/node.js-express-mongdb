var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
//老师查询所有学生
function getStudents(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            //console.log(result);
            callback(result)      //把数据交给控制器
            db.close();
        });
    });
    
}
//学生查询学生所选情况
function getStudent(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"user":data.user};  // 查询条件
        dbo.collection("site"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            callback(result)      //把数据交给控制器
            db.close();
        });
    });
    
}
//老师查询所选学生情况
function getStudent2(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"tuser":data.tuser};  // 查询条件
        dbo.collection("site"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            callback(result)      //把数据交给控制器
            db.close();
        });
    });
    
}



// 存储一个学生或者老师选课后的信息（共用一个逻辑）
function save(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        dbo.collection("site").insertOne(data, function(err, res) {
            if (err){
                console.log("插入课程失败了~");
                callback("-1"); // -1代表插入失败了  
            };
            callback("1"); // 1代表插入数据成功了
            console.log("插入课程成功");
            db.close();
        });
    });
}
//学生操作删除学生某个选课信息
function deleteone (data,callback){ 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xscms");
    var whereStr = {"user":data.user,"book":data.book};  // 查询条件
     dbo.collection("site").deleteOne(whereStr, function(err, obj) {
        if (err){
            console.log("删除数据失败了~");
            callback("-1"); // -1代表插入失败了  
        };
        callback("1"); // 1代表插入数据成功了
        console.log("删除数据成功");
        db.close();
    });
});
}
//老师操作删除学生的某个选课信息
function deleteone2 (data,callback){ 
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"user":data.user,"tuser":data.tuser};  // 查询条件
         dbo.collection("site").deleteOne(whereStr, function(err, obj) {
            if (err){
                console.log("删除数据失败了~");
                callback("-1"); // -1代表插入失败了  
            };
            callback("1"); // 1代表插入数据成功了
            console.log("删除数据成功");
            db.close();
        });
    });
    }
    



// 完善一个学生的个人信息
function saves(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"user":data.user};  // 查询条件
        var updateStr={$set:{ "age":data.age,"sex":data.sex,"place":data.place,"zy":data.zy  } };
        dbo.collection("users").updateOne(whereStr, updateStr ,function(err, res) {
            if (err){
                console.log("完善信息失败~");
                callback("-1"); // -1代表插入失败了  
            };
            callback("1"); // 1代表插入数据成功了
            console.log("完善成功");
            db.close();
        
        });
    });
}

//完善一个老师的个人信息
function saves2(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"tuser":data.tuser};  // 查询条件
        var updateStr={$set:{ "tage":data.tage,"tsex":data.tsex,"tplace":data.tplace,"txy":data.txy  } };
        dbo.collection("tusers").updateOne(whereStr, updateStr ,function(err, res) {
            if (err){
                console.log("完善信息失败~");
                callback("-1"); // -1代表插入失败了  
            };
            callback("1"); // 1代表插入数据成功了
            console.log("完善成功");
            db.close();
        
        });
    });
}


function get(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"user":data.user};  // 查询条件
        dbo.collection("users"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            callback(result)      //把数据交给控制器
            db.close();
        });
    });
}

function get2(data,callback){
    console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xscms");
        var whereStr = {"tuser":data.tuser};  // 查询条件
        dbo.collection("tusers"). find(whereStr).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            callback(result)      //把数据交给控制器
            db.close();
        });
    });
}

exports.getStudents=getStudents; //把方法导出
exports.getStudent=getStudent; //把方法导出
exports.getStudent2=getStudent2; //把方法导出
exports.save = save;  // 导出 
exports.deleteone = deleteone;// 导出 
exports.deleteone2 = deleteone2;// 导出 
exports.saves = saves;// 导出 
exports.saves2 = saves2;// 导出 
exports.get = get;// 导出 
exports.get2= get2;// 导出