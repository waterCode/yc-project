<template>

  <div>
    <el-table
      :data="joinUsMembersData"
      >

      <el-table-column style="text-align:center"
        prop="id"
        label="次序 ↓"/>
      <el-table-column
        prop="joinerName"
        label="姓名"/>
      <el-table-column
        prop="studentNum"
        label="学号"/>
      <el-table-column
        prop="telephone"
        label="电话"/>
      <el-table-column
        prop="college"
        label="学院"/>
      <el-table-column
        prop="className"
        label="班别"/>
      <el-table-column
        prop="groupName"
        label="组别"/>
      <el-table-column
        prop="qqNum"
        label="QQ"/>
      <el-table-column
        prop="qqEmail"
        label="QQ邮箱"/>
      <el-table-column
        prop="introduceDescription"
        label="自我介绍"/>
      <el-table-column
        prop="skill"
        label="掌握技能"/>
      <!-- <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="findJoinUsMembersDetail(scope.$index)" type="text" size="small">查看报名表</el-button>
        </template>
      </el-table-column> -->
    </el-table>

  </div>
</template>

<script>
  import axios from 'axios'
  import {getAllJoinUsMembers,getExcel} from '../../lib/vueHelper'
  import router from '../../router'

  export default {
    name: "join-us-list",
    created() {
      this.getAllJoinUsMembers()
    },
    methods: {
      findJoinUsMembersDetail(index) {
        //将选中的id存session里面
        sessionStorage.setItem("joinUsMemberId",this.joinUsMembersData[index].id);
        // console.log("id:"+this.joinUsMembersData[index].id);
        // router.push({name: 'gradePage', params: {data: this.participantsData[index]}})
      },
      getAllJoinUsMembers() {
        var token = sessionStorage.getItem('accessToken');
        axios({
          url:"http://47.106.105.117:8083/secure/joinUsMembers",
          method:"get",
          headers:{'authorization' : token},
        }).then(res=>{
          var AllDatas = res.data.joinUsFormList;
          this.joinUsMembersData=AllDatas;
          console.log(this.joinUsMembersData);
        })
      },
      getRegistrationExcel(){
        getExcel(this)
      }
    },
    data() {
      return {
        joinUsMembersData: []
      }
    }
  }


</script>

<style scoped>
.has-gutter >.cell{
  text-align: center !important;
}
</style>
