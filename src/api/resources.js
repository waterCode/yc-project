import config from '../config'

var API_ROOT = config.API_ROOT

export default {
  login: `${API_ROOT}login`,
  register: `${API_ROOT}register`,
  competition: `${API_ROOT}team/joinCompetition`,
  competitionAll: `${API_ROOT}team/joinCompetitionAll`,
  joinUs: `${API_ROOT}team/joinUs`,
  participantInfo: `${API_ROOT}secure/participants`,
  allMembers: `${API_ROOT}secure/users`,
  submitGrade: `${API_ROOT}secure/submitGrade`,
  registrationExcel: `${API_ROOT}secure/getExcel`,
  registrationById: `${API_ROOT}secure/getRegistrationForm`
}
