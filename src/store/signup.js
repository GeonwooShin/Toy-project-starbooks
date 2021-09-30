import axios from 'axios'

export default {
  namespaced: true, 
  state: {
    Userinfo: {
      userId: '',
      password: '',
      passwordConfirm: '',
      userName: '',
      birthDate: '',
      phoneNumber: '',
      email: ''
    },
    year: '',
    month: '',
    day: '',
    idCheck: true
  },
  getters: {},
  mutations: {
    addUsers: (state) => {
      console.log(state.Userinfo)
      axios.post('http://13.209.146.204:8080/api/signup', state.Userinfo)
        .then(response => {
        console.log(response)
        })
        .catch(error => {
        console.log(error)
        })
    },
    resetRegistration(state) {
      state.Userinfo = {
        userId: '',
        password: '',
        passwordConfirm: '',
        userName: '',
        birthDate: '',
        phoneNumber: '',
        email: ''
      }
    },
    birthChecking(state) {
      const date = `${state.year}` + `${state.month}`.padStart(2, '0') + `${state.day}`.padStart(2, '0')
      state.Userinfo = {...state.Userinfo, birthDate: date }
    },
    idChecking(state, payload) {
      console.log(state.Userinfo.userId)
      const { userId } = payload
      axios.get(`http://13.209.146.204:8080/api/check/${userId}`)
      .then(res => {
        console.log(res)
        let statusCode = res.data.code
        if(statusCode === "E0008") {
          state.idcheck = true
        }else if(statusCode === "E0009") {
          state.idcheck = false
        }
      })
    }
  },
  actions: {
    async addUsers({ commit }, payload) {
    return await commit('addUsers', payload)
    },
    async idChecking({ commit }, payload) {
      return await commit('idChecking', payload)
    }
  }
}