<template>
  <div class="footer">
        <div class="footer-content">
          <div class="footer-content-left">
            <span class="call-us">联系我们</span>
            <span class="footer-yc">YC勇创</span>
          </div>
          <div class="footer-content-right">
            <img src="./../../../static/images/二维码.jpg" alt="">
          </div>
        </div>
        <div class="footer-copyright">
          <span>Copyright © 2018 All Rights Reserved.</span>
          <span>YC勇创团队 版权所有</span>
        </div>
  </div>

</template>

<script>


export default {
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  padding: 50px 0;
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bbb;
}
.footer-content{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
}
.footer-content-left{
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  align-items: center;
}
.call-us{
  margin-bottom: 10px;
}
.footer-yc{
  color: #fff;
}
.footer-content-right{

}
@media screen and (max-width: 408px){
  .footer-copyright{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-copyright span:first-child{
    margin-bottom: 10px;
  }
}
</style>
