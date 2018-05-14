<template>

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
        <el-button @click= "findMemberDetail(scope.$index)"type="text" size="small">查看简历</el-button>
      </template>

    </el-table-column>
  </el-table>
</template>

<script>
  import { getAllParticipantsMembers } from '../../lib/vueHelper'
  import router from '../../router'
    export default {
        name: "participant-list",
        created(){
          this.getParticipantsList()
        },
        methods: {
          findMemberDetail(index){
            console.log(this.participantsData[index])
            router.push({name: 'gradePage', params: {data:this.participantsData[index] }})
          },
          getParticipantsList(){
            getAllParticipantsMembers(this,this.participantsData)
          }
        },
        data(){
          return {
            participantsData:[
            ]
          }
        }
    }


</script>

<style scoped>

</style>
