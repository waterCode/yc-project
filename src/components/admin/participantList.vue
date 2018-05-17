<template>

  <div>
    <el-table
      :data="participantsData"
      height="400">

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
  import {getAllParticipantsMembers,getExcel} from '../../lib/vueHelper'
  import router from '../../router'

  export default {
    name: "participant-list",
    created() {
      this.getParticipantsList()
    },
    methods: {
      findMemberDetail(index) {
        console.log(this.participantsData[index])
        router.push({name: 'gradePage', params: {data: this.participantsData[index]}})
      },
      getParticipantsList() {
        getAllParticipantsMembers(this, this.participantsData)
      },
      getRegistrationExcel(){
        getExcel(this)
      }
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
