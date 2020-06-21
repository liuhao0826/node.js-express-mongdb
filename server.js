let express = require("express");
var bodyParser = require('body-parser')
let path = require('path'); //系统路径模块
let students = require("./controllers/students")
let users = require("./controllers/users")
let app = express();



//express静态托管资源
app.use(express.static(path.join(__dirname, 'public')));



// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 通过req.body得到客户端传递过来的数据

app.set("view engine","ejs")

// 显示全部学生选课列表
app.get("/allStudent2",students.showStudents)

  //处理显示学生查询选课的页面
app.get("/allStudent",students.showStudent)
// 处理查询某个学生选课情况逻辑
app.post("/allStudent",students.doshowStudent)
// 处理查询老师被选情况的逻辑
app.post("/aStudent2",students.showStudent2)

// 显示学生操作添加学生选课表单
app.get("/add",students.add)
//显示老师操作添加学生选课表单
app.get("/add2",students.add2)

// 处理老师和学生添加学生的逻辑(老师和学生公用一个逻辑)
app.post("/add",students.doAdd)


//处理学生操作删除选课的页面
app.get("/delete",students.delete)
//处理老师操作删除选课的页面
app.get("/delete2",students.delete2)

//处理学生操作删除已选课程的逻辑
app.post("/delete",students.doDelete)
//处理老师操作删除学生已选课程的逻辑
app.post("/delete2",students.doDelete2)

//处理完善学生信息的逻辑
app.post("/adds",students.doAdds)

//处理完善老师信息的逻辑
app.post("/adds2",students.doAdds2)

//显示登录界面
app.get("/login",users.login)

//处理用户登录的逻辑
app.post("/login",users.doLogin)

//处理老师登录的逻辑
app.post("/login2",users.doLogin2)

//显示注册界面
app.get("/register",users.register)

//处理学生注册的逻辑
app.post("/register",users.doRegister)

//处理老师注册的逻辑
app.post("/register2",users.doRegister2)

//处理显示学生登录成功后的首页的页面
app.get("/sy",students.sy)
app.post("/sy",students.dosy)

//处理显示老师登录成功后的首页的页面
app.get("/sy2",students.sy2)
app.post("/sy2",students.dosy2)

app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})




