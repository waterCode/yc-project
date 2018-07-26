<template>

  <div>
    <el-table
      :data="participantsData"
      >

      <el-table-column
        prop="id"
        label="id"/>
      <el-table-column
        prop="duiWuName"
        label="队伍名"/>
      <el-table-column
        prop="captionName"
        label="队长名"/>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="findMemberDetail(scope.$index)" type="text" size="small">查看简历</el-button>
        </template>

      </el-table-column>
    </el-table>


    <div>
    <el-button type="primary" @click = 'getRegistrationExcel()'>导出excel表</el-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {getAllParticipantsMembers,getExcel} from '../../lib/vueHelper'
  import router from '../../router'

  export default {
    name: "participant-list",
    created() {

    },
    methods: {
      findMemberDetail(index) {
        console.log(this.participantsData[index]);
        //将选中的id存session里面
        sessionStorage.setItem("participantId",this.participantsData[index].id);
        console.log("id:"+this.participantsData[index].id);
        router.push({name: 'gradePage', params: {data: this.participantsData[index]}})
      },
      getParticipantsList() {
        // getAllParticipantsMembers(this, this.participantsData)
        var token = sessionStorage.getItem('accessToken');
        axios({
          url:"http://47.106.105.117:8083/secure/participants",
          method:"get",
          headers:{'authorization' : token},
        }).then(res=>{
          var AllDatas = res.data.registrationFormList;
          // for(var i=0;i>AllDatas.length;i++){
          //  this.participantsData.push(AllDatas[i])
          // }
          // console.log(AllDatas);
          this.participantsData=AllDatas;
        })
      },
      getRegistrationExcel(){
        getExcel(this)
      }
    },
    mounted(){
      this.getParticipantsList()
    },
    data() {
      return {
        participantsData: []
      }
    }
  }


</script>

<style scoped>

</style>
