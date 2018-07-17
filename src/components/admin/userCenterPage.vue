<template>
  <div>
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
            <ul class="nav navbar-nav thenavbar">
              <li><router-link to="/">主页</router-link></li>
              <li><router-link to="/joinUsPage">加入我们</router-link></li>
              <li class="active"><router-link to="/userCenterPage/a">查看详情</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="1" >竞赛报名管理</el-menu-item>
      <el-menu-item index="2">新成员报名管理</el-menu-item>
      <el-menu-item index="3">用户权限管理</el-menu-item>
      <el-menu-item index="4">邮件群发</el-menu-item>

    </el-menu>
  <div>
    <router-view/>
  </div>
  </div>
</template>

<script>
  export default {
    name: "user-center-page",
    created(){
      this.$router.push('/userCenterPage/a');
    },
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(key == 1){
          console.log("1 key")
          this.$router.push('/userCenterPage/a');
        }else if(key ==2){
          this.$router.push('/userCenterPage/b');
        }else if (key ==3){
          this.$router.push('/userCenterPage/c');
        }else if (key == 4){
          this.$router.push('/userCenterPage/d');
        }
      }
    }
  }
</script>

<style scoped>
.navbar-inverse{
    margin-bottom: 0;
}
.navbar{
  border-radius: 0;
}
.navbar-brand{
  color: #fff;
}
</style>
