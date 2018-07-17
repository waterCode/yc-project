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
            <router-link to="/" class="navbar-brand" href="#">YC勇创</router-link>
          </div>
          <div class="collapse navbar-collapse pull-right" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">主页</router-link></li>
              <li class="active"><router-link to="/joinus">加入我们</router-link></li>
              <li><a href="#">竞赛报名</a></li>
              <li><a href="#">登录</a></li>
              <li><a href="#">注册</a></li>
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
        <span class="big1">报名</span>
        <span class="big2">Sign up now</span>
        <span></span>
      </div>
      <form class="joinus-form">
        <input type="text" name="name" placeholder="姓名" required="required">
        <input type="text" name="xueyuan" placeholder="学院" required="required">
        <input type="text" name="xuehao" placeholder="学号" required="required">
        <input type="text" name="zhuanye" placeholder="专业班级" required="required">
        <input type="text" name="qq" placeholder="QQ" required="required">
        <input type="text" name="qq-email" placeholder="QQ邮箱" required="required">
        <select>
          <option selected="selected" required="required">1</option>
        </select>
        <textarea style="resize:none" placeholder="自我介绍" required="required"></textarea>
        <textarea style="resize:none" placeholder="目前掌握技能" required="required"></textarea>
        <textarea style="resize:none" placeholder="项目经验" required="required"></textarea>
        <textarea style="resize:none" placeholder="获奖情况" required="required"></textarea>
        <a class="submit-button">提交</a>
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
export default {
  components:{
      FooterYc
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './../../../static/css/joinus.css'

</style>
