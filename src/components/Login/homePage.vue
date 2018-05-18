<template>

  <div>
    <div class="navi">
      <div class="none">
        <div class="logo"><img src="../../assets/img/logo.png" width=100% height=100%></div>
      </div>
     <!-- <div class="others">
        <div class="name"><a href="#">YC 勇创</a></div>
        <div class="othername"><a href="#">主页</a></div>
        <div class="othername"><router-link to="/joinUsPage">加入我们</router-link></div>
        <div class="othername"><router-link to="/joinCompetition">竞赛报名</router-link></div>
        <div class="loginName"><router-link to="/login">{{loginName}}</router-link></div>

      </div>-->
    </div>

    <div class="container">
      <video poster="#" autoplay muted loop class="vidbacking">
        <source src="../../assets/video/2.mp4" type="video/mp4">
        <source src="../../assets/video/2.mp4" type="video/webm">
        <source src="../../assets/video/2.mp4" type="video/ogg">
      </video>

    </div>

    <div class="about-us">
      <div class="about-us-font-1" data-aos="fade-down-right">关于我们
      </div>
      <div class="about-us-font-2" data-aos="fade-down-right"><br>敢为人先 勇于创新 协同创新
      </div>
      <div class="space-1">
      </div>
      <div class="banner-1">
        <div class="black-1 shadow" data-aos="fade-down">
          <p style="font-size: 20px;letter-spacing: 1px;line-height: 65px;">
            YC勇创团队的前身是苏老师带领的无人机科研小组，该小组在苏老师的指导下获得了“挑战杯”全国一等奖1项、二等奖1项和三等奖1项，以及全国大学生电子竞赛一等奖、二等奖各1项。正是由于取得了巨大的成就，苏老师应学校邀请，正式成立YC勇创团队，并与电子协会和智能模型协会保持合作关系。</p>

        </div>
        <div class="banner">
          <div class="banner-inner">
            <img src="../../assets/img/a1.jpg" width="100%" height="100%" alt="" name="0">
          </div>
          <div class="ctrlbtn">
            <a href="javascript:;" class="prev">></a>
            <a href="javascript:;" class="next"><</a>
          </div>
          <ul class="pageCtrl">
            <li class="active" style="margin-left: 43%;"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="space-2">
      </div>
      <div class="banner-2">
        <div class="banner" style="float: right;">
          <div class="banner-inner">
            <img src="../../assets/img/a2.jpg" width="100%" height="100%" alt="" name="1">
          </div>
          <div class="ctrlbtn">
            <a href="javascript:" class="prev">></a>
            <a href="javascript:" class="next"><</a>
          </div>
          <ul class="pageCtrl">
            <li class="active" style="margin-left: 43%;"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="black-2 shadow" data-aos="fade-down">
          <p style="font-size: 20px;letter-spacing: 1px;line-height: 63px;">
            与各大科技社团合作，吸纳各学院各领域的人才，团结合作、协同创新。我们团队除了吸纳高年级有能力的人才之外，也会考虑招收低年级有潜力的师弟师妹。让有能力的人可以参与到项目中去，能力有待提高的，则继续留在小组中学习。我们团队非常重视人才培养方面事务，每个小组由有经验有能力的师兄师姐带领学习，且每个小组定期都会有技术沙龙，面向整个YC团队。有技术分享，大家共同学习、相互促进、共同进步。</p>
        </div>
      </div>
      <div class="space-1">
      </div>


      <div class="display_img" data-aos="fade-down">
        <p style="font-size: 50px;color: #333333;text-align: center;margin-bottom: 20px">照片墙</p>
        <ul class="polaroids" style="width: 100%">
          <li><a href="javascript:" title="创新"><img src="../../assets/img/b1.jpg" alt="创新"></a></li>
          <li><a href="javascript:" title="合作"><img src="../../assets/img/b2.jpg" alt="合作"></a></li>
          <li><a href="javascript:" title="协同"><img src="../../assets/img/b3.jpg" alt="协同t"></a></li>
          <li><a href="javascript:" title="拼搏"><img src="../../assets/img/b4.jpg" alt="拼搏"></a></li>
          <li><a href="javascript:" title="交流">协同<img src="../../assets/img/b5.jpg" alt="交流"></a></li>
          <li><a href="javascript:" title="比赛"><img src="../../assets/img/b6.jpg" alt="比赛"></a></li>
          <li><a href="javascript:" title="钻研"><img src="../../assets/img/b7.jpg" alt="钻研"></a></li>
          <li><a href="javascript:" title="学习"><img src="../../assets/img/b8.jpg" alt="学习"></a></li>

        </ul>
      </div>


      <div class="teacher">
        <div class="teacher-content">
        <span style="float: right;">
          <div class="teacher-photo" data-aos="fade-right">
          </div>
        </span>
          <div class="teacher-font" data-aos="fade-right">
            <div>
              <div class="teacher-font-1">导师介绍
              </div>
              <div class="teacher-font-2"><br>苏成悦
              </div>
            </div>
          </div>
        </div>
        <div class="space-2">
        </div>
        <div class="black-3 shadow" data-aos="fade-right">
          <p class="teacher-intro">
            苏成悦教授，博士，广东工业大学YC创客团队指导老师，广工智能感知与控制团队负责人、YC科研团队负责人。“挑战杯”全国优秀指导教师，连续多年广工“学生科技创新优秀指导教师”。广州《羊城学堂》讲座报告专家、广东省青少年科技创新竞赛专家评委、广州市青少年科技创新大赛专家评委。指导大学生挑战杯科技作品竞赛获全国一等奖1项（2013年），大学生电子竞赛获全国一等奖1项（2011年）。国级大学生科技竞赛二、三等奖十多项，省级一、二等奖数十项。指导学生以实战为主，以项目为导向，个性化培养，有丰富的学生科技创新创业指导经验，培养的学生获得企业广泛赞誉。
            曾任学院副院长、广工教学和实验教学指导委员会委员。参加国家自然科学基金课题4项，主持和参与省市级项目6项。获得申请和获得发明和实用新型专利31项，其中有4项专利成功转让。分别在国内外权威刊物发表论文26篇，被国际权威索引SCI收录11篇。2013年获广东省教学成果二等奖，2011年获广东工业大学教学成果一等奖；2004年获“广东省科技进步二等奖”，其他省级科技成果奖2项。，广东省部企业科技特派员，广工六个产学研基地负责人。国外SCI杂志审稿人。主要关注嵌入式应用、无人机和机器人、机器视觉和在线检测、物联网技术，智能硬件和智能控制等方面的科研及应用。<p/>

        </div>

      </div>
         <div class="teacher" style="margin:0;height: 715px;">
           <div class="teacher-content" style="position: relative;">
           <span style="float: left;">
             <div class="teacher-photos" data-aos="fade-right">
             </div>
           </span>
             <div class="teacher-font" data-aos="fade-right" style="position: absolute;right: 0;margin-top: 6%;">
               <div>
                 <div class="teacher-font-1">导师介绍
                 </div>
                 <div class="teacher-font-2"><br>陈元电
                 </div>
               </div>
             </div>
           </div>
           <div class="space-2">
           </div>
           <div class="black-3 shadow"  data-aos="fade-right" style="height: 300px;">
             <p class="teacher-intro">陈元电博士，广东工业大学物理与光电工程学院电工部主任，负责组织实施学院电子类竞赛和指导。中山大学电子与通信工程系博士研究生，主要从事无线电移动通信领域、无人机、机器人、物联网等应用电子和通信技术研究,主要研究内容包括无线电信道估计,信道预测,固定翼与多旋翼无人机动力与结构设计，飞控设计与远距离通信、机器人、智能控制系统等等。曾指导学生队伍参加全国大学生电子设计竞赛获全国一奖1项、二、三等奖多项，省级学生竞赛一、二等奖十多项，负责指导多个国家级大学生创新创业项目和省级项目，申请专利十多项。参与省市级项目5项，负责编写电工电子教材一套。</p>
           </div>

         </div>
         <div class="introduction">
           <div class="in-content center">
             <div class="in-content-font" data-aos="fade-right">团队近况<br/>
             </div>
             <div class="game">
               <div class="game-font" data-aos="fade-right">赛事
               </div>
             </div>
             <div class="recent">
               <div class="recent-border shadow"  data-aos="fade-right">
                 <h4 style="font-size: 20px;text-align: left;margin: 10px;">*在研项目</h4>
                 <p style="font-size: 18px;text-align: left;line-height: 50px;letter-spacing: 3px;">1.基于高性能ARM平台及机器视觉的大疆机载SDK二次开发2.长航时推力矢量的飞翼无人机设计3.无人机地面站4.智能相机5.高均匀的LED面光源配光设计研究6.开源3D打印机7.移动设备端的人脸识别8.室内自主移动机器人</p>

                 <h4 style="font-size: 20px;text-align: left;margin: 10px;    margin-top: 40px;">*团队结构</h4>
                 <p style="font-size: 18px;text-align: left;line-height: 50px;letter-spacing: 3px;">1.无人机组2.机器人组3.嵌入式应用组4.图像处理组5.硬件设计组6.APP设计组7.专利组8.结构设计组</p>


               </div>
             </div>
           </div>
         </div>
         <div class="join-us" id="particles">
           <div class="join-us-content center">
             <div class="join-us-row-1">
               你有能力 我有舞台<br><br>
             </div>
             <div class="join-us-row-2">
               为有能力的人提供舞台<br>为有贡献的人报以回馈
             </div>
             <div class="join">
               <br><center><button type="button" class="join-us-button">加入我们</button></center>
             </div>
           </div>
         </div>
         <div class="content">
           <div class="content-maintext">联系我们</div>
           <div class="content-others">
             <div class="content-others-weixin"><a href="javascript:" class="imgs">微信公众号</a></div>
             <div class="content-others-qq"><a href="javascript:" class="tooltip" title="qq群：469513909">QQ</a></div>
             <div class="content-others-email"><a href="javascript:" class="tooltip" title="email：gdut_YC@163.com">邮箱</a></div>
             <div class="content-others-phone"><a href="javascript:" class="tooltip" title="创客空间A109">地址</a></div>
           </div>
         </div>
         <div class="copyright">
           <div class="copyright-text">Copyright © 2017 All Rights Reserved. YC勇创团队 版权所有</div>
         </div>



    </div>
  </div>
</template>

<script>
  export default {
    name: "home-page",

    data(){
      return {
        loginName:'登陆',
        userNamed:this.$route.params.username
      }
    },
    methods:{
      checkLogin(){
        if(this.userNamed !== undefined){
          this.loginName = this.userNamed
        }
      }
    },
    watch:{
      userNamed(val,oldVal){
        console.log("newVuale"+val)
        console.log("oldVuale"+oldVal)
  }
    }
  }
</script>

<style scoped>
  @import '../../../static/css/tooltipster.bundle.min.css';
  @import '../../../static/css/tooltipster-sideTip-shadow.min.css';
  @import '../../../static/css/tooltipster.bundle.min.css';
  @import '../../../static/css/style.css';
  @import '../../../static/css/style1.css';
  @import '../../../static/css/photo.css';

  a {
    text-decoration: none;
  }

  li, ul li {
    list-style: none;
  }

  .banner {
    width: 45%;
    height: 450px;
    /*margin:100px  auto;*/
    position: relative;
    overflow: hidden;
  }

  .banner-inner {
    width: 100%;
    height: 450px;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
