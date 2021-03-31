<template>
  <div class="login_container">
      <div class="login_box">
        <div class="axatar_box">
            <img src="..\assets\avatar.jpg" alt="">
        </div>
      
        <el-form :inline="true" :model="form" ref="form" :rules="formrules" class="login_form">
          <el-form-item prop="username" id="input">
              <el-input v-model="form.username" type="text" placeholder="请输入用户名...">
                  <el-button icon="el-icon-user-solid" slot="prepend"></el-button>
              </el-input>
          </el-form-item>
          <br>
          <el-form-item prop="password"  id="input">
              <el-input v-model="form.password" type="password" placeholder="请输入密码...">
                  <el-button icon="el-icon-unlock" slot="prepend"></el-button>
              </el-input>
          </el-form-item>
          <el-form-item class="btns">
                <el-button type="primary" @click="login('form')">登录</el-button>
                <el-button type="info" @click="reset">退出</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '欢迎登陆博客管理系统',
            form:{
                username: '',
                password: '',
                sage:''
            },
            formrules:{
                username:[{required:true,message:'请输入用户名',trigger:'blur'}],
                password:[{required:true,message:'请输入密码',trigger:'blur'}],
            }
        }
    },
    methods:{
        login(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    let params = {
                        username: this.form.username,
                        password: this.form.password
                    }
                    this.$axios.post("http://localhost:3000/blog/login",params).then(res=>{
                        if(res.data != 1){
                            localStorage.setItem('name',res.data[0].a_name)
                            localStorage.setItem('id',res.data[0].ad_id)
                            localStorage.setItem('last',res.data[0].last_login_at)
                            this.$router.push({
                                path: '/index'
                            })
                            this.$message({
                                type:'success',
                                message:'登录成功'
                            })
                        } else {
                            this.$message({
                                type:'danger',
                                message:'请输入正确的信息'
                            })
                        }   
                    })
                }  
            })
            this.form.username = ''
            this.form.password = ''
        },
        reset(){
            this.form.username = ''
            this.form.password = ''
        },
    }
}
</script>

<style scoped>
/* npm install less less-loader --save-dev */
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow:2px 2px 10px #06c;
    }
    .axatar_box{
        height: 130px;
        width: 130px;    
        border: 1px solid #abcdef;
        border-radius: 50%;
        /* padding: 10px; */
        background-color: #eee;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    img{
        width: 100%;
        height:100%;
        border-radius: 50%;
        box-shadow:0 0 10px #ddd;
    }
    .btns{
        display: flex;
        justify-content: center;
    }
    .login_form{
        position: absolute;
        bottom: 0%;
        width: 450px;
        padding: 0%;
        box-sizing: border-box;
    }
    #input{
        display: flex;
        justify-content: center;
    }
</style>