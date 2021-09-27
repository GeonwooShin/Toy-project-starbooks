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
      email: '',
      year: '',
      month: '',
      day: ''
    }
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
      const date = `${state.Userinfo.year}` + `${state.Userinfo.month}`.padStart(2, '0') + `${state.Userinfo.day}`.padStart(2, '0')
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
          alert('사용가능한 아이디 입니다.')
        }else if(statusCode === "E0009") {
          alert('이미 존재하는 아이디 입니다.')
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