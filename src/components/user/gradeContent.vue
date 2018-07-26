<template>
  <div class="compotetion-allbox">
    <div class="container">
        <div class="container caption-desc">
            <h4 class="competition-titles">队长详细信息</h4>
            <form role="form" class="myform col-md-10" id="form1">
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">队长姓名：</label>
                            <input type="text" v-model="competitionForm.captionName"  name="captionname"   >
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">题目类型：</label>
                            <select>
                              <option v-for="item in Options">{{item}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">专业年级：</label>
                            <input type="text" v-model="competitionForm.zhuanYe" name="ZhuanYe"  >
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">学号：</label>
                            <input type="text"  v-model="competitionForm.xueHao"  >
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">电话：</label>
                            <input type="text" v-model="competitionForm.telephone" required="required" @keyup="TestReg($event) " name="Telephone" autocomplete="off" placeholder="（必填） 十一位数字">
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">微信号：</label>
                            <input type="text"  name="WeChat" v-model="competitionForm.weChat">
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">学校：</label>
                            <input type="text" v-model="competitionForm.school"  name="School" >
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">通讯地址：</label>
                            <input type="text"  name="Adress" v-model="competitionForm.adress" required="required">
                            <span></span>
                        </div>
                    </div>
            </form>
            <div class="col-md-2 tuo">
              <form action="" enctype="multipart/form-data" id="form2">
                  <div class="caption-pic">
                    <img  v-bind:src="allData.photoUrl" class="caption-img caption-pic">

                 </div>
                 <p>队长照片</p>
              </form>
            </div>
        </div>
        <div class="container duiyuan-desc">
            <h4 class="competition-titles">队伍与队员详细信息</h4>
            <form role="form" class="col-sm-12" id="form3">
                <div class="row">
                    <div class="col-sm-5 row-p">
                        <label for="" class="form-label" style="display:inline-block">队伍名称：</label>
                        <input type="text" name="DuiWuName" v-model="competitionForm.duiWuName"  style="display:inline-block" >
                        <span style="display:inline-block"></span>
                    </div>
                    <div class="col-sm-5 row-p">
                        <label for="" class="form-label" style="display:inline-block">作品名称：</label>
                        <input type="text"v-model="competitionForm.zuoPinName" name="ZuoPinName"  style="display:inline-block" >
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
                      <input type="text" class="form-control" v-model="competitionForm.teamMateOneName" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates1" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" name="Teammates1_ZhuanYe" v-model="competitionForm.teamMateOneClass" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" class="form-control" required @keyup="TestReg($event)" v-model="competitionForm.teamMateOneTelephone" name="Teammates1_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" class="form-control" required @keyup="TestReg($event)" v-model="competitionForm.teamMateTwoName" style="display:inline-block" name="Teammates2" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" name="Teammates2_ZhuanYe"  v-model="competitionForm.teamMateTwoClass" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" class="form-control" required @keyup="TestReg($event)" v-model="competitionForm.teamMateTwoTelephone" name="Teammates2_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text"  v-model="competitionForm.teamMateThreeName"class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates3" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" name="Teammates3_ZhuanYe" v-model="competitionForm.teamMateThreeClass" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" class="form-control" v-model="competitionForm.teamMateThreeTelephone" required @keyup="TestReg($event)" name="Teammates3_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" v-model="competitionForm.teamMateFourName" class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates4" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" name="Teammates4_ZhuanYe"v-model="competitionForm.teamMateFourClass" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                    <td>
                      <input type="text" v-model="competitionForm.teamMateFourTelephone" class="form-control" required @keyup="TestReg($event)" name="Teammates4_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                      <span style="display:inline-block;margin-left:6px;"></span>
                    </td>
                  </tr>

                </table>
            </form>
        </div>
        <div class="container">
            <h4 class="competition-titles">作品简介：</h4>
            <form role="form" class="other-desc" id="form5">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.productIntroduce" rows="3" maxlength="200" style="resize: none" name="productIntroduce" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">技术方案：</h4>
            <form role="form" class="other-desc" id="form6">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.technologyCase" rows="3" maxlength="200" style="resize: none" name="technologyCase"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">技术路线：</h4>
            <form role="form" class="other-desc" id="form7">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.technologyWay" rows="3" maxlength="200" style="resize: none" name="technologyWay" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">创新点:</h4>
            <form role="form" class="other-desc" id="form8">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.aboutNews" rows="3" maxlength="200" style="resize: none" name="aboutNews" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">实现的功能和指标：</h4>
            <form role="form" class="other-desc" id="form9">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.aboutFunction" rows="3" maxlength="200" style="resize: none" name="aboutFunction" ></textarea>
                </div>
            </form>
            <h4 class="competition-titles">测试演示情况：</h4>
            <form role="form" class="other-desc" id="form10">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.aboutTest" rows="3" style="resize: none" name="aboutTest"></textarea>

                </div>
            </form>
        </div>
        <div class="container competition-wenxin">
            <h4 class="competition-titles">附件</h4>
            <div class="row" style="margin:20px;">
              <a v-bind:href="allData.file1Url" download class="col-xs-6 fujian">附件1</a>
              <a v-bind:href="allData.file2Url" download class="col-xs-6 fujian">附件2</a>

            </div>
        </div>
        <div class="block">
        <h4 class="competition-titles">评分</h4>
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
        <input type="submit" name="" value="确认提交" class="btn btn-lg btn-primary col-sm-8 col-xs-8 allSubmit" @click="submitGrade()">
        <span class="col-sm-2 col-xs-2"></span>
      </div>

    </div>
  </div>
</template>

<script>
  import {submitTeamGrade,getRegistrationById} from  '../../lib/vueHelper'
export default {

  created(){
    //获取id进行查询
    this.id = sessionStorage.getItem("participantId")
    this.getData()
  },


  data(){
    return{
      checkInputs1:false,
      check2:false,
      check3:false,
      Options:[
        'option1',
        'option2',
        'option3'
      ],
      myday:0,
      myyear:0,
      mymonth:0,
      id:0,
      formdataPic:{},
      formdataWenjian1:{},
      formdataWenjian2:{},
      allData:{
        photoUrl:'',
        file1Url:'',
        file2Url:''
      },
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
        teamMateOneName:'',
        teamMateOneClass:'',
        teamMateOneTelephone:'',
        teamMateTwoName:'',
        teamMateTwoClass:'',
        teamMateTwoTelephone:'',
        teamMateThreeName:'',
        teamMateThreeClass:'',
        teamMateThreeTelephone:'',
        teamMateFourName:'',
        teamMateFourClass:'',
        teamMateFourTelephone:'',
      },
      grade:{
        captionName:this.$route.params.data.captionName,
        newGrade:0,
        practiceGrade:0,
        otherGrade:0,
      }
    }
  },
  computed:{

  },
  methods:{

    submitGrade(){
      console.log("submit")
      console.log(this.grade)
      submitTeamGrade(this,this.grade)
    },
    getData(){
      getRegistrationById(this,this.competitionForm,this.allData)
    }


  },
  mounted(){

  },

}
</script>

<style scoped>
.caption-pic{
  width: 118px;
  height: 144px;
}
.myform > .row{
  margin-bottom: 10px;
}
.myform > .row > .row-p > label{
  display: inline-block;
  width: 80px;
  text-align: right;
}
.myform > .row > .row-p > input{
  display: inline-block;
}
.competition-titles{
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
}
#form3{
  margin-bottom: 20px;
}
.duiyuan-desc-table > tr:first-child {

}
.duiyuan-desc-table > tr:first-child > th{
  text-align: center;
}
.fujian{
  text-align: center;
}
#form2 p{
  text-align: center;
}
.compotetion-allbox{
  padding-bottom: 30px;
}
</style>

