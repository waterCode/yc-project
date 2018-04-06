import network from '../api/index'
import API from '../api/resources'
import router from '../router'

// 显示提示框
export const showMsg = (that, close, msg, type) => {
  that.$message({
    showClose: close,
    message: msg,
    type: type
  })
}


// doLogin
export const doLogin = (that, data) => {
  /*api.login(data)
    .then(res => {
      if (res.data.code === 0) {
        sessionStorage.setItem('accessToken', res.data.access_token)
        sessionStorage.setItem('username', res.data.data.username)
        sessionStorage.setItem('uid', res.data.data._id)
        showMsg(that, true, '登录成功', 'success')
        router.push({path: '/p/index', params: {username: res.data.username}})
      } else {
        showMsg(that, true, '登录失败，账号或密码错误', 'error')
      }
    })
    .catch(err => {
      console.log(err)
    })*/
}

// doRegister
export const doRegister = (that, data) => {

  network.register(data)
  /*$.ajax({
    url: API.register,
    type:'post',
    data: data,
    dataType:'json',
    asycn:false,
    cache:false,
    contentType: false,
    processData: false,
    headers:{ 'Content-Type': 'application/json;charset=UTF-8'},
    success:function(res){
      console.log("success")
      alert("注册成功")
      //跳转
      router.push({path: 'login', params: {username: data.userName}})
      return true
    }
  })
*/
  /*api.register(data)
    .then(res => {
      if (res.data.code === 0) {
        showMsg(that, true, '注册成功', 'success')
        router.push({name: 'Login'})
      } else if (res.data.code === 88) {
        showMsg(that, true, '验证码错误', 'error')
      } else if (res.data.code === 99) {
        showMsg(that, true, '用户名已被注册', 'error')
      }
    })
    .catch(err => {
      console.log(err)
    })*/
}



