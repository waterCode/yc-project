<template>
  <div>
    <div class="container">
        <div class="container caption-desc">
            <h4 class="competition-titles">队长详细信息</h4>
            <form role="form" class="myform col-md-10" id="form1">
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">队长姓名：</label>
                            <input type="text" v-model="this.$route.params.data.captionName"  name="captionname"   >
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">题目类型：</label>
                            <select></select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">专业年级：</label>
                            <input type="text" v-model="this.$route.params.data.zhuanYe" name="ZhuanYe"  >
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">学号：</label>
                            <input type="text"  v-model="this.$route.params.data.xueHao"  >
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">电话：</label>
                            <input type="text" v-model="this.$route.params.data.telephone" required="required" @keyup="TestReg($event) " name="Telephone" autocomplete="off" placeholder="（必填） 十一位数字">
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">微信号：</label>
                            <input type="text"  name="WeChat" v-model="this.$route.params.data.weChat">
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">学校：</label>
                            <input type="text" v-model="this.$route.params.data.school"  name="School" >
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">通讯地址：</label>
                            <input type="text"  name="Adress" v-model="this.$route.params.data.adress" required="required">
                            <span></span>
                        </div>
                    </div>
            </form>
            <div class="col-md-2 tuo">
              <form action="" enctype="multipart/form-data" id="form2">
                  <div class="caption-pic">
                   <img src="" class="caption-img">
                   <input type="file" name="caption-photo" class="caption-input" ref="inputer" data-uploadtype="photo"/>
                 </div>
                 <p>请上传队长照片</p>
              </form>
            </div>
        </div>
        <div class="container duiyuan-desc">
            <h4 class="competition-titles">队伍与队员详细信息</h4>
            <form role="form" class="col-sm-12" id="form3">
                <div class="row">
                    <div class="col-sm-5 row-p">
                        <label for="" class="form-label" style="display:inline-block">队伍名称：</label>
                        <input type="text" name="DuiWuName" v-model="this.$route.params.data.duiWuName"  style="display:inline-block" >
                        <span style="display:inline-block"></span>
                    </div>
                    <div class="col-sm-5 row-p">
                        <label for="" class="form-label" style="display:inline-block">作品名称：</label>
                        <input type="text"v-model="this.$route.params.data.zuoPinName" name="ZuoPinName"  style="display:inline-block" >
                        <span style="display:inline-block"></span>
                    </div>
                </div>
            </form>
            <form role="form" class="col-sm-12" id="form4">
                <table class="table table-hover table-responsive duiyuan-desc-table">
                    <tr>
                        <th class="col-sm-4">队员姓名</th>
                        <th class="col-sm-4">所在学院及专业班级</th>
                        <th class="col-sm-4">手机号码</th>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control"  style="display:inline-block" name="Teammates1" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates1_ZhuanYe" class="form-control" required  style="display:inline-block;"  >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control"  name="Teammates1_Telephone" style="display:inline-block;" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control" style="display:inline-block" name="Teammates2">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates2_ZhuanYe" class="form-control"   style="display:inline-block;"  >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control"  name="Teammates2_Telephone" style="display:inline-block;">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control" style="display:inline-block" name="Teammates3">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates3_ZhuanYe" class="form-control" required  style="display:inline-block;" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control"  name="Teammates3_Telephone" style="display:inline-block;" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control"  style="display:inline-block" name="Teammates4" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates4_ZhuanYe" class="form-control" required  style="display:inline-block;"  >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control"  name="Teammates4_Telephone" style="display:inline-block;">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control"  style="display:inline-block" name="Teammates5" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates5_ZhuanYe" class="form-control" required  style="display:inline-block;"  >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control"  name="Teammates5_Telephone" style="display:inline-block;" >
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="container">
            <h4 class="competition-titles">作品简介：（作品描述、限200字）</h4>
            <form role="form" class="other-desc" id="form5">
                <div class="form-group">
                    <textarea class="form-control" v-model="this.$route.params.data.productIntroduce" rows="3" maxlength="200" style="resize: none" name="productIntroduce" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">技术方案：（限200字）</h4>
            <form role="form" class="other-desc" id="form6">
                <div class="form-group">
                    <textarea class="form-control" v-model="this.$route.params.data.technologyCase" rows="3" maxlength="200" style="resize: none" name="technologyCase"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">技术路线：（限200字）</h4>
            <form role="form" class="other-desc" id="form7">
                <div class="form-group">
                    <textarea class="form-control" v-model="this.$route.params.data.technologyWay" rows="3" maxlength="200" style="resize: none" name="technologyWay" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">创新点：（限100字）</h4>
            <form role="form" class="other-desc" id="form8">
                <div class="form-group">
                    <textarea class="form-control" v-model="this.$route.params.data.aboutNews" rows="3" maxlength="200" style="resize: none" name="aboutNews" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">实现的功能和指标：（限200字）</h4>
            <form role="form" class="other-desc" id="form9">
                <div class="form-group">
                    <textarea class="form-control" v-model="this.$route.params.data.aboutFunction" rows="3" maxlength="200" style="resize: none" name="aboutFunction" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">测试演示情况：</h4>
            <form role="form" class="other-desc" id="form10">
                <div class="form-group">
                    <textarea class="form-control" v-model="this.$route.params.data.aboutTest" rows="3" style="resize: none" name="aboutTest"></textarea>
                </div>
            </form>
        </div>
        <div class="container competition-wenxin">
            <h4 class="competition-titles">附件</h4>
            <div class="row" style="margin:20px;">
              <form action="" enctype="multipart/form-data" name="documentForm1">
                <input type="file" name="" value="上传竞赛方案" style="display:inline-block;" class="col-xs-5" >
              </form>
              <form enctype="multipart/form-data" name="documentForm2">
                <input type="file" name="" value="上传附件" style="display:inline-block;margin-left:30px;" class="col-xs-5" >
              </form>
            </div>
        </div>
        <div class="block">
        <h4 class="competition-titles">附件</h4>
        <span class="demonstration">创新分</span>
        <el-slider
          v-model="grade.newGrade"
          show-input>
        </el-slider>
        <span class="demonstration">实践分</span>
        <el-slider
          v-model="grade.practiceGrade"
          show-input>
        </el-slider>
        <span class="demonstration">其他分</span>
        <el-slider
          v-model="grade.otherGrade"
          show-input>
        </el-slider>
      </div>
        <div class="row">
        <span class="col-sm-2 col-xs-2"></span>
        <input type="submit" name="" value="确认提交" class="btn btn-lg btn-primary col-sm-8 col-xs-8 allSubmit" @click="PostTO()">
        <span class="col-sm-2 col-xs-2"></span>
      </div>

    </div>
  </div>
</template>

<script>
  import {postCompetitionRegistrationForm} from  '../../lib/vueHelper'
export default {


  data(){
    return{
      checkInputs1:false,
      check2:false,
      check3:false,
      Options:{
        'option1':"比赛类型1",
        'option2':"比赛类型2",
        'option3':"比赛类型3"
      },
      myday:0,
      myyear:0,
      mymonth:0,
      formdataPic:{},
      formdataWenjian1:{},
      formdataWenjian2:{},
      Alldata:{},
      competitionForm:{
        captionName : '',
        zhuanYe : '',
        xueHao : '',
        telephone : '',
        weChat : '',
        school : '',
        duiWuName : '',
        zuoPinName : '',
        aboutTest : '',
        aboutFunction : '',
        aboutNews : '',
        technologyWay : '',
        technologyCase : '',
        productIntroduce : '',
        adress : '',
      },
      grade:{
        newGrade:0,
        practiceGrade:0,
        otherGrade:0,
      }
    }
  },
  computed:{

  },
  methods:{

    getParams(){
      let data = this.$route.params.data
      console.log("graContent:")
      console.log("haha"+data)
    },






  },
  mounted(){

  },
  watch:{
    '$route':'getParams'
  }
}
</script>

<style>
.competition-wenxin p:last-child{
  margin-bottom: 20px;
}
.competition-chengnuo h4{
  margin: 5px 0;
}
.chengnuo-last{
  margin-bottom: 20px;
}
.duiyuan-desc-table{
  margin-top: 15px;
  margin-bottom: 25px;
}
.duiyuan-desc-table td input{
  width: 80% !important;;
  margin: 0 auto;
}
.duiyuan-desc th{
  text-align: center;
  font-size: 18px;
}
.caption-pic input{
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.allSubmit{
  margin-top: 35px;
}

</style>
