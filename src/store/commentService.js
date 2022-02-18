import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    comment:'',
    starRate: '',
    commentList: [],
    likedList: []
  }),
  getters: {

  },
  mutations: {
    fixComment(state, payload) {
      const {id, commentId, comment, starRate} = payload
      axios.put(`http://13.209.146.204:8080/api/books/${id}/comments/${commentId}`, {
        comment: comment,
        starRate: starRate
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
    deleteComment(state, payload) {
      const {commentId, id} = payload
      axios.delete(`http://13.209.146.204:8080/api/books/${id}/comments/${commentId}`, {
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
    postHeart(state, payload) {
      const {id} = payload
      axios.post(`http://13.209.146.204:8080/api/books/${id}/heart`, {
        check: true,
        heartCount: 1
      }, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('user-token')
        }
      })
      .then((res) => {
        console.log(res)
        console.log(state.likedList)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteHeart(state, payload) {
      const {id} = payload
      axios.delete(`http://13.209.146.204:8080/api/books/${id}/heart`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('user-token')
        }
      })
      .then((res) => {
        console.log(res)
        console.log(state.likedList)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    pushComment(state, payload) {
      state.commentList.unshift(payload)
    },
    commentUpdate(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
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
        this.state.comment = ''
        this.state.starRate = ''
      })
      .catch((err) => {
        if(err.response.data.code == "E0001") {
          alert('별점과 함께 입력해주세요!')
        }
        if(err.response.data.code == "E0010") {
          alert('댓글은 한 책당 한 번만 작성할 수 있습니다.')
        }
        console.log(err.response)
        this.state.comment = ''
        this.state.starRate = ''
      })
    },
    async getComment({commit}, payload) {
      const {id} = payload
      axios.get(`http://13.209.146.204:8080/api/books/${id}/comments`)
      .then((res) => {
        console.log(res)
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
    },
    async getHeart({commit}, payload) {
      const {id} = payload
      axios.get(`http://13.209.146.204:8080/api/books/${id}/heart`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('user-token')
        }
      })
      .then(res => {
        console.log(res)
        const { map } = res.data
        commit('commentUpdate', {
          likedList: map
        })
      })
      .catch(err => {
        console.log(err)
        commit('commentUpdate', {
          likedList: {}
        })
      })
    },
    async fixComment({commit}, payload) {
      return await commit('fixComment', payload)
    },
    async postHeart({ commit }, payload) {
      return await commit('postHeart', payload)
    },
    async deleteHeart({ commit }, payload) {
      return await commit('deleteHeart', payload)
    }
  }
}