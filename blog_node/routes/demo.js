var express = require('express');
const pool = require('../config/dbconfig');
var router = express.Router();

//登录
//http://localhost:3000/login
router.post('/',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let username = req.body.username;
            let password = req.body.password;
            console.log(username)
            let data = [username,password]
            let sql = "select * from admin where username=? and password=?";
            conn.query(sql,data,function(error,results){
                console.log(results)
                if(error){
                    res.json({
                        //将相应信息转化为json格式
                        code:100,
                        msg:"登录错误"
                    })
                }
                if(results.length !=0){
                    res.json({
                        code:200,
                        msg:"登录成功"
                    })
                }
                else{
                    res.json({
                        code:100,
                        msg:"登录错误"
                    })
                }
                
                // console.log('查询结果：'+results)
                // res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

module.exports = router;