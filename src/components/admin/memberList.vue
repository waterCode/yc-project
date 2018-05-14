<template>

  <el-table
    :data="membersData"
  >

    <el-table-column
      prop="id"
      label="id"/>
    <el-table-column
      prop="name"
      label="姓名"/>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click= "findMemberDetail(scope.$index,membersData)"type="text" size="small">查看简历</el-button>
      </template>

    </el-table-column>
  </el-table>
</template>
<script>
  import { doRegister } from '../../lib/vueHelper'
    export default {
        name: "member-list",
        created(){
          getMemberList()
        },
        methods: {
          findMemberDetail(index,data){

          },
          getMemberList(){

          }
        },
        data(){
          return {
            membersData:[{
              id:'1',
              name: '种哈哈1'
            },{
              id:'1',
              name: '种哈哈2'
            },{
              id:'1',
              name: '种哈哈3'
            },{
              id:'1',
              name: '种哈哈4'
            }
            ]
          }
        }
    }


</script>

<style scoped>

</style>
