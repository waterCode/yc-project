import config from '../config'

var API_ROOT = config.API_ROOT

export default {
  login: `${API_ROOT}login`,
  register: `${API_ROOT}register`,
  competition: `${API_ROOT}team/joinCompetition`,
  participantInfo: `${API_ROOT}secure/participants`,
  submitGrade: `${API_ROOT}secure/submitGrade`,
  registrationExcel: `${API_ROOT}secure/getExcel`
}
