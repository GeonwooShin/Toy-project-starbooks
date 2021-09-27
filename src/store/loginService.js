import axios from 'axios'

export default {
  namespaced: true,
  state: {
    UserInfoObj: {
      id: '',
      password: ''
    },    
      isLogin: false,
      isLoginError: false
  },
  getters: {

  },
  mutations: {
    login(state) {
      console.log(state.UserInfoObj)
      axios.post('http://13.209.146.204:8080/api/login', state.UserInfoObj)
      .then(res => {
        if(res.data.code === "E0008") {  
          console.log(res)
          alert("로그인 완료")
          state.isLogin = true
          state.isLoginError = false
        }
      })
      .catch(() => {
        alert("아이디 또는 비밀번호를 정확히 입력해 주세요.")
      })
    },
    logout(state) {
      state.isLogin = false
      state.UserInfoObj.id = ''
      state.UserInfoObj.password = ''
      console.log(state.UserInfoObj)
      console.log(state.isLogin)
    }
  },
  actions: {
    async login({ commit }, payload) {
      return await commit('login', payload)
      
    }
  }
}