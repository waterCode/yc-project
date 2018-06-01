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
    <el-button type="primary">发送邮件</el-button>
  </div>
</div>
</template>

<script>
    export default {
        name: "sent-email",
        data(){
          return{
            emailTheme:'',

          }
        }
    }
</script>

<style scoped>

</style>
