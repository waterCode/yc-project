<template>
  <div>
    <div class="container">
        <div class="container caption-desc">
            <h4 class="competition-titles">队长详细信息</h4>
            <form role="form" class="myform col-md-10" id="form1">
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">队长姓名：</label>
                            <input type="text" v-model="competitionForm.captionName"  name="captionname" required="required" @keyup="TestReg($event)" autocomplete="off" placeholder="（必填）请输入队长姓名">
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
                            <input type="text" v-model="competitionForm.zhuanYe" name="ZhuanYe" required="required" @keyup="TestReg($event)" autocomplete="off" placeholder="（必填）如：x级x专业x班">
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">学号：</label>
                            <input type="text"  v-model="competitionForm.xueHao" name="" required="required" name="XueHao" @keyup="TestReg($event),$event.currentTarget.value=$event.currentTarget.value.replace(/[^\d]/g,'')" autocomplete="off" placeholder="（必填） 十位数字">
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">电话：</label>
                            <input type="text" v-model="competitionForm.telephone" required="required" @keyup="TestReg($event),$event.currentTarget.value=$event.currentTarget.value.replace(/[^\d]/g,'')" name="Telephone" autocomplete="off" placeholder="（必填） 十一位数字">
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">微信号：</label>
                            <input type="text"  required="required" @keyup="TestReg($event)" name="WeChat" autocomplete="off" placeholder="（必填）">
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">学校：</label>
                            <input type="text" v-model="competitionForm.school" required="required" @keyup="TestReg($event)" name="School" autocomplete="off" placeholder="（必填）如：广东工业大学">
                            <span></span>
                        </div>
                        <div class="col-sm-6 row-p">
                            <label for="" class="form-label">通讯地址：</label>
                            <input type="text"  name="Adress" v-model="competitionForm.adress" required="required" @keyup="TestReg($event)" autocomplete="off" placeholder="（必填）">
                            <span></span>
                        </div>
                    </div>
            </form>
            <div class="col-md-2 tuo">
              <form action="" enctype="multipart/form-data" id="form2">
                  <div class="caption-pic">
                   <img src="" class="caption-img">
                   <input type="file" name="caption-photo" class="caption-input" @change="readImg" ref="inputer" data-uploadtype="photo"/>
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
                        <input type="text" name="DuiWuName" v-model="competitionForm.duiWuName" required="required" @keyup="TestReg($event)" style="display:inline-block" placeholder="（必填）">
                        <span style="display:inline-block"></span>
                    </div>
                    <div class="col-sm-5 row-p">
                        <label for="" class="form-label" style="display:inline-block">作品名称：</label>
                        <input type="text"v-model="competitionForm.zuoPinName" name="ZuoPinName" required="required" @keyup="TestReg($event)" style="display:inline-block" placeholder="（必填）">
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
                          <input type="text" class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates1" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates1_ZhuanYe" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" name="Teammates1_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates2" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates2_ZhuanYe" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" name="Teammates2_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates3" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates3_ZhuanYe" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" name="Teammates3_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates4" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates4_ZhuanYe" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" name="Teammates4_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" style="display:inline-block" name="Teammates5" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" name="Teammates5_ZhuanYe" class="form-control" required  style="display:inline-block;" @keyup="TestReg($event)" autocomplete="off" placeholder="（选填）">
                          <span style="display:inline-block;margin-left:6px;"></span>
                        </td>
                        <td>
                          <input type="text" class="form-control" required @keyup="TestReg($event)" name="Teammates5_Telephone" style="display:inline-block;" autocomplete="off" placeholder="（选填）">
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
                    <textarea class="form-control" v-model="competitionForm.productIntroduce" rows="3" maxlength="200" style="resize: none" name="productIntroduce" placeholder="（必填）"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">技术方案：（限200字）</h4>
            <form role="form" class="other-desc" id="form6">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.technologyCase" rows="3" maxlength="200" style="resize: none" name="technologyCase" placeholder="（必填）"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">技术路线：（限200字）</h4>
            <form role="form" class="other-desc" id="form7">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.technologyWay" rows="3" maxlength="200" style="resize: none" name="technologyWay" placeholder="（必填）"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">创新点：（限100字）</h4>
            <form role="form" class="other-desc" id="form8">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.aboutNews" rows="3" maxlength="200" style="resize: none" name="aboutNews" placeholder="（必填）"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">实现的功能和指标：（限200字）</h4>
            <form role="form" class="other-desc" id="form9">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.aboutFunction" rows="3" maxlength="200" style="resize: none" name="aboutFunction" placeholder="（必填）"></textarea>
                </div>
            </form>
            <h4 class="competition-titles">测试演示情况：</h4>
            <form role="form" class="other-desc" id="form10">
                <div class="form-group">
                    <textarea class="form-control" v-model="competitionForm.aboutTest" rows="3" style="resize: none" name="aboutTest" placeholder="（必填）"></textarea>
                </div>
            </form>
        </div>
        <div class="container competition-wenxin">
            <h4 class="competition-titles">温馨提示</h4>
            <p>1、参赛作品必须以电子版的形式在网络平台提交。</p>
            <p>2、作品内容包括作品名称、设计说明及作品介绍；作品要陈述清楚、逻辑清晰、结构严谨、切合主题。</p>
            <p>3、作品形式：文字+图片，亦可附件上传作品（附件可以ZIP或RAR压缩包形式上传，且文件大小不能超过10MB）；另外可增加其他资源链接URL（如视频，图纸等）。</p>
            <p>4、下面左侧上传竞赛方案，右侧上传附件</p>
            <div class="row" style="margin:20px;">
              <form action="" enctype="multipart/form-data" name="documentForm1">
                <input type="file" name="" value="上传竞赛方案" style="display:inline-block;" class="col-xs-5" @change="GetWenjian1($event)">
              </form>
              <form enctype="multipart/form-data" name="documentForm2">
                <input type="file" name="" value="上传附件" style="display:inline-block;margin-left:30px;" class="col-xs-5" @change="GetWenjian2($event)">
              </form>
            </div>
        </div>
        <div class="container competition-chengnuo">
            <h2 class="competition-titles">作者承诺</h2>
            <h4>1、本人保证报名信息属实，不存在虚假或隐瞒。</h4>
            <h4>2、本人保证参赛作品属于自己原创，不存在侵犯任何第三人合法权益。</h4>
            <h4>3、本人声明，若因参赛作品发生侵犯第三者的合法权益，均由本人负责处理并承担相关的法律责任。与主办方无关。</h4>
            <h4>4、本人同意主办方、赞助方有权无偿使用参赛作品进行非盈利性活动，包括但不限于：公开发布、展示。</h4>
            <h4 class="chengnuo-last">5、一旦主办方发现本人存在虚报个人信息或者参赛作品非原创，本人愿意接受主办方取消本人参赛及获奖资格。</h4>
            <form class="signup-time" id="form11">
                  <span class="Table-date pull-left col-xs-12 col-sm-6" style="display:inline-block;margin-bottom:5px;">填表日期：
                      <input name="year" type="text" required @keyup="$event.currentTarget.value=$event.currentTarget.value.replace(/[^\d]/g,'')" @focusout="testYear($event)">年
                      <input name="month" type="text" required @keyup="$event.currentTarget.value=$event.currentTarget.value.replace(/[^\d]/g,'')" @focusout="testMonth($event)">月
                      <input name="day" type="text" required @keyup="$event.currentTarget.value=$event.currentTarget.value.replace(/[^\d]/g,'')" @focusout="testDay($event)">日
                  </span>
                  <span class="pull-right col-xs-12 col-sm-3" style="display:inline-block;">作者签名：<input type="text" required @keyup="testAuthor($event)" placeholder="（必填）"></span>
            </form>
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


      }
    }
  },
  computed:{

  },
  methods:{
    Spanover(reg,value,nextspan){
      if(!reg.test(value)){
        nextspan.innerHTML = "×";
        nextspan.style.color="red"
        this.checkInputs1=false
      }
      else {
        nextspan.innerHTML = "√";
        nextspan.style.color="green"
        this.checkInputs1=true
      }
    },
    TestReg(el){
      var thisInput = el.currentTarget
      var nextSpan = thisInput.nextElementSibling
      var InputName = thisInput.name
      var value = thisInput.value
      var reg
      if(InputName==="captionname"||InputName==="Teammates2"||InputName==="Teammates1"||InputName==="Teammates3"||InputName==="Teammates4"||InputName==="Teammates5"){
        reg=  /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/
        this.Spanover(reg,value,nextSpan)
      }
      else if(InputName==='Telephone'||InputName==="Teammates5-Telephone"||InputName==="Teammates4-Telephone"||InputName==="Teammates3-Telephone"||InputName==="Teammates2-Telephone"||InputName==="Teammates1-Telephone"){
        reg=  /^1[34578]\d{9}$/
        this.Spanover(reg,value,nextSpan)
      }
      else if(InputName==='XueHao'){
        reg=  /^(\d{10})$/
        this.Spanover(reg,value,nextSpan)
      }
      else if(InputName==='WeChat'){
        reg= /^[a-z_\d]+$/
        this.Spanover(reg,value,nextSpan)
      }
      else if(InputName==='ZhuanYe'||InputName==='School'||InputName==='Teammates5-ZhuanYe'||InputName==='Teammates4-ZhuanYe'||InputName==='Teammates3-ZhuanYe'||InputName==='Teammates2-ZhuanYe'||InputName==='Teammates1-ZhuanYe'){
        if(value.length<4){
          nextSpan.innerHTML = "×";
          nextSpan.style.color="red"
          this.checkInputs1=false
        }
        else {
          nextSpan.innerHTML = "√";
          nextSpan.style.color="green"
          this.checkInputs1=true
        }
      }
      else if(InputName==='DuiWuName'||InputName==='ZuoPinName'){
        if(value.length<2){
          nextSpan.innerHTML = "×";
          nextSpan.style.color="red"
          this.checkInputs1=false
        }
        else {
          nextSpan.innerHTML = "√";
          nextSpan.style.color="green"
          this.checkInputs1=true
        }
      }
      else if(InputName==='Adress'){
        if(value.length<3){
          nextSpan.innerHTML = "×";
          nextSpan.style.color="red"
          this.checkInputs1=false
        }
        else {
          nextSpan.innerHTML = "√";
          nextSpan.style.color="green"
          this.checkInputs1=true
        }
      }
    },
    GetOptions(){
      var option
      var myselect = document.getElementsByTagName('select')[0]
      var items = Object.keys(this.Options)
      for(var i =0;i<items.length;i++){
        option = document.createElement('option')
        option.value=items[i]
        option.text=items[i]
        myselect.append(option)
      }
    },
    GetTime(){
      var d = new Date()
      this.myyear = d.getFullYear()
      this.mymonth = d.getMonth()
      this.myday = d.getDate()
      var dableDate = document.getElementsByClassName('Table-date')[0]
      var inputs = dableDate.getElementsByTagName('input')
      inputs[0].value = this.myyear
      inputs[1].value = this.mymonth+1
      inputs[2].value = this.myday
    },
    testYear(el){
      var thisInput = el.currentTarget
      var value = thisInput.value
      if(value<2017||value>2019){
        el.currentTarget.value = this.myyear
      }
    },
    testMonth(el){
      var thisInput = el.currentTarget
      var value = thisInput.value
      if(value<0||value>12){
        el.currentTarget.value = this.mymonth
      }
    },
    testDay(el){
      var thisInput = el.currentTarget
      var value = thisInput.value
      if(value<0||value>31){
        el.currentTarget.value = this.myday
      }
    },
    testAuthor(el){
      var thisInput = el.currentTarget
      var value = thisInput.value
      var reg =  /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/
      if(!reg.test(value)){
        el.currentTarget.value = ''
      }
    },
    CheckAll(){
      var forms = document.getElementsByTagName('form')
      var inputs = forms[0].getElementsByTagName('input')
      for(var i =0;i<forms.length;i++){
        if(i===1||i===3||i===10){
          continue
        }
        var inputs = forms[i].getElementsByTagName('input')
        var textareas = forms[i].getElementsByTagName('textarea')
        for(var j=0;j<inputs.length;j++){
          if(inputs[j].value==''){
            this.checkInputs1=false
            console.log("inputs i:"+i+"j:"+j+" false")
            return false
          }
        }
        for(var k =0;k<textareas.length;k++){
          if(textareas[k].value==''){
            console.log("textareas i:"+i+"k:"+k+" false")
            this.checkInputs1=false
            return false
          }
        }
      }
      return true
    },
    myCheck(){
      console.log("checkall:"+this.CheckAll+"checkInputs1"+this.checkInputs1)
      if(this.CheckAll()&&this.checkInputs1==true){  //检验全部填写完毕
          /*var form1 = $("#form1")
          var form1Value = form1.serialize()
          form1Value = decodeURIComponent(form1Value,true)
          var form3 = $("#form3")
          var form3Value = form3.serialize()
          form3Value = decodeURIComponent(form3Value,true)
          var form4 = $("#form4")
          var form4Value = form4.serialize()
          form4Value = decodeURIComponent(form4Value,true)
          var form5 = $("#form5")
          var form5Name = $("#form5 textarea").attr("name")
          var form5value = $("#form5 textarea").val()
          var form6 = $("#form6")
          var form6Name = $("#form6 textarea").attr("name")
          var form6value = $("#form6 textarea").val()
          var form7 = $("#form7")
          var form7Name = $("#form7 textarea").attr("name")
          var form7value = $("#form7 textarea").val()
          var form8 = $("#form8")
          var form8Name = $("#form8 textarea").attr("name")
          var form8value = $("#form8 textarea").val()
          var form9 = $("#form9")
          var form9Name = $("#form9 textarea").attr("name")
          var form9value = $("#form9 textarea").val()
          var form10 = $("#form10")
          var form10Name = $("#form10 textarea").attr("name")
          var form10value = $("#form10 textarea").val()
          var form11 = $("#form11")
          var data = form1Value+"&"+form3Value+"&"+form4Value+"&"+form5Name+"="+form5value+"&"+form6Name+"="+form6value+"&"+form7Name+"="+form7value+"&"+form8Name+"="+form8value+"&"+form9Name+"="+form9value+"&"+form10Name+"="+form10value+"&"+form11.serialize()
          var index = data.indexOf("{",0);
          data = data.substring(index)
          data = data.split("&");
          var obj={};
          for(var key in data)
          {
              console.log(data[key]);
              obj[data[key].split("=")[0]] = data[key].split("=")[1];
          }
          this.Alldata=data*/
          return true
        }
      else {
        alert("你还有必填项目没填好！请检查！")
        return false
      }
    },
    getObjectURL(file) { //获取本地图片url
      var url = null;
      if (window.createObjectURL != undefined) { // basic
      url = window.createObjectURL(file);
      } else if (window.URL != undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    readImg(e){
      var inputDom = this.$refs.inputer
      var file = inputDom.files[0]
      var form1 = document.getElementsByTagName('form')[1]
       //限定上传文件的类型，判断是否是图片类型
      if (!/image\/\w+/.test(file.type)) {
           alert("只能选择图片")
           this.check2=false
           return false
      }
       var reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = function (e) {
        this.base64Code=this.result;
          //把得到的base64赋值到img标签显示
         $(".caption-img").attr("src",this.base64Code);
         $(".caption-img").css({"width":"118px","height":"144px"});
         this.check2=true
       }
       this.formdataPic = new FormData(form1)
    },
    GetWenjian1(el){
      var thisInput = el.currentTarget
      var file = thisInput.files[0]
      var size = Math.round(file.size/1024)/1000
      if(size>10){
        alert("你的文件已经大于10M了！")
        thisInput.value=""
      }
      var one = document.getElementsByTagName('form')[name="documentForm1"]
      this.formdataWenjian1 = new FormData(one)
    },
    GetWenjian2(el){
      var thisInput = el.currentTarget
      var file = thisInput.files[0]
      var size = Math.round(file.size/1024)/1000
      if(size>10){
        alert("你的文件已经大于10M了！")
        thisInput.value=""
      }
      var two = document.getElementsByTagName('form')[name="documentForm1"]
      this.formdataWenjian2 = new FormData(two)
    },

    PostTO(){
      console.log("postT0")
      if(this.myCheck()){
        postCompetitionRegistrationForm(this,this.competitionForm)
        console.log("alldata is:"+this.competitionForm)
        /*if(this.postDocument1()&&this.postDocument2()&&this.postCaptionPic()&&this.postOthers()){
          alert("报名成功！")
        }else {
          alert("报名失败！")
        }*/
      }
    }
  },
  mounted(){
    this.GetOptions(),
    this.GetTime()
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
