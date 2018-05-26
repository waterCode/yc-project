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
        router.push({name: 'honpnmePage', params: {username: res.data.userName}})

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
    .then(res =>{
      if(res.data.result){
        //注册成功
        showMsg(that, true, res.data.message, 'success')
        router.push({name:'Login'})//跳转至登陆界面
      }else {
        showMsg(that, true, res.data.message, 'error')
      }
    })


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
      }else {
        showMsg(that, true, '提交失败', 'failed')
      }
    })
}

export const postAllCompetitionRegistrationForm = (that, dataForm) =>{
  network.postAllCompetitionData(dataForm)
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
};


export const getRegistrationById = (that) =>{
  network.getRegistrationById(sessionStorage.getItem('participantId'))//拿到id进行查询
};



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



