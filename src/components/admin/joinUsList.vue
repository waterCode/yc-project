<template>

  <div>
    <el-table
      :data="joinUsMembersData"
      >

      <el-table-column
        prop="id"
        label="id"/>
      <el-table-column
        prop="joinerName"
        label="姓名"/>
      <el-table-column
        prop="captionName"
        label="电话"/>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="findJoinUsMembersDetail(scope.$index)" type="text" size="small">查看报名表</el-button>
        </template>

      </el-table-column>
    </el-table>


<!--    <div>
    <el-button type="primary" @click = 'getRegistrationExcel()'>导出excel表</el-button>
    </div>-->
  </div>
</template>

<script>
  import {getAllJoinUsMembers,getExcel} from '../../lib/vueHelper'
  import router from '../../router'

  export default {
    name: "join-us-list",
    created() {
      this.getAllJoinUsMembers()
    },
    methods: {
      findJoinUsMembersDetail(index) {
        console.log(this.joinUsMembersData[index]);
        //将选中的id存session里面
        sessionStorage.setItem("joinUsMemberId",this.joinUsMembersData[index].id);
        console.log("id:"+this.joinUsMembersData[index].id);
        //router.push({name: 'gradePage', params: {data: this.participantsData[index]}})
      },
      getAllJoinUsMembers() {
        getAllJoinUsMembers(this, this.joinUsMembersData)
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

</style>
