<template>
  <div>
    <competitionHeader></competitionHeader>
      <gradeContent></gradeContent>
      <competitionFooter></competitionFooter>
  </div>
</template>

<script>
import gradeContent from './gradeContent'
import competitionHeader from './competitionHeader.vue'
import competitionFooter from './competitionFooter.vue'

export default {

  components: {
    gradeContent,
    competitionHeader,
    competitionFooter
  }
}
</script>

<style>
h1,h2,h3,h4,h5,label,td,th{
  padding: 0;
  margin: 0;
}
ul,li,span,p{
  padding: 0;
  margin:0;
  list-style: none;
}
td{
  text-align: center;
  font-weight: 700;
}
input,select{
  border: 1px solid #ccc;
}
.team-title{
  color: #fff !important;
}
.competition-titles{
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  font-weight: 600;
  margin-bottom: 30px;
}
.row-p{
  margin-bottom: 18px;
}
.row-p select{
  width: 178px;
  height: 25px;
}
.row-p label,.row-p span,.row-p input{
  display: inline-block;
}
.row-p label{
  width: 85px;
  text-align: right;
}
.row-p-special input{
  width: 300px;
}
.caption-pic{
  width: 120px;
  height: 146px;
  border:1px solid black;
  cursor: pointer;
  margin: 0 auto;
}
.caption-desc{
  padding-bottom: 20px;
}
.caption-desc
.tuo{
  text-align: center;
  padding: 0 !important;
}
.tuo p{
  display: inline-block;
  width: auto;
  padding-top: 5px;
  font-weight: 700;
  font-size: 13px;
  font-style: '微软雅黑';
}
.other-desc{
  margin-bottom: 40px;
}
.signup-time{
   margin-top: 20px;
  margin-bottom: 30px;
}
.signup-time span:first-child input{
  width: 25px;
  text-align: center;
  margin-right: 3px;
}
.signup-time span:first-child input:first-child{
  width: 50px;
}
.signup-time span:last-child input{
  width: 100px;
}
.competition-footer{
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin-top: 50px;
  background: #000;
  color: #fff;
}
</style>
