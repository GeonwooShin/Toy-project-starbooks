import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    comment:'',
    starRate: '',
    commentList: [],
  }),
  getters: {

  },
  mutations: {
    postComment(state, payload) {
      const {id} = payload
      axios.post(`http://13.209.146.204:8080/api/books/${id}/comments`, {
        comment: this.state.comment,
        starRate: this.state.starRate
      }, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('user-token')
        }
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        alert('로그인 후 이용 가능합니다.')
        console.log(err)
      })
      console.log(state.comment)
      console.log(state.starRate)
    },
    fixComment(state, payload) {
      const {id, commentId} = payload
      axios.put(`http://13.209.146.204:8080/api/books/${id}/comments/${commentId}`, {
        comment: this.state.comment,
        starRate: this.state.starRate
      }, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('user-token')
        }
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    commentUpdate(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async postComment({ commit }, payload) {
      return await commit('postComment', payload)
    },
    async fixComment({commit}, payload) {
      return await commit('fixComment', payload)
    },
    async getComment({commit}, payload) {
      const {id} = payload
      axios.get(`http://13.209.146.204:8080/api/books/${id}/comments`)
      .then((res) => {
        console.log(res)
        commit('commentUpdate', {
          commentList: {}
        })
        const { comment } = res.data.commentMap
        commit('commentUpdate', {
          commentList: comment
        })
      })
      .catch((err) => {
        console.log(err)
        commit('commentUpdate', {
          commentList: {}
        })
      })
    }
  }
}