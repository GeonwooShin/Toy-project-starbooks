export default {
  // 모듈화 가능여부 => store/index.js 에 등록 가능 여부
  namespaced: true, 
  // 프로젝트 전체에서 공통으로 사용할 변수 정의
  // state에 정의된 변수는 vue 컴포넌트에서 computed 속성을 이용하여 변경사항 추적가능
  state: () => ({
    books: []
  }),
  getters: {
    bookIds(state) {
      return state.books.map(b => b.imdbID)
    }
  },
  // state에 정의된 변수를 변경하도록 하는 역할, 동기처리로써 state에 정의된 변경사항을 추적할 수 있게한다.
  mutations: {
    resetBooks(state) {
      state.books = []
    }
  },
  actions: {
    searchBooks(context) {
      context.state
    }
  }
}