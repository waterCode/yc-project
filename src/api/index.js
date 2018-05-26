import Axios from 'axios'
import API from './resources'

export default {
  login (data) {
    return Axios.post(API.login, data)
  },
  register (data) {
    return Axios.post(API.register, data)
  },
  postCompetitionData(data){
    return Axios.post(API.competition, data)
  },
  getRegistrationById(id){
    return Axios.post(API.competition, id)
  },
  postAllCompetitionData(dataForm){
    let config = {
      headers:{'Content-Type':'multipart/form-data'}
    };
    return Axios.post(API.competitionAll, dataForm,config)
  },
  postJoinUsData(data){
    return Axios.post(API.joinUs, data)
  },
  getAllParticipantsMembers(data){
    Axios.defaults.headers.common['authorization'] = data
    return Axios.get(API.participantInfo)
  },
  getAllMembers(token){
    Axios.defaults.headers.common['authorization'] = token
    return Axios.get(API.allMembers)
  },

  submitTeamGrade(token,grade){
    Axios.defaults.headers.common['authorization'] = token
    return Axios.post(API.submitGrade,grade)
  },

  getExcel(token){
    Axios.defaults.headers.common['authorization'] = token
    //Axios.responseType = 'blob'
   /* return Axios.get(API.registrationExcel)*/
    return Axios({
      method:'get',
      url:API.registrationExcel,
      responseType:'blob'
    })
  }

}
