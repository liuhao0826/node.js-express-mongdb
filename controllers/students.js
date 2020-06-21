let db =require("../models/db")   //拿到model

// showStudentList  是控制器 用来渲染一个学生列表的页面

exports.showStudents= (req,res)=>{
    db.getStudents(function(arr){           //arr是从model拿到的数据callback
        res.render("index2",{"arr":arr})
    })
}

exports.showStudent=(req,res)=>{
    res.render("index")
}



exports.doshowStudent = (req,res)=>{
    db.getStudent(req.body,(arr2) => {
        res.json({"results": arr2})
    })
}

exports.showStudent2 = (req,res)=>{
    db.getStudent2(req.body,(arr2) => {
        res.json({"results": arr2})
    })
}

  //渲染一个进入添加课程的页面
exports.add=(req,res)=>{
    res.render("add")
}

exports.add2=(req,res)=>{
    res.render("add2")
}




// 处理添加课程的逻辑
exports.doAdd = (req,res)=>{
    db.save(req.body,function(info){
        res.send(info)
    })
}


//处理删除学生的页面
exports.delete = (req,res)=>{
     res.render("delete")
    }

 exports.delete2 = (req,res)=>{
    res.render("delete2")
     }

//处理删除学生的逻辑
exports.doDelete = (req,res)=>{
    db.deleteone(req.body,function(info){
        res.send(info)
    })
}
exports.doDelete2 = (req,res)=>{
    db.deleteone2(req.body,function(info){
        res.send(info)
    })
}

//渲染一个学生登录成功进入首页的页面
exports.sy=(req,res)=>{
    res.render("sy")
}

exports.dosy = (req,res)=>{
    db.get(req.body,(arr2) => {
        res.json({"results": arr2})
    })
}
//渲染一个老师登录成功进入首页的页面
exports.sy2=(req,res)=>{
    res.render("sy2")
}

exports.dosy2 = (req,res)=>{
    db.get2(req.body,(arr2) => {
        res.json({"results": arr2})
    })
}

//处理完善学生信息的逻辑
exports.doAdds = (req,res)=>{
    db.saves(req.body,function(info){
        res.send(info)
    })
}


//处理完善老师信息的逻辑
exports.doAdds2 = (req,res)=>{
    db.saves2(req.body,function(info){
        res.send(info)
    })
}


