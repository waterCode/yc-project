<template>

  <el-table
    :data="membersData"
  >

    <el-table-column
      prop="id"
      label="id"/>
    <el-table-column
      prop="userName"
      label="姓名"/>
    <el-table-column
      label="管理员级别">
      <template slot-scope="scope">
        <el-select v-model="haha" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>

    </el-table-column>
  </el-table>
</template>
<script>
  import { getAllMembers } from '../../lib/vueHelper'
    export default {
        name: "member-list",
        created(){
          this.getMemberList()
        },
        methods: {

          getMemberList(){
            getAllMembers(this,this.membersData)
          }
        },
        data(){
          return {
            membersData:[
            ],

            options:[{
              value:'选项1',
              label:'成员'
            },{
              value:'选项2',
              label:'管理员'
            },{
              value:'选项3',
              label:'超级管理员'
            },
            ],
            haha :'成员'
          }
        }
    }


</script>

<style scoped>

</style>
