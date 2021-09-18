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
    }
  },
  getters: {},
  mutations: {
    addUsers: (state) => {
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
    }
  },
  actions: {
      async addUsers({ commit }, payload) {
      return await commit('addUsers',payload)
    }
  }
}