<template>
  <div class="all-container">
    <!--导航-->
    <div class="index-container">
      <nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" class="navbar-brand" href="#">YC勇创</router-link>
          </div>
          <div class="collapse navbar-collapse pull-right" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">主页</router-link></li>
              <li class="active"><router-link to="/joinus">加入我们</router-link></li>
              <li><router-link to="/joinCompetition">竞赛报名</router-link></li>
              <li><a href="#">登录</a></li>
              <li><a href="#">注册</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="joinus-content">

      <div class="joinus-desc">
        <p>Fill In The Registration Form</p>
        <p>只要是你对学习技术有一定的热情，同时又符合我们的要求，请填写上面的报名表，快快加入我们吧</p>
      </div>

      <div class="joinus-box">
      <div class="joinus-contentbox">
      <div class="joinus-header">
        <span class="big1">报名</span>
        <span class="big2">Sign up now</span>
        <span></span>
      </div>
      <form class="joinus-form">
        <input type="text" name="name" placeholder="姓名" required="required" v-model="joinUsForm.joinerName" @blur="checkName">
        <input type="text" name="school" placeholder="学院" required="required" v-model="joinUsForm.college">
        <input type="text" name="studentid" placeholder="学号" required="required" v-model="joinUsForm.studentNum">
        <input type="text" name="perfession_class" placeholder="专业班级" required="required" v-model="joinUsForm.className">
        <input type="text" name="qq" placeholder="QQ" required="required" v-model="joinUsForm.qqNum" @blur="checkQQ">
        <input type="text" name="qqMail" placeholder="QQ邮箱" required="required" v-model="joinUsForm.qqEmail" @blur="checkQQMail">
        <input type="text" name="telephone" placeholder="手机号码" required="required" v-model="joinUsForm.telephone" @blur="checkphone">
        <select>
          <option value="飞控组" selected="selected">飞控组</option>
          <option value="机器人组">机器人组</option>
          <option value="嵌入式组">嵌入式组</option>
          <option value="图像处理组">图像处理组</option>
          <option value="硬件组">硬件组</option>
          <option value="APP组">APP组</option>
          <option value="网页组">网页组</option>
          <option value="专利组">专利组</option>
        </select>
        <textarea style="resize:none" placeholder="自我介绍" required="required" v-model="joinUsForm.introduceDescription" maxlength="200"></textarea>
        <textarea style="resize:none" placeholder="目前掌握技能" required="required" v-model="joinUsForm.skill" maxlength="200"></textarea>
        <textarea style="resize:none" placeholder="项目经验" required="required" v-model="joinUsForm.experience" maxlength="200"></textarea>
        <textarea style="resize:none" placeholder="获奖情况" required="required" v-model="joinUsForm.award" maxlength="200"></textarea>
        <a class="submit-button" @click ='joinUs()'>提交</a>
      </form>
      </div>
      </div>



    </div>
    <footer>
      <FooterYc class="thefooter"></FooterYc>
    </footer>
  </div>
</template>

<script>

import FooterYc from './../footer/footer.vue'
import {postJoinUsData} from './../../lib/vueHelper'
export default {
  components:{
      FooterYc
  },
  computed:{

  },
  data() {
    return {
    }
  },
  methods:{
    joinUs(){
      if(this.joinUsForm.joinerName&&this.joinUsForm.college&&this.joinUsForm.studentNum&&this.joinUsForm.className&&this.joinUsForm.qqNum&&this.joinUsForm.qqEmail&&this.joinUsForm.telephone&&this.joinUsForm.groupName&&this.joinUsForm.introduceDescription&&this.joinUsForm.skill&&this.joinUsForm.experience&&this.joinUsForm.award){
        postJoinUsData(this,this.joinUsForm);
      }else{
        alert("你还有信息没填写完成！");
      }
    },
    checkName(){
      var reg=/^([\u4e00-\u9fa5]){2,7}$/;
      if(!reg.test(this.joinUsForm.joinerName)){
        this.joinUsForm.joinerName = '';
      }
    },
    checkQQ(){
      var reg = /^[1-9][0-9]{4,11}$/;
      if(!reg.test(this.joinUsForm.qqNum)){
        this.joinUsForm.qqNum = '';
      }
    },
    checkQQMail(){
      var ref = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if(!reg.test(this.joinUsForm.qqEmail)){
        this.joinUsForm.qqEmail = '';
      }
    },
    checkphone(){
      var reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
      if(!reg.test(this.joinUsForm.telephone)){
        this.joinUsForm.telephone = '';
      }
    }
  },
  data(){
    return{
      joinUsForm:{
        joinerName:'',
        college:'',
        studentNum:'',
        className:'',
        qqNum:'',
        qqEmail:'',
        telephone:'',
        groupName:'',
        introduceDescription:'',
        skill:'',
        experience:'',
        award:'',
        isAdjust:false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './../../../static/css/joinus.css'

</style>
