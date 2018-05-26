<template>
  <div>
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
      <el-menu-item index="2">用户权限管理</el-menu-item>
      <el-menu-item index="3">邮件群发</el-menu-item>

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
        }else {

        }
      }
    }
  }
</script>

<style scoped>

</style>
