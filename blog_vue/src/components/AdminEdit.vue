<template>
  <div class="hello">
      <el-dialog title="编辑用户信息" :visible.sync="dialogEdit.show">
        <el-form :model="form" ref="formEdit" :rules="formrules">
            <el-form-item label="序号" prop="ad_id"> 
                <el-input v-model="form.ad_id"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username"> 
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password"> 
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="职位" prop="role"> 
                <el-input v-model="form.role"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogEdit.show = false">取消</el-button>
            <el-button type="primary" @click="dialogFormEdit('formEdit')">确定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
    // 初始值
    props: {
        dialogEdit: Object,
        form: Object
    },
    data(){
        return {
            formrules:{
                ad_id:[{required:true,message:'序号不能为空',trigger:'blur'}],
                password:[{required:true,message:'密码不能为空',trigger:'blur'}],
                username:[{required:true,message:'用户名不能为空',trigger:'blur'}],
            }
        }
    },
    methods:{
        dialogFormEdit(formEdit){
            this.$refs[formEdit].validate((valid)=>{
                if(valid){
                    let data ={
                        ad_id: this.form.ad_id,
                        username: this.form.username,
                        password: this.form.password,
                        role: this.form.role
                    }
                    this.$axios.put('http://localhost:3000/blog/upadmin',data).then((res) =>{
                        this.$message({
                            type:'success',
                            message:'修改用户成功'
                        })
                        this.dialogEdit.show = false;
                        this.$emit('updateEdit');
                    })
                } else{
                    console.log("error")
                    return false;
                }
            })
        }
    }
}
</script>

<style>

</style>