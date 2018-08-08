<template>
  <div>
    <!--导航-->
      <div class="index-container">
        <nav class="navbar navbar-inverse" role="navigation">
          <div class="container compo-big-big">
            <div class="navbar-header compot-navbarnav">
              <button type="button" class="navbar-toggle" data-toggle="collapse"
                  data-target="#example-navbar-collapse">
                <span class="sr-only">切换导航</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div class="navbar-brand compo-brand">Runoob 第九届“纳丽德杯”NEXTORCH未来手电设计大赛报名表</div>
            </div>
            <div class="collapse navbar-collapse pull-right" id="example-navbar-collapse">
              <ul class="nav navbar-nav thenavbar">
                <li><router-link to="/">主页</router-link></li>
                <li><router-link to="/joinUsPage">加入我们</router-link></li>
                <li class="active"><router-link to="/joinCompetition">竞赛报名</router-link></li>
                <li :style="{'padding':isLoginButtonShow? '0 15': '0'}"><router-link to="/login" v-show="isLoginButtonShow" :style="{'padding':isLoginButtonShow? '15': '0'}"><img class="login-image" src="./../../../static/images/login.png">登录</router-link></li>
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
      <competitionContent></competitionContent>
      <footer-yc></footer-yc>
  </div>
</template>

<script>
import FooterYc from './../footer/footer.vue'
import competitionContent from './competitionContent.vue'
export default {
  components: {
    competitionContent,
    FooterYc
  },
  created(){
    this.checkLogin()
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

<style>
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
  left: -5px;
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
.compo-brand{
  font-size: 14px;
}
.thenavbar{
  display: flex;
  align-items: center;
}
@media (min-width: 768px) and (max-width: 998px){
  .compo-big-big{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 767px) {
  .thenavbar{
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 502px){
    .compot-navbarnav{
      display: flex;
    }
    .compot-navbarnav > .compo-brand{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-left: -21px;
    }
    .compot-navbarnav > .navbar-toggle{
      margin-left: 10px;
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
  color: #fff !important;
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
h1,h2,h3,h4,h5,label,td,th{
  padding: 0;
  margin: 0;
}
ul,li,span,p{
  padding: 0;
  margin:0;
  list-style: none;
}
td{
  text-align: center;
  font-weight: 700;
}
input,select{
  border: 1px solid #ccc;
}
.team-title{
  color: #fff !important;
}
.competition-titles{
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  font-weight: 600;
  margin-bottom: 30px;
}
.row-p{
  margin-bottom: 18px;
}
.row-p select{
  width: 178px;
  height: 25px;
}
.row-p label,.row-p span,.row-p input{
  display: inline-block;
}
.row-p label{
  width: 85px;
  text-align: right;
}
.row-p-special input{
  width: 300px;
}
.caption-pic{
  width: 120px;
  height: 146px;
  border:1px solid black;
  cursor: pointer;
  margin: 0 auto;
}
.caption-desc{
  padding-bottom: 20px;
}
.caption-desc
.tuo{
  text-align: center;
  padding: 0 !important;
}
.tuo p{
  display: inline-block;
  width: auto;
  padding-top: 5px;
  font-weight: 700;
  font-size: 13px;
  font-style: '微软雅黑';
}
.other-desc{
  margin-bottom: 40px;
}
.signup-time{
   margin-top: 20px;
  margin-bottom: 30px;
}
.signup-time span:first-child input{
  width: 25px;
  text-align: center;
  margin-right: 3px;
}
.signup-time span:first-child input:first-child{
  width: 50px;
}
.signup-time span:last-child input{
  width: 100px;
}
.competition-footer{
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin-top: 50px;
  background: #000;
  color: #fff;
}
</style>
