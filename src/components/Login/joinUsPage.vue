<template>
<div>
  <div id="wrap">
      <div class="banner">
        <div class="container">

          <div class="row"><div class="col-md-12"></div></div>

          <div class="form-horizontal dowebok">
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
                      <input type="text" class="form-control" v-model="joinUsForm.joinerName" name="username" id="username" placeholder="姓名"    required>
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
                      <input type="text" class="form-control" name="perfession_class" v-model="joinUsForm.className" placeholder="专业班级（如：15信息工程*班）" id="perfession_class"   required>
                    </div>
                  </div>



                  <div class="form-group">
                    <label class="col-md-1"></label>
                    <div class="col-md-10">
                      <input type="text" class="form-control" name="qq" v-model="joinUsForm.qqNum" placeholder="qq" id="qq" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " required>
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
                      <select class="form-control" v-model="joinUsForm.groupName" name="major" id="major">
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
                      <textarea class="form-control" rows="3" v-model="joinUsForm.introduceDescription" name="self_introduction" placeholder="自我介绍" id="self_introduction"  maxlength="100"  required></textarea>
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
                        <label><input type="checkbox" v-model="joinUsForm.isAdjust" name="obey" id="obey" value="1">是</label>
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
          </div>

        </div>
      </div>
      <br/>
  </div>

</div>

</template>

<script>
  import {postJoinUsData} from '../../lib/vueHelper'
    export default {
        name: "join-us-page",

      methods:{
        joinUs(){
          postJoinUsData(this,this.joinUsForm);
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

<style scoped>
  .radio{font-size:14px;}
  .radio input{ display:block; float:left;}
  .radio span{ display:block; float:left; *padding-top:5px;}

  .banner{
    background: url(../../assets/img/join_us/bg.jpg) no-repeat 0px 0px;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
  }

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
