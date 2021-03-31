var express = require('express');
const pool = require('../config/dbconfig');
var router = express.Router();

//测试页面
router.get('/',function(req,res){
    res.render('test');
})

//登录
//http://localhost:3000/blog/login
router.post('/login',function(req,res){
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
                if(error){
                    return error
                }
                res.send(results);
                conn.release();//释放数据库
                
            })
        }
    })
})
//分类列表接口--查询所有的分类信息
//http://localhost:3000/blog/allcate
router.get('/allcate',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let sql = "select * from cate";
            conn.query(sql,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//单条分类信息接口--按ID查询
//http://localhost:3000/blog/selcate
router.post('/selcate',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let c_id = req.body.c_id;
            let sql = "select * from cate where c_id=?";
            conn.query(sql,c_id,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//添加分类信息接口
//http://localhost:3000/blog/incate
router.post('/incate',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let c_id = req.body.c_id;
            let c_name = req.body.c_name;
            let created_at = req.body.created_at;
            let updated_at = req.body.updated_at;
            let sql = "insert into cate set ?";
            let data = {c_id:c_id,c_name:c_name,created_at:new Date(created_at),updated_at:new Date(updated_at)};
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('添加失败')
                    throw error
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//修改分类信息接口
//http://localhost:3000/blog/upcate
router.post('/upcate',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let c_id = req.body.c_id;
            let c_name = req.body.c_name;
            let created_at = req.body.created_at;
            let updated_at = req.body.updated_at;
            let sql = "update cate set c_name=?,created_at=?,updated_at=? where c_id=?";
            let data = [c_name,new Date(created_at),new Date(updated_at),c_id];
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('更新失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//根据ID删除管理员接口数据
//http://localhost:3000/blog/delcate
router.delete('/delcate',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
            throw err
        }
        else{
            console.log('数据库连接成功')
            let c_id = req.body.c_id;
            let sql = "delete from cate where c_id=?";
            conn.query(sql,c_id,function(error,results){
                if(error){
                    console.log('删除失败')
                    throw error
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//文章列表接口--查询所有的文章信息
//http://localhost:3000/blog/allarticle
router.get('/allarticle',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let sql = "select * from article";
            conn.query(sql,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//单条文章列表接口--按ID查询
//http://localhost:3000/blog/selarticle
router.post('/selarticle',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let a_id = req.body.a_id;
            let sql = "select * from article where a_id=?";
            conn.query(sql,a_id,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//添加文章信息接口
//http://localhost:3000/blog/inarticle
router.post('/inarticle',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let a_id = req.body.a_id;
            let a_cate = req.body.a_cate;
            let title = req.body.title;
            let a_desc = req.body.a_desc;
            let content = req.body.content;
            let acreated_at = req.body.acreated_at;
            let aupdated_at = req.body.aupdated_at;

            let sql = "insert into article set ?";
            let data = {a_id:a_id,a_cate:a_cate,title:title,a_desc:a_desc,content:content,acreated_at:new Date(acreated_at),aupdated_at:new Date(aupdated_at)};
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('查询失败')
                    throw error
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//修改文章接口
//http://localhost:3000/blog/uparticle
router.post('/uparticle',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let a_id = req.body.a_id;
            let a_cate = req.body.a_cate;
            let title = req.body.title;
            let a_desc = req.body.a_desc;
            let content = req.body.content;
            let acreated_at = req.body.acreated_at;
            let aupdated_at = req.body.aupdated_at;
            let sql = "update article set a_cate=?,title=?,a_desc=?,content=?,acreated_at=?,aupdated_at=? where a_id=?";
            let data = [a_cate,title,a_desc,content,new Date(acreated_at),new Date(aupdated_at),a_id];
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('更新失败')
                    console.log(error)
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }        
    })
})

//根据ID删除文章接口数据
//http://localhost:3000/blog/delarticle
router.delete('/delarticle',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let a_id = req.body.a_id;
            let sql = "delete from article where a_id=?";
            conn.query(sql,a_id,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//查看博客列表接口--查询所有的文章信息
//http://localhost:3000/blog/allinfo
router.get('/allinfo',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let sql = "select * from info";
            conn.query(sql,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//修改博客列表接口--按ID修改
//http://localhost:3000/blog/upinfo
router.post('/upinfo',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let i_id = req.body.i_id;
            let i_title = req.body.i_title;
            let subtitle = req.body.subtitle;
            let about = req.body.about;
            let i_create = req.body.i_create;
            let i_update = req.body.i_update;
            let sql = "update info set i_title=?,subtitle=?,about=?,i_create=?,i_update=? where i_id=?";
            let data = [i_title,subtitle,about,new Date(i_create),new Date(i_update),i_id];
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('更新失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//查看管理员列表接口--查询所有的管理员信息
//http://localhost:3000/blog/alladmin
router.get('/alladmin',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let sql = "select * from admin";
            conn.query(sql,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//单条管理员信息接口--按ID查询
//http://localhost:3000/blog/seladmin
router.post('/seladmin',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let ad_id = req.body.ad_id;
            let sql = "select * from admin where ad_id=?";
            conn.query(sql,ad_id,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})

//添加管理员信息接口
//http://localhost:3000/blog/inadmin
router.post('/inadmin',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let ad_id = req.body.ad_id;
            let username = req.body.username;
            let password = req.body.password;
            let a_name = req.body.a_name;
            let role = req.body.role;
            let last_login_at = req.body.last_login_at;
            let ad_create = req.body.ad_create;
            let ad_update = req.body.ad_update;
            let sql = "insert into admin set ?";
            let data = {ad_id:ad_id,username:username,password:password,a_name:a_name,role:role,last_login_at:new Date(last_login_at),ad_create:new Date(ad_create),ad_update:new Date(ad_update)};
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('添加失败')
                    throw error
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})
//修改管理员信息接口
//http://localhost:3000/blog/upadmin
router.post('/upadmin',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let ad_id = req.body.ad_id;
            let username = req.body.username;
            let password = req.body.password;
            let a_name = req.body.a_name;
            let role = req.body.role;
            let last_login_at = req.body.last_login_at;
            let ad_create = req.body.ad_create;
            let ad_update = req.body.ad_update;
            let sql = "update admin set username=?,password=?,a_name=?,role=?,last_login_at=?,ad_create=?,ad_update=? where ad_id=?";
            let data = [username,password,a_name,role,new Date(last_login_at),new Date(ad_create),new Date(ad_update),ad_id];
            conn.query(sql,data,function(error,results){
                if(error){
                    console.log('更新失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})
//根据ID删除管理员接口数据
//http://localhost:3000/blog/deladmin
router.delete('/deladmin',function(req,res){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('数据库连接失败')
        }
        else{
            console.log('数据库连接成功')
            let ad_id = req.body.ad_id;
            let sql = "delete from admin where ad_id=?";
            conn.query(sql,ad_id,function(error,results){
                if(error){
                    console.log('查询失败')
                }
                res.send(results);
                conn.release();//释放数据库
            })
        }
    })
})
module.exports = router;