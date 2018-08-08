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
            <router-link to="/" class="navbar-brand"><img class="brand-image" src="./../../static/images/logo.png" alt="">YC勇创</router-link>
          </div>
          <div class="collapse navbar-collapse pull-right" id="example-navbar-collapse">
            <ul class="nav navbar-nav thenavbar">
              <li class="active"><router-link to="/">主页</router-link></li>
              <li><router-link to="/joinUsPage">加入我们</router-link></li>
              <li><router-link to="/joinCompetition">竞赛报名</router-link></li>
              <li :style="{'padding':isLoginButtonShow? '0 15': '0'}"><router-link to="/login" v-show="isLoginButtonShow" :style="{'padding':isLoginButtonShow? '15': '0'}"><img class="login-image" src="./../../static/images/login.png">登录</router-link></li>
              <li class="zhuce-li"><router-link to="/register"><span class="register-image glyphicon glyphicon-cloud"></span><span>注册</span></router-link></li>
              <!---->
              <li class="loginName" v-if="isUserCenterShow">
                <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link ">
                    <img class="login-image" src="./../../static/images/login.png">{{currentUserName}}<i class="el-icon-arrow-down el-icon--right"></i>
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


    <video-player  class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
    ></video-player>


      <!--page2-->
      <div class="container page-2">
        <div class="container about-us">
          <h2 class="row about-us-title-1">About Us</h2>
          <div class="row about-us-title-2"><span>一</span>关于我们<span>一</span></div>
          <div class="row about-us-things-1">
            <div class="col-sm-6 col-xs-12">
              <img src="./../../static/images/aboutus1.png" class="ganwei-pic">
            </div>
            <div class="col-sm-6 col-xs-12 ganwei-cintainer-allbox">
              <div class="row ganwei-container">
                <div class="col-sm-12 col-xs-12 ganwei-header">
                  <div class="ganwei-renxian">敢为人先</div>
                  <div class="ganwei-desc">Dare to be first</div>
                  <div class="ganwei-box"></div>
                </div>
                <div class="col-sm-12 col-xs-12 ganwei-things">
                  YC勇创团队的前身是苏老师带领的无人机科研小组，该小组在苏老师的指导下获得了“挑战杯”全国一等奖1项、二等奖1项和三等奖1项，以及全国大学生电子竞赛一等奖、二等奖各1项。正是由于取得了巨大的成就，苏老师应学校邀请，正式成立YC勇创团队，并与电子协会和智能模型协会保持合作关系。
                </div>
              </div>
            </div>
          </div>
          <div class="row about-us-things-1">
            <div class="col-sm-6 col-xs-12">
              <img src="./../../static/images/aboutus2.png" class="ganwei-pic">
            </div>
            <div class="col-sm-6 col-xs-12 ganwei-cintainer-allbox">
              <div class="row ganwei-container">
                <div class="col-sm-12 col-xs-12 ganwei-header ganwei-header-2">
                  <div class="ganwei-renxian">协同创新</div>
                  <div class="ganwei-desc">Collaborative innovation</div>
                  <div class="ganwei-box"></div>
                </div>
                <div class="col-sm-12 col-xs-12 ganwei-things">
                  与各大科技社团合作，吸纳各学院各领域的人才，团结合作、协同创新。我们团队除了吸纳高年级有能力的人才之外，也会考虑招收低年级有潜力的师弟师妹。让有能力的人可以参与到项目中去，能力有待提高的，则继续留在小组中学习。我们团队非常重视人才培养方面事务，每个小组由有经验有能力的师兄师姐带领学习，且每个小组定期都会有技术沙龙，面向整个YC团队。有技术分享，大家共同学习、相互促进、共同进步。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--page3-->
      <div class="page-3">
        <div class="photo-box-title">PHOTO</div>
        <div class="photo-box-title-2"><span>一</span>照片墙<span>一</span></div>
        <div class="photo-fourbox container">
          <div class="row twobox">
            <div><img src="./../assets/img/b1.jpg"></div>
            <div><img src="./../assets/img/b2.jpg"></div>
          </div>
          <div class="row twobox">
            <div><img src="./../assets/img/b3.jpg"></div>
            <div><img src="./../assets/img/b4.jpg"></div>
          </div>
        </div>
      </div>
<!--       <swiperPage></swiperPage> -->

      <!--page4-->
      <div class="page-4 professor container">
        <div class="professor-title">Our Professional tutor</div>
        <div class="professor-box">
          <div class="professor-authorPic">
            <img src="./../../static/images/苏成悦头像.jpg" alt="">
          </div>
          <div class="professor-detail ">
            <div class="professor-name">苏成悦</div>
            <div class="professor-desc">
              苏成悦教授，博士，广东工业大学YC创客团队指导老师，广工智能感知与控制团队负责人、YC科研团队负责人。“挑战杯”全国优秀指导教师，连续多年广工“学生科技创新优秀指导教师”。广州《羊城学堂》讲座报告专家、广东省青少年科技创新竞赛专家评委、广州市青少年科技创新大赛专家评委。指导大学生挑战杯科技作品竞赛获全国一等奖1项（2013年），大学生电子竞赛获全国一等奖1项（2011年）。国级大学生科技竞赛二、三等奖十多项，省级一、二等奖数十项。指导学生以实战为主，以项目为导向，个性化培养，有丰富的学生科技创新创业指导经验，培养的学生获得企业广泛赞誉。
            曾任学院副院长、广工教学和实验教学指导委员会委员。参加国家自然科学基金课题4项，主持和参与省市级项目6项。获得申请和获得发明和实用新型专利31项，其中有4项专利成功转让。分别在国内外权威刊物发表论文26篇，被国际权威索引SCI收录11篇。2013年获广东省教学成果二等奖，2011年获广东工业大学教学成果一等奖；2004年获“广东省科技进步二等奖”，其他省级科技成果奖2项。，广东省部企业科技特派员，广工六个产学研基地负责人。国外SCI杂志审稿人。主要关注嵌入式应用、无人机和机器人、机器视觉和在线检测、物联网技术，智能硬件和智能控制等方面的科研及应用。
            </div>
          </div>
        </div>
        <div class="professor-box">
          <div class="professor-authorPic">
            <img src="./../../static/images/陈元电头像.jpg" alt="">
          </div>
          <div class="professor-detail ">
            <div class="professor-name">陈元电</div>
            <div class="professor-desc">
              陈元电博士，广东工业大学物理与光电工程学院电工部主任，负责组织实施学院电子类竞赛和指导。中山大学电子与通信工程系博士研究生，主要从事无线电移动通信领域、无人机、机器人、物联网等应用电子和通信技术研究,主要研究内容包括无线电信道估计,信道预测,固定翼与多旋翼无人机动力与结构设计，飞控设计与远距离通信、机器人、智能控制系统等等。曾指导学生队伍参加全国大学生电子设计竞赛获全国一奖1项、二、三等奖多项，省级学生竞赛一、二等奖十多项，负责指导多个国家级大学生创新创业项目和省级项目，申请专利十多项。参与省市级项目5项，负责编写电工电子教材一套。
            </div>
          </div>
        </div>
      </div>

      <!--page5-->
      <div class="page-5 projects">
        <div class="projects-title">在研项目</div>
        <div class="projects-details">
          <div>1、基于高性能ARM平台及机器视觉的大疆机载SDK二次开发</div>
          <div>2、长航时推矢量的飞翼无人机设计</div>
          <div>3、无人机地面站</div>
          <div>4、智能相机</div>
          <div>5、高均匀的LED面光源配光设计研究</div>
          <div>6、开源3D打印机</div>
          <div>7、智能设备端的人脸识别</div>
          <div>8、室内自主移动无人机</div>
          <div>9、网页平台、小程序开发</div>
          <div>10、App设计开发、远程控制</div>
        </div>
      </div>

      <!--page6-->
      <div class="page-6 team">
          <div class="team-title">团队结构<div class="team-line"></div></div>
          <div class="team-authors">
            <div class="row team-row">
              <div class="team-row-row">
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/无人机.jpg"></div>
                  <div class="content-pic-desc">无人机组</div>
                </div>
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/机器人.jpg"></div>
                  <div class="content-pic-desc">机器人组</div>
                </div>
              </div>
              <div class="team-row-row">
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/嵌入式.jpg"></div>
                  <div class="content-pic-desc">嵌入式组</div>
                </div>
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/专利.jpg"></div>
                  <div class="content-pic-desc">专利组</div>
                </div>
              </div>
            </div>
            <div class="row team-row">
              <div class="team-row-row">
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/图像处理.jpg"></div>
                  <div class="content-pic-desc">图像处理组</div>
                </div>
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/app.jpg"></div>
                  <div class="content-pic-desc">APP组</div>
                </div>
              </div>
              <div class="team-row-row">
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/硬件.jpg"></div>
                  <div class="content-pic-desc">硬件组</div>
                </div>
                <div class="team-content">
                  <div class="content-pic"><img src="./../../static/images/结构设计.jpg"></div>
                  <div class="content-pic-desc">网页组</div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!--page7-->
      <div class="page-7 provide-chance">
        <p class="provide-content">为有能力的人提供舞台</p>
        <p class="provide-content">为有贡献的人报以回馈</p>
        <p class="provide-desc">SLOGAN</p>
      </div>

      <!--footer-->
      <FooterYc></FooterYc>

  </div>
</template>

<script>

import { videoPlayer } from 'vue-video-player'
import FooterYc from './footer/footer.vue'
export default {
  components:{
      FooterYc
  },
  computed:{

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
        location.reload()
      }
    }
  },
  mounted(){
    sessionStorage.setItem('hasSetRoad',false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
.el-dropdown-link{
  color: #9d9d9d;
}
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
.index-wurenji-pic{
  width: 100%;
}
.index-wurenji-pic img{
  width: 100%;
  height: auto;
}
.about-us{
  padding:30px 0;
}
.about-us-title-1{
  color: #A0DBC1;
  text-align: center;
  font-family: '中易宋体';
  padding-bottom: 15px;
}
.about-us-title-2{
  font-size: 20px;
  text-align: center;
  padding-bottom: 30px;
}
.about-us-title-2 span{
  color: gray;
  padding: 0 4px;
}
.ganwei-cintainer-allbox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
}
.ganwei-container{
}
.ganwei-header{
  position: relative;
  margin-bottom: 20px;
}
.ganwei-renxian{
  font-weight: bold;
  font-size: 20px;
}
.ganwei-desc{
  font-size: 18px;
  font-weight: 100;
  margin-left: 50px;
  margin-top: 0px;
}
.ganwei-box{
  position: absolute;
  width: 120px;
  height: 45px;
  left: 30px;
  top: 10px;
  background-color: #A0DBC1;
  z-index: -33;
}
.ganwei-things{
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 2px;
}
.about-us-things-1{
  height: auto;
  margin-bottom: 0px;
}
.ganwei-pic{
  width: 443px;
  height: 250px;
  box-shadow: 6px 6px 2px #333;
}
@media screen and (min-width: 450px) {
  .about-us-things-1{
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 750px) {
    .ganwei-pic{
      width: 100%;
    }
}
@media (min-width: 751px) and (max-width:1000px) {
    .ganwei-pic{
      max-width: 350px;
    }
}
@media (min-width: 768px) and (max-width: 985px) {
  .ganwei-things{
    letter-spacing: 0px;
  }
}
@media screen and (max-width: 450px) {
  .ganwei-header{
    margin-top: 20px;
  }
  .ganwei-things{
    margin-bottom: 20px;
  }
}
.page-2{
}


.page-3{
  width: 100%;
  height: 755px;
  background: url(./../../static/images/page2.jpg);
  background-size: 100% 755px;
  position: relative;
}
.photo-box-title{
  color: #A0DBC1;
  text-align: center;
  font-family: '中易宋体';
  padding-top: 60px;
  font-size: 30px;
  padding-bottom: 30px;
}
.photo-box-title-2{
  font-size: 20px;
  text-align: center;
  padding-bottom: 30px;
}
.photo-box-title-2 span{
  padding-left: 3px;
  padding-right: 3px;
  color: gray;
}
@media screen and (min-width: 950px){
  .photo-fourbox{
    width: 50%;
    height: 50%;
    position: absolute;
    left: 25%;
    bottom: 15%;
  }
  .photo-fourbox > .row:first-child > div:first-child{
    width: 40%;
    height: 45%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .photo-fourbox > .row:first-child > div:last-child{
    width: 40%;
    height: 45%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .photo-fourbox > .row:last-child > div:first-child{
    width: 40%;
    height: 45%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .photo-fourbox > .row:last-child > div:last-child{
    width: 40%;
    height: 45%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
@media (min-width: 450px) and (max-width: 950px) {
  .photo-fourbox{
    width: 30%;
    height: 60%;
    position: absolute;
    left: 35%;
    bottom: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo-fourbox > .row{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo-fourbox > .row > div {
    width: 100%;
    height: 45%;
  }
  .photo-fourbox > .row > div:first-child{
    margin-bottom: 10%;
  }
}
@media screen and (max-width: 450px){
  .photo-fourbox{
    width: 60%;
    height: 70%;
    position: absolute;
    left: 20%;
    top: 23%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo-fourbox > .row{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo-fourbox > .row > div {
    width: 100%;
    height: 45%;
  }
  .photo-fourbox > .row > div:first-child{
    margin-bottom: 8%;
  }
}
.twobox img{
  width: 100%;
  height: 100%;
  box-shadow: 6px 6px 4px #333;
}
.twobox img:hover{
  transform: all 0.5s;
  opacity: 0.8;
  cursor: pointer;
}
.professor{
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.professor-title{
  color: #A0DBC1;
  text-align: center;
  font-family: '中易宋体';
  padding-top: 60px;
  font-size: 30px;
  padding-bottom: 30px;
}
.professor-box{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.professor-authorPic{
  width: 50%;
  height: 338px;
  text-align:center;
}
.professor-authorPic img{
  margin-left: 150px;
  /*border: 1px solid black;*/
  border-radius: 50%;
  box-shadow: 2px 2px 2px #eee;
}
.professor-detail{
  width: 50%;
  height: auto;
  padding-right: 50px;
}
.professor-name{
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}
@media screen and (max-width: 600px){
  .ganwei-renxian{
    font-size: 16px;
  }
  .ganwei-desc{
    font-size: 14px;
  }
  .ganwei-box{
    width: 100px;
    height: 37px;
    left: 25px;
    top: 7px;
  }
  .about-us-title-1,.photo-box-title{
    font-size: 20px;
  }
  .about-us-title-2,.photo-box-title-2{
    font-size: 14px;
  }
  .professor-title{
    font-size: 20px;
  }
  .professor-name{
    font-size: 18px;
  }
  .professor-authorPic img{
    width: 200px;
  }
  .professor-authorPic{
    height: 200px;
  }
  .ganwei-things,.professor-desc{
    font-size: 12px;
    letter-spacing: 1px;
  }
}
.professor-desc{
  letter-spacing: 1px;
  line-height: 25px;
}
@media (min-width: 1100px){
  .professor-detail{
    padding-right: 200px;
  }
  .professor-box{
    margin-bottom: 50px;
  }
}
@media (min-width: 780px) and (max-width: 1100px){
  .professor-authorPic img{
    margin-left: 0;
  }
}
@media screen and (max-width: 780px){
  .professor-box{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .professor-authorPic{
    width: 100%;
  }
  .professor-authorPic img{
    margin-left: 0;
  }
  .professor-name{
    text-align: center;
  }
  .professor-detail{
    width: 100%;
    padding: 0 10px;
    margin-top: 20px;
  }
}


.projects{
  width: 100%;
  height: 755px;
  background: url("./../../static/images/在研项目背景.png");
  background-size: 100% 755px;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.projects-title{
  width: 100%;
  height: auto;
  font-size: 30px;
  font-weight: bold;
  margin: 100px 0;
  text-align: center;
  letter-spacing: 5px;
  font-family: "宋体";
}
.projects-details{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: auto;
  margin-top: 50px;
  position: relative;
  left: 10%;
}
.projects-details div{
  /*border: 1px solid #fff;*/
  width: 50%;
  flex-shrink: 0;
  height: auto;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
}
@media (min-width: 750px) and (max-width: 1250px){
  .projects-title{
    font-size: 28px;
    margin: 90px 0;
  }
  .projects-details{
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .projects-details div{
    width: 100%;
  }
}
@media screen and (max-width: 780px){
  .projects-title{
    font-size: 26px;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .projects-details{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .projects-details div{
    width: 100%;
    font-size: 16px;
  }
  .projects-details{
    margin-top: 0;
  }
}
.team-title{
  color: #333 !important;
  position: relative;
  margin-bottom: 30px;
  font-size: 30px;
  letter-spacing: 3px;
  padding-bottom: 5px;
}
.team-line{
  position: absolute;
  bottom: 0;
  width: 80%;
  left: 10%;
  height: 2px;
  background-color: #A0DBC1;
}
.team{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 50px 0;
}
.team-authors{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.team-row{
  display: flex;
  flex-direction: row;
}
.team-row-row{
  display: flex;
  flex-direction: row;
}
.team-content{
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
}
.content-pic{
  width: 75px;
  height: 75px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-pic img{
  text-align: center;
}
@media screen and (max-width: 780px){
  .team-row{
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 600px){
  .team-title{
    font-size: 20px;
  }
  .content-pic{
    width: 50px;
    height: 50px;
  }
  .content-pic img{
    width: 50px;
    height: 50px;
  }
}

.provide-chance{
  width: 100%;
  height: 300px;
  background-size: cover;
  background: url("./../../static/images/slogan背景1.jpg");
}
.provide-chance{
  padding: 100px 0;
}
.provide-chance p{
  text-align: center;
}
.provide-content{
  font-size: 18px;
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: 3px;
}
.provide-desc{
  color: #2D7E5A;
  font-size: 16px;
}
@media screen and (max-width: 600px){
  .provide-content{
    font-size: 16px;
  }
  .provide-desc{
    font-size: 14px;
  }
}
</style>
