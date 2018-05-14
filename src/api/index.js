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
  getAllParticipantsMembers(data){
    Axios.defaults.headers.common['authorization'] = data
    return Axios.get(API.participantInfo)
  }

}
