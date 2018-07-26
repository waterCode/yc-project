<template>
<div style="margin: 20px">
  <el-input
    type="textarea"
    autosize
    placeholder="请输入邮件主题"
    v-model="emailTheme">
  </el-input>
  <div style="margin: 20px 0;"></div>
  <el-input
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 10}"
    placeholder="请输入群发邮件内容"
    v-model="emailContent">
  </el-input>
  <div style="margin-top: 20px">

  <div class="email-box-wrapper" ref="form">
    <div class="email-box" v-for="item in List"><el-input placeholder="请输入邮箱" prop="email" @blur="checkQQMail($event)"></el-input></div>
  </div>

  <div class="bottom-button">
    <el-button @click="add">添加邮箱空格</el-button>
    <el-button @click="decrease">删除邮箱空格</el-button>
  </div>
  <el-button type="primary" @click="sent">发送邮件</el-button>
  </div>
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "sent-email",
        data(){
          return{
            List:['1','1','1'],
            emailTheme:'',
            emailContent:'',
            toPeople:[]
          }
        },
        rules:{
          email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ]
        },
        methods:{
          sent(){
            var inputs = this.$refs.form.getElementsByClassName('email-box');
            var input = inputs[0].getElementsByTagName('input')[0];
            var requIred = true ;
            for(var i=0;i<inputs.length;i++){
              this.toPeople[i]={};
              this.toPeople[i].email = inputs[i].getElementsByTagName('input')[0].value;
              if(!inputs[i].getElementsByTagName('input')[0].value){
                requIred = false;
              }
            }
            if(!this.emailTheme||!this.emailTheme){
              requIred = false;
            }
            if(!requIred){
              alert("你还没填写完呢！");
              return;
            }
            // console.log(this.toPeople);
            var token = sessionStorage.getItem('accessToken');
            var sentData = {
              subject : this.emailTheme,
              content : this.emailContent,
              toPeople : this.toPeople
            };
            axios({
              url:"http://47.106.105.117:8083/secure/sentMail",
              method:"post",
              headers:{'authorization' : token},
              data : sentData
            }).then(res=>{
              if(res.data.result){
                alert("发送成功！")
              }else{
                alert("对不起，你没有权限！")
              }
            })
          },
          add(){
            this.List.push('1');
          },
          decrease(){
            var last = this.List.length-1;
            this.List.splice(last,1);
          },
          checkQQMail(that){
            var dom = that.srcElement || that.target;
            var value = dom.value;
            var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if(!reg.test(value)){
              that.srcElement.value = '';
            }
          },
        }
    }
</script>

<style scoped>
.email-box-wrapper{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.email-box{
  min-width: 150px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.bottom-button{
  display: flex;
  margin-bottom: 20px;
}
</style>
