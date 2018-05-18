<template>
<div>
  <div id="wrap">
    <div id="main" class="clearfix">


      <div class="banner">
        <div class="container">

          <div class="row"><div class="col-md-12"></div></div>

          <form class="form-horizontal dowebok">
            <div class="form-group">
              <label class="col-md-12"></label>
              <label class="col-md-12"></label>
              <label class="col-md-12"></label>
              <label class="col-md-12"></label>


            </div>
            <div class="form-group">
              <label class="col-md-7"></label>
              <!--表格开始的地方-->
              <div class="col-md-5 panel panel-primary">
                <div class="panel-body">


                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" v-model="joinUsForm.name" name="username" id="username" placeholder="姓名"    required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="school" v-model="joinUsForm.college" id="school" placeholder="学院"   required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="studentid" v-model="joinUsForm.studentNum" placeholder="学号" id="studentid" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="perfession_class" v-model="joinUsForm.class" placeholder="专业班级（如：15信息工程*班）" id="perfession_class"   required>
                    </div>
                  </div>



                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="qq" v-model="joinUsForm.qq" placeholder="qq" id="qq" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="qqMail" v-model="joinUsForm.qqEmail" placeholder="qq邮箱" id="qqMail"  required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="telephone" placeholder="手机号码" v-model="joinUsForm.telephone" id="telephone" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <select class="form-control" v-model="joinUsForm.group" name="major" id="major">
                        <option value="飞控组">飞控组</option>
                        <option value="机器人组">机器人组</option>
                        <option value="嵌入式组">嵌入式组</option>
                        <option value="图像处理组">图像处理组</option>
                        <option value="硬件组">硬件组</option>
                        <option value="APP组">APP组</option>
                        <option value="网页组">网页组</option>
                        <option value="专利组">专利组</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <textarea class="form-control" rows="3" v-model="joinUsForm.introduce" name="self_introduction" placeholder="自我介绍" id="self_introduction"  maxlength="100"  required></textarea>
                    </div>
                  </div>


                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <textarea class="form-control" rows="3" name="skill"v-model="joinUsForm.skill" placeholder="目前掌握技能" id="skill"  maxlength="100"  required></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
       <textarea class="form-control" rows="3" name="experience" v-model="joinUsForm.experience" placeholder="项目经验" id="experience"  maxlength="100"
                 required></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <textarea class="form-control" rows="3" name="honor" placeholder="获奖情况" v-model="joinUsForm.award" id="honor"  maxlength="100"  required></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <div class="checkbox">
                        <span style="line-height:31px">是否服从调剂：</span>
                        <label><input type="checkbox" name="obey" id="obey" value="1">是</label>
                      </div>
                    </div>
                  </div>



                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <button @click ='joinUs()' class="btn btn-lg btn-primary btn-block" >提交</button>
                    </div>
                  </div>



                </div>
              </div>



            </div>
          </form>

        </div>
      </div>

      <br/>


      <div class="banner-bottom animated rotateIn">
        <h3><span><img src="../../assets/img/join_us/logo.png"></span>欢迎光临!</h3>
        <p class="intr">
          YC勇创团队的前身是苏老师带领的无人机科研小组，该小组在苏老师的指导下获得了“挑战杯”全国一等奖一项，
          二等奖一项和三等奖一项，以及全国大学生电子竞赛一等奖，二等奖各一项，正是由于取得了巨大的成就，苏
          老师应学校邀请，正式成立YC勇创团队，并与电子协会和智能模型协会保持合作关系
        </p>
        <h4><span><img src="../../assets/img/join_us/logo.png"></span>团队介绍</h4>

        <div class="banner-bottom-grid">
          <div class="col-md-6 banner-bottom-grid-left dowebok ">
            <img src="../../assets/img/join_us/1350.jpg" alt=" " class="img-responsive">
          </div>
          <div class="col-md-6 banner-bottom-grid-right">
            <h5>成员成果</h5>
            <p>多用户多平台无线智能投影系统、基于WIFI的无线监控系统、智能手机对家电的无线控制
              机器视觉在室内定位的研究与应用、新型电源技术--数字变换器、LED驱动和开关电源、LED照明
              一次二次配光设计、多旋翼无人机
            </p>
            <div class="banner-b-left" >
              <div class="banner-b-left1">
                <img src="../../assets/img/join_us/1.jpg" alt=" " class="img-responsive">
              </div>
              <div class="banner-b-left1">
                <img src="../../assets/img/join_us/2.jpg" alt=" " class="img-responsive">
              </div>
              <div class="banner-b-left1">
                <img src="../../assets/img/join_us/9.png" alt=" " class="img-responsive">
              </div>

              <div class="clearfix"> </div>
            </div>
            <div class="banner-b-left  animated fadeIn">
              <div class="banner-b-left1">
                <img src="../../assets/img/join_us/3.jpg" alt=" " class="img-responsive">
              </div>
              <div class="banner-b-left1">
                <img src="../../assets/img/join_us/6.jpg" alt=" " class="img-responsive">
              </div>
              <div class="banner-b-left1">
                <img src="../../assets/img/join_us/7.png" alt=" " class="img-responsive">
              </div>

              <div class="clearfix"> </div>
            </div>
          </div>
        </div>




        <div class="features section-padding reda">
          <div class="container" style="width: 1170px;">

            <div class="header">
              <h3><span><img src="../../assets/img/join_us/logo.png"></span>小组介绍</h3>
              <p>“为有能力的人提供平台”“为有贡献的人报以回馈”</p>
              <!-- end .container> .header -->

              <div class="row">
                <div class="col-md-12 feature-list">
                  <div class="row">

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/飞机.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>飞控组</h3>
                          <p>有C&C++，数据结构，算法基础，有丰富比赛经验，熟悉stm32</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (1st item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/机器人.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>机器人组</h3>
                          <p>有C&C++基础，熟悉Linux和Ros系统</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (2nd item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/嵌入式软件.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>嵌入式组</h3>
                          <p>有项目/比赛经验，具备C/C++基础，掌握Linux应用层开发</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (3rd item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/ps.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>图像处理组</h3>
                          <p>熟悉C/C++,python中至少一种，有扎实的数学基础，图像处理基础</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (4th item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/智能硬件.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>硬件组</h3>
                          <p>扎实的数，模电基础，有较强的电路分析能力，具备开关电源知识</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (5th item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/APP.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>APP组</h3>
                          <p>具有C语言基础，具有Java基础和安卓实践经验</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (6th item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/网页版.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>网页组</h3>
                          <p>有ps设计软件基础，熟悉HTML/CSS/Javascript等语言，了解Php或java</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (5th item) -->

                    <div class="col-sm-6 col-md-6">
                      <div class="featured-item">
                        <div class="icon">
                          <div class="icon-style"><img src="../../assets/img/join_us/文书.png"></div>
                        </div> <!-- end icon -->
                        <div class="meta-text">
                          <h3>专利组</h3>
                          <p>对法律有兴趣，能读懂技术文章，沟通能力好</p>
                        </div> <!-- end .meta-text -->
                      </div> <!-- end .featured-item -->
                    </div> <!-- end .feature-list> .row > .col-md-6 (5th item) -->

                  </div> <!-- end .feature-list> .row -->
                </div> <!-- end .feature-list -->
              </div> <!-- end .container> .row -->

            </div> <!-- end .container -->
          </div> <!-- end .features -->
        </div>





        <br/>


        <div id="about" class="about">
          <div class="container">
            <!-- head-section -->
            <div class="head-section text-center">
              <span> </span>
              <h2><span><img src="../../assets/img/join_us/logo.png"></span>导师介绍</h2>

            </div>
            <!-- head-section -->
            <!-- about-grids -->
            <div class="about-grids">
              <div class="col-md-6 about-left-grid dowebok">
                <h3>苏成悦</h3>
                <span>博士，广东工业大学物理学教授</span>
                <p>在应用物理（应用光学、应用电子）等领域进行科研和教学工作，参加国家自 然科学基金课题 3 项，省级 1 项，主持市级项目 1 项，主持和参与企业项目 6 项。 专利 5 项，发明专利申请 1 项。分别在国内外权威刊物发表论文 20 多篇，被国际权 威索引 SCI收录近 10 篇；</p>
                <p class="p-text">目前主要开展 LED 灯具光学系统优化设计、LED 驱动设计和智能控制、风光
                  互补太阳能系统、智能电动玩具、望远镜光学系统设计和智能家居等应用电子和应 用光学方面的研究和科技开发工作。有较丰富的 LED 灯具一次二次光学设计、LED
                  驱动、智能控制、智能玩具等应用项目开发经验，取得了一定的应用成果。</p>
              </div>
              <div class="col-md-6 about-right-grid">
                <div class="col-md-4"></div>
                <div class="center"><img src="../../assets/img/join_us/tr.jpg" title="teacher">
                  <div class="clearfix"> </div>
                </div>
                <!-- about-grids -->
              </div>
              <div class="clearfix"> </div>
            </div>



            <div class="container second">
              <h3><span><img src="../../assets/img/join_us/logo.png"></span>加入我们</h3>
              <p class="intr">要是你对学习技术有一定的热情，同时又符合我们的要求，请填写上面的报名表，快快加入我们吧！</p>
              <div class="contact-us1-bottom">


                <div class="logo">
                  <img src="../../assets/img/join_us/logo.jpg" style="float:right">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</div>

</template>

<script>
  import {postJoinUsData} from '../../lib/vueHelper'
    export default {
        name: "join-us-page",

      methods:{
        joinUs(){
          console.log("begin post joinUs data")
          postJoinUsData(this,this.joinUsForm)
        }
      },
      data(){
          return{
            joinUsForm:{
              name:'',
              college:'',
              studentNum:'',
              class:'',
              qq:'',
              qqEmail:'',
              telephone:'',
              group:'',
              introduce:'',
              skill:'',
              experience:'',
              award:'',

            }
          }
      }
    }
</script>

<style scoped>
 /* @import "../../../static/css/main.css";
  @import "../../../static/css/mainse.css";*/
  /*@import "../../../static/css/animate.min.css";*/




  .radio{font-size:14px;}
  .radio input{ display:block; float:left;}
  .radio span{ display:block; float:left; *padding-top:5px;}


  .banner{
    background: url(../../assets/img/join_us/bg.jpg) no-repeat 0px 0px;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;    }

/*
  .dowebok {
    animate-duration: 3s;
    animate-delay: 6s;
    animate-iteration-count: 2;
  }
*/

  select{
    color: #555;
  }

  .form-control{
    resize: none;
  }

 .panel{
   filter: alpha(opacity=80);
   opacity:0.8;
   border-radius: 10px;
 }
</style>
