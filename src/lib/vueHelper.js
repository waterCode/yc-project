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
export const  doLogin = (that, data) => {
  network.login(data)
    .then(res => {
      console.log("code"+res.data.result)
      if (res.data.result) {
        sessionStorage.setItem('accessToken', res.data.token)
        sessionStorage.setItem('currentUserName', res.data.userName)
        showMsg(that, true, '登录成功', 'success')
        router.push({name: 'homePage', params: {username: res.data.userName}})

      } else {
        showMsg(that, true, '登录失败，账号或密码错误', 'error')
      }
    })
    .catch(err => {
      console.log(err)
    })
}

// doRegister
export const doRegister = (that, data) => {

  network.register(data)

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

/*要求是管理者的token才能返回数据*/
export const getAllParticipantsMembers=(that,data) =>{
    //拿到token
    network.getAllParticipantsMembers(sessionStorage.getItem('accessToken'))
      .then(res =>{

        res.data.forEach((e)=>{
          data.push(e)
        })
        console.log("allMember")
        console.log(res.data)
      })
  }

  export const getAllMembers=(that,data) =>{
    //拿到token
    network.getAllMembers(sessionStorage.getItem('accessToken'))
      .then(res =>{
        res.data.forEach((e)=>{
          data.push(e)
        })
      })
  }

export const postCompetitionRegistrationForm = (that, data) =>{
  network.postCompetitionData(data)
    .then(res =>{
      if(res.data.result){
        //弹窗成功并跳转
        showMsg(that, true, '提交成功', 'success')
        router.push({name: 'homePage'})
      }
    })
}

export const postJoinUsData = (that, data) =>{
  network.postJoinUsData(data)
    .then(res =>{
      if(res.data.result){
        //弹窗成功并跳转
        showMsg(that, true, '提交成功', 'success')
        router.push({name: 'homePage'})
      }
    })
}


export const submitTeamGrade = (that,data) =>{
  network.submitTeamGrade(sessionStorage.getItem('accessToken'),data)
}

export const getExcel = (that) =>{
  network.getExcel(sessionStorage.getItem('accessToken'))
    .then(reponse =>{
      if(!reponse){
        return
      }else {
        let url = window.URL.createObjectURL(new Blob([reponse.data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download','excel.xlsx')

        document.body.appendChild(link)
        link.click()
      }
    } )
}



