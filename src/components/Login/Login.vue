<template>
  <div class="login-allbox">
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
            <router-link to="/" class="navbar-brand"><img class="brand-image" src="./../../../static/images/logo.png" alt="">YC勇创</router-link>
          </div>
          <div class="collapse navbar-collapse pull-right" id="example-navbar-collapse">
            <ul class="nav navbar-nav thenavbar">
              <li><router-link to="/">主页</router-link></li>
              <li><router-link to="/joinUsPage">加入我们</router-link></li>
              <li><router-link to="/joinCompetition">竞赛报名</router-link></li>
              <li class="active" :style="{'padding':isLoginButtonShow? '0 15': '0'}"><router-link to="/login" v-show="isLoginButtonShow" :style="{'padding':isLoginButtonShow? '15': '0'}"><img class="login-image" src="./../../../static/images/login.png">登录</router-link></li>
              <li class="zhuce-li"><router-link to="/register"><span class="register-image glyphicon glyphicon-cloud"></span><span>注册</span></router-link></li>
              <!---->
              <li class="loginName" v-if="isUserCenterShow">
                <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link ">
                    {{currentUserName}}<i class="el-icon-arrow-down el-icon--right"></i>
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
    <div class="loginWrapper">
      <div class="hd">
        <h2>YC勇创团队</h2>
        <p>与世界分享你的知识、经验和见解</p>
      </div>
      <div class="bd">
        <el-form :model="loginForm" :rules="loginRule" ref="loginForm">
          <el-form-item prop="userName">
            <el-input type="userName" v-model="loginForm.userName" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" class="submitBtn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="ft">
        <router-link to="/register">还没有账号？马上注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { doLogin } from '../../lib/vueHelper'

export default {
  name: 'login',
  created(){
    this.checkLogin()
  },
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      loginRule: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      },
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
  methods: {
    submitForm () {
      doLogin(this,this.loginForm)
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
.sign-in-li{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.login-image{
  margin-right: 5px;
  width: 12px;
  height: 12px;
  margin-top: -3px;
}
.zhuce-li{
  position: relative;
}
.zhuce-li span{
  display: inline-block;
}
.register-image{
  position: absolute;
  left: -6px;
  top: 18px;
  height: auto;
  margin-right: 5px;
  font-size: 15px;
  color: #fff;
}
@media screen and (max-width: 768px){
  .register-image{
    position: absolute;
    left: -5px;
    top: 14px;
    height: auto;
    margin-right: 5px;
    font-size: 15px;
    color: #fff;
  }
  .thenavbar{
    display: flex;
    flex-direction: column !important;
  }
  .zhuce-li a{
    margin-left: 20px;
  }
}
/***/
.thenavbar{
  display: flex;
  align-items: center;
}
@media screen and (max-width: 767px) {
  .thenavbar{
    display: flex;
    flex-direction: column;
  }
}
.video-js .vjs-big-play-button{}
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.all-container{
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
.index-container{
  margin-bottom: 0;
}
.navbar-brand{
  display: flex;
  flex-direction: row;
  color: #fff !important;
}
.brand-image{
  width: 20px;
  height: 25px;
  margin-right: 8px;
  margin-top: -4px;
}
.navbar{
  margin-bottom: 0;
}
.navbar-nav li{
  padding: 0 15px;
}
.navbar-nav .active{
  background-color: #080808;
}
@media (min-width: 768px){
  .navbar{
    border-radius: 0 !important;
  }
}
.login-allbox{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("./../../../static/images/加入我们背景.jpg");
  background-size: cover;
}
.loginWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-size: 18px;
    position: relative;
    top: 18%;
}
.loginWrapper .hd {
  width: 300px;
  margin-bottom: 20px;
}

.loginWrapper .hd h2 {
    margin-bottom: 10px;
    font-weight: 400;
    color: #41B883;
}

.loginWrapper .hd p {
  font-size: 15px;
  color: #fff;
}

.loginWrapper .bd {
    width: 300px;
}

.loginWrapper .bd .submitBtn {
  width: 100%;
}

.loginWrapper .bd .el-form-item:last-child {
  margin-bottom: 10px;
}

.loginWrapper .ft {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
}

.loginWrapper .ft a {
  font-size: 14px;
  text-decoration: none;
  color: #41B883;
}
.el-button--primary{
  background-color: #41B883;
  border-color: #41B883;
}
</style>
