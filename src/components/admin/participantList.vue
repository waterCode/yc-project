<template>

  <div>
    <el-table
      :data="participantsData"
      >

      <el-table-column
        prop="id"
        label="id"
        id="table-box-box"
      />
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
      <el-table-column
        prop="newGrade"
        label="创新分"/>
      <el-table-column
        prop="practiceGrade"
        label="实践分"/>
      <el-table-column
        prop="otherGrade"
        label="其他分"/>
    </el-table>


    <div>
    <div class="wrapper">
      <el-button type="primary" @click = 'getRegistrationExcel()'>导出excel表</el-button>
      <div>（若行列不对齐，请按F5刷新）</div>
    </div>
    <!-- <el-button type="primary" @click = 'getRegistrationExcel()'>导出excel表</el-button> -->
<!--     <div>（若行列不对齐，请按F5刷新）</div> -->
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
        this.getParticipantsList()
    },
    methods: {
      findMemberDetail(index) {
        // console.log(this.participantsData[index]);
        //将选中的id存session里面
        sessionStorage.setItem("participantId",this.participantsData[index].id);
        // console.log("id:"+this.participantsData[index].id);
        router.push({name: 'gradePage', params: {data: this.participantsData[index]}})
      },
      getParticipantsList() {
        var hasReload = sessionStorage.getItem('hasSetRoad');
        if(!hasReload){
          location.reload();
          sessionStorage.setItem('hasSetRoad',true);
        }
        var token = sessionStorage.getItem('accessToken');
        axios({
          url:"http://47.106.105.117:8083/secure/participants",
          method:"get",
          headers:{'authorization' : token},
        }).then(res=>{
          console.log(res.data.data);
          var AllDatas = res.data.data;
          this.participantsData=AllDatas;
        })
      },
      getRegistrationExcel(){
        getExcel(this)
      }
    },
    mounted(){

    },
    data() {
      return {
        participantsData: []
      }
    }
  }


</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
