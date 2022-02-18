import axios from 'axios'

export default {
  // 모듈화 가능여부 => store/index.js 에 등록 가능 여부
  namespaced: true, 
  // 프로젝트 전체에서 공통으로 사용할 변수 정의
  // state에 정의된 변수는 vue 컴포넌트에서 computed 속성을 이용하여 변경사항 추적가능
  state: () => ({
    books: [],
    totalpage: [],
    theBook: {},
    homeBooks1: {},
    homeBooks2: {},
    homeBooks3: {},
    homeBooks4: {},
    homeBooks5: {},
    searchHomeBooksIdStar: [],
    searchHomeBooksIdHot: []

  }),
  getters: {},
  // state에 정의된 변수를 변경하도록 하는 역할, 동기처리로써 state에 정의된 변경사항을 추적할 수 있게한다.
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  // 비동기
  actions: {
    async searchBooks({ commit }, payload) {
      console.log('123123')
      const res = await _fetchBooks({
        ...payload
      })
      console.log(res)
      const { content, totalElements, totalPages } = res.data
      commit('updateState', {
        books: content,
        totalpage: totalPages
      })
      console.log(totalElements) // 320
      console.log(typeof totalElements) // number
      console.log(totalPages)// 16
      console.log(typeof totalPages)// number
    },
    async searchBookWithId({ commit }, payload) {
      commit('updateState', {
        theBook: {}
      })
      try {
        const res = await _fetchBooks(payload)
        console.log(res)
        commit('updateState', {
          theBook: res.data
        })
      } catch(error) {
        commit('updateState', {
          theBook: {}
        })
      }
    },


    //--------------!!!!!homeBooks Aggro Start!!!!!-----------------
    async homeBooks1({ commit }, payload) {
      try {
        const res = await _fetchBooks(payload)
        // const { content } = res.data
        commit('updateState', {
          homeBooks1: res.data
        })
      } catch(error) {
        commit('updateState', {
          homeBooks1: {}
        })
      }
    },
    async homeBooks2({ commit }, payload) {
      try {
        const res = await _fetchBooks(payload)
        // const { content } = res.data
        commit('updateState', {
          homeBooks2: res.data
        })
      } catch(error) {
        commit('updateState', {
          homeBooks2: {}
        })
      }
    },
    async homeBooks3({ commit }, payload) {
      try {
        const res = await _fetchBooks(payload)
        // const { content } = res.data
        commit('updateState', {
          homeBooks3: res.data
        })
      } catch(error) {
        commit('updateState', {
          homeBooks3: {}
        })
      }
    },
    async homeBooks4({ commit }, payload) {
      try {
        const res = await _fetchBooks(payload)
        // const { content } = res.data
        commit('updateState', {
          homeBooks4: res.data
        })
      } catch(error) {
        commit('updateState', {
          homeBooks4: {}
        })
      }
    },
    async homeBooks5({ commit }, payload) {
      try {
        const res = await _fetchBooks(payload)
        // const { content } = res.data
        commit('updateState', {
          homeBooks5: res.data
        })
      } catch(error) {
        commit('updateState', {
          homeBooks5: {}
        })
      }
    },
    async searchHomeBooksIdStar({ commit }, payload) {
      console.log('123123')
      const res = await _fetchBooks({
        ...payload
      })
      console.log(res)
      const { content, totalPages } = res.data
      commit('updateState', {
        searchHomeBooksIdStar: content,
        totalpage: totalPages
      })
    },
    async searchHomeBooksIdHot({ commit }, payload) {
      console.log('123123')
      const res = await _fetchBooks({
        ...payload
      })
      console.log(res)
      const { content, totalPages } = res.data
      commit('updateState', {
        searchHomeBooksIdHot: content,
        totalpage: totalPages
      })
    }
    //--------------!!!!!!homeBooks Aggro End!!!!!!!-----------------
  }
}

function _fetchBooks(payload) {
  const { page, size, id } = payload
  const url = id
  ? `http://13.209.146.204:8080/api/books/${id}` 
  : `http://13.209.146.204:8080/api/books?page=${page}&size=${size}&sort=createdAt`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}