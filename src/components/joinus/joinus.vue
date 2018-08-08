<template>
  <div class="all-container">
    <div class="index-container">
        <nav class="navbar navbar-inverse" role="navigation">
          <div class="container ceng">
            <div class="navbar-header ceng-1">
              <button type="button" class="navbar-toggle" data-toggle="collapse"
                  data-target="#example-navbar-collapse">
                <span class="sr-only">切换导航</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link to="/" class="navbar-brand"><img class="brand-image" src="./../../../static/images/logo.png" alt="">YC勇创</router-link>
            </div>
            <div class="ceng-2 collapse navbar-collapse pull-right" id="example-navbar-collapse">
              <ul class="nav navbar-nav thenavbar">
                <li><router-link to="/">主页</router-link></li>
                <li class="join-us-li active"><router-link to="/joinUsPage">加入我们</router-link></li>
                <li><router-link to="/joinCompetition">竞赛报名</router-link></li>
                <li class="sign-in-li" :style="{'padding':isLoginButtonShow? '0 15': '0'}"><router-link to="/login" v-show="isLoginButtonShow" :style="{'padding':isLoginButtonShow? '15': '0'}">
                <img class="login-image" src="./../../../static/images/login.png">登录
                </router-link></li>
                <li class="zhuce-li"><router-link to="/register"><span class="register-image glyphicon glyphicon-cloud"></span><span>注册</span></router-link></li>
                <!---->
                <li class="loginName" v-if="isUserCenterShow">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link ">
                      <img class="login-image" src="./../../../static/images/login.png">{{currentUserName}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">个人中心</el-dropdown-item>
                      <el-dropdown-item command="b">退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <!---->
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
        <div>
          <span class="big1">报名</span>
          <span class="big2">Sign up now</span>
        </div>
        <span><img src="./../../../static/images/pic6.png"></span>
      </div>
      <form class="joinus-form">
        <input type="text" name="name" placeholder=" 姓名" required="required" v-model="joinUsForm.joinerName" @blur="checkName">
        <input type="text" name="school" placeholder=" 学院" required="required" v-model="joinUsForm.college">
        <input type="text" name="studentid" placeholder=" 学号" required="required" v-model="joinUsForm.studentNum">
        <input type="text" name="perfession_class" placeholder=" 专业班级" required="required" v-model="joinUsForm.className">
        <input type="text" name="qq" placeholder=" QQ" required="required" v-model="joinUsForm.qqNum" @blur="checkQQ">
        <input type="text" name="qqMail" placeholder=" QQ邮箱" required="required" v-model="joinUsForm.qqEmail" @blur="checkQQMail">
        <input type="text" name="telephone" placeholder=" 手机号码" required="required" v-model="joinUsForm.telephone" @blur="checkphone">
        <select v-model="joinUsForm.groupName">
          <option value="飞控组" selected="selected">飞控组</option>
          <option value="机器人组">机器人组</option>
          <option value="嵌入式组">嵌入式组</option>
          <option value="图像处理组">图像处理组</option>
          <option value="硬件组">硬件组</option>
          <option value="APP组">APP组</option>
          <option value="网页组">网页组</option>
          <option value="专利组">专利组</option>
        </select>
        <textarea style="resize:none" placeholder=" 自我介绍" required="required" v-model="joinUsForm.introduceDescription" maxlength="200"></textarea>
        <textarea style="resize:none" placeholder=" 目前掌握技能" required="required" v-model="joinUsForm.skill" maxlength="200"></textarea>
        <textarea style="resize:none" placeholder=" 项目经验" required="required" v-model="joinUsForm.experience" maxlength="200"></textarea>
        <textarea style="resize:none" placeholder=" 获奖情况" required="required" v-model="joinUsForm.award" maxlength="200"></textarea>
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
  created(){
    this.checkLogin()
  },
  computed:{

  },
  data() {
    return {
        playerOptions : {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: true, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: true, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "",
              src: "./../../static/video/2.mp4" //url地址
            }],
            poster: "./../../static/images/pic-1.jpg", //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true  //全屏按钮
            }
        },
        loginName:'登陆',
        currentUserName:'',
        isUserCenterShow:false,
        isLoginButtonShow:true
    }
  },
  methods:{
    joinUs(){
      if(this.joinUsForm.joinerName&&this.joinUsForm.college&&this.joinUsForm.studentNum&&this.joinUsForm.className&&this.joinUsForm.qqNum&&this.joinUsForm.qqEmail&&this.joinUsForm.telephone&&this.joinUsForm.introduceDescription&&this.joinUsForm.skill&&this.joinUsForm.experience&&this.joinUsForm.award&&this.joinUsForm.groupName){
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
      var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if(!reg.test(this.joinUsForm.qqEmail)){
        this.joinUsForm.qqEmail = '';
      }
    },
    checkphone(){
      var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if(!reg.test(this.joinUsForm.telephone)){
        this.joinUsForm.telephone = '';
      }
    },
    checkLogin(){
     let name = sessionStorage.getItem("currentUserName")
      if(name == null){
       this.loginName = '登陆'
        this.isLoginButtonShow = true
        this.isUserCenterShow = false
      }else {
       this.currentUserName = name
        this.isLoginButtonShow = false
        this.isUserCenterShow = true
      }
    },
    handleCommand(command){
      if(command == 'a'){
        this.$router.push('/userCenterPage');
      }else {
        sessionStorage.removeItem("accessToken")
        sessionStorage.removeItem("currentUserName")
        this.isLoginButtonShow = true
        this.isUserCenterShow = false
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
@import './../../../static/css/joinus.css';
</style>
