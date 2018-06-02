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
        <el-select v-model="scope.row.roles" placeholder="请选择" @change="selectedChange(scope.$index)">
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
  import { getAllMembers,updateIdentity } from '../../lib/vueHelper'
    export default {
        name: "member-list",
        created(){
          this.getMemberList()
        },
        methods: {

          getMemberList(){
            getAllMembers(this,this.membersData)
          },
          selectedChange(index){
            updateIdentity(this,this.membersData[index])
          }
        },
        data(){
          return {
            membersData:[
            ],

            options:[{
              value:'member',
              label:'member'
            },{
              value:'admin',
              label:'admin'
            },{
              value:'superAdmin',
              label:'superAdmin'
            },
            ],
            haha :'成员'
          }
        }
    }


</script>

<style scoped>

</style>
